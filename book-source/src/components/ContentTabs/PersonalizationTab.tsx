/**
 * T058-T070: PersonalizationTab Component
 * 
 * Displays AI-personalized content tailored to user's proficiency levels
 * with SSE streaming support. Mirrors SummaryTab pattern with login button
 * integration and profile-based personalization.
 * 
 * T109: State Machine Documentation
 * 
 * State Flow:
 * 1. IDLE (initial) → Component mounts
 * 2. CHECKING_AUTH → Check if user authenticated
 *    - If NOT authenticated → LOGIN_REQUIRED (show login button)
 *    - If authenticated → CHECKING_CACHE
 * 3. CHECKING_CACHE → Check sessionStorage for cached content
 *    - Check session expiration first
 *    - If expired → ERROR (show expiration message)
 *    - If cache hit → CACHE_HIT (display cached content instantly)
 *    - If cache miss → READY (show generate button)
 * 4. READY → User clicks "Generate Personalized Content"
 *    - Validate session not expired
 *    - Validate session not cleared (T095)
 *    - Apply debounce guard (T097)
 * 5. LOADING → Initial API request setup
 *    - Disable generate button
 *    - Show loading spinner
 * 6. STREAMING → Receiving SSE chunks
 *    - Display streaming indicator with ARIA live region (T100)
 *    - Append chunks progressively
 *    - Auto-scroll to bottom
 * 7. SUCCESS → Stream completed
 *    - Save to cache with profile fingerprint
 *    - Show regenerate button
 *    - Display cache indicator on reload
 * 8. ERROR → Stream failed
 *    - Preserve partial content (FR-015a)
 *    - Show error message with retry button
 *    - If session expired → redirect to login (T093)
 *    - If session cleared → show login button (T095)
 * 
 * State Transitions Summary:
 * - IDLE → CHECKING_AUTH (on mount)
 * - CHECKING_AUTH → LOGIN_REQUIRED | CHECKING_CACHE
 * - CHECKING_CACHE → ERROR | CACHE_HIT | READY
 * - READY → LOADING (on generate click)
 * - LOADING → STREAMING (first chunk received)
 * - STREAMING → SUCCESS | ERROR
 * - SUCCESS → READY (on regenerate click)
 * - ERROR → READY (on retry click)
 */
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import MDXContent from "@theme/MDXContent";
import { PersonalizationCacheEntry, UserProfile } from "../../types/contentTabs";
import * as authService from "../../services/authService";
import * as cacheService from "../../services/cacheService";
import { personalizationService } from "../../services/personalizationService";
import styles from "./styles.module.css";

interface PersonalizationTabProps {
  pageId: string;
  content: string;
}

// Helper function to convert markdown to HTML
function convertMarkdownToHTML(markdown: string): string {
  let html = markdown;
  
  // Convert headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Convert bold text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Convert code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
  
  // Convert inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Convert numbered lists
  html = html.replace(/^(\d+\. .+)$/gm, (match) => {
    const items = match.split(/\n(?=\d+\.\s)/);
    const listItems = items.map(item => {
      const content = item.replace(/^\d+\.\s/, '');
      return `<li>${content}</li>`;
    }).join('');
    return `<ol>${listItems}</ol>`;
  });
  
  // Convert bullet lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  
  // Convert paragraphs (double newlines)
  html = html.split('\n\n').map(para => {
    para = para.trim();
    if (!para) return '';
    // Skip if already wrapped in HTML tags
    if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol') || para.startsWith('<pre')) {
      return para;
    }
    return `<p>${para.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');
  
  return html;
}

// T058: Create PersonalizationTab component
export default function PersonalizationTab({
  pageId,
  content,
}: PersonalizationTabProps): React.ReactElement {
  const history = useHistory();
  const location = useLocation();
  
  // T059: Check authentication on mount
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [personalizedContent, setPersonalizedContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCached, setIsCached] = useState(false);
  const [streamingText, setStreamingText] = useState<string>("");
  const contentEndRef = useRef<HTMLDivElement>(null);
  const generatingRef = useRef(false);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const lastClickTimeRef = useRef<number>(0); // T097: Debouncing

  // T060: Check authentication and load profile
  useEffect(() => {
    const authenticated = authService.isAuthenticated();
    setIsAuthenticated(authenticated);

    if (authenticated) {
      const profile = authService.getProfile();
      setUserProfile(profile);

      if (profile) {
        checkCacheAndGenerate(profile);
      }
    }
  }, [pageId]);

  // T061: Auto-scroll during streaming
  useEffect(() => {
    if (isGenerating && contentContainerRef.current) {
      contentContainerRef.current.scrollTop =
        contentContainerRef.current.scrollHeight;
    }
  }, [streamingText, isGenerating]);

  // T062: Check cache then generate if needed
  const checkCacheAndGenerate = async (profile: UserProfile) => {
    // T090: Check session expiration before generation
    if (authService.isSessionExpired()) {
      // T091: Show non-intrusive notification
      setError("Session expired. Please login to generate new content.");
      // T092: Don't clear existing content - allow viewing cached/displayed content
      return;
    }

    const fingerprint = authService.generateProfileFingerprint(profile);
    const cacheKey = `personalized_${pageId}_${fingerprint}`;
    const cached = cacheService.get<PersonalizationCacheEntry>(cacheKey);

    if (cached && cached.personalizedContent) {
      console.log(`✅ Cache hit for ${pageId} (${fingerprint}) - displaying cached content`);
      setPersonalizedContent(cached.personalizedContent);
      setIsCached(true);
      return;
    }

    console.log(`❌ Cache miss for ${pageId} (${fingerprint}) - generating personalized content`);
    setIsCached(false);

    // Request deduplication
    if (generatingRef.current) {
      return;
    }

    // Generate new personalized content
    await generatePersonalizedContent(profile);
  };

  // T063: Generate personalized content with streaming
  const generatePersonalizedContent = async (profile: UserProfile) => {
    // T090-T093: Check session expiration and require re-login
    if (authService.isSessionExpired()) {
      setError("Session expired. Redirecting to login...");
      setTimeout(() => {
        const returnTo = encodeURIComponent(location.pathname);
        history.push(`/login?returnTo=${returnTo}`);
      }, 1500);
      return;
    }

    const token = authService.getToken();
    if (!token) {
      setError("Authentication required");
      return;
    }

    // T095: Handle edge case - sessionStorage cleared during generation
    const session = authService.getSession();
    if (!session || !session.profile) {
      setError("Session lost. Please login again.");
      setIsAuthenticated(false);
      return;
    }

    // Request deduplication
    if (generatingRef.current) {
      return;
    }

    generatingRef.current = true;
    setIsGenerating(true);
    setIsLoading(true);
    setError(null);
    setPersonalizedContent("");
    setStreamingText("");

    let accumulatedContent = "";
    let firstChunkReceived = false;

    try {
      // T064: Stream personalized content from API
      personalizationService.streamPersonalizedContent(
        pageId,
        content,
        token,
        profile.programmingExperience,
        profile.aiProficiency,
        (chunk) => {
          // Hide loading screen on first chunk
          if (!firstChunkReceived) {
            firstChunkReceived = true;
            setIsLoading(false);
          }

          accumulatedContent += chunk;
          setStreamingText(accumulatedContent);
        },
        () => {
          // T065: On completion, cache the result
          console.log(`✅ Personalization completed for ${pageId}`);
          setPersonalizedContent(accumulatedContent);
          setIsGenerating(false);
          setIsLoading(false);
          generatingRef.current = false;

          // Cache personalized content with profile fingerprint
          const fingerprint = authService.generateProfileFingerprint(profile);
          const cacheKey = `personalized_${pageId}_${fingerprint}`;
          const cacheEntry: PersonalizationCacheEntry = {
            personalizedContent: accumulatedContent,
            pageId,
            profileFingerprint: fingerprint,
            timestamp: Date.now(),
          };
          cacheService.set(cacheKey, cacheEntry);
          console.log(`💾 Cached personalized content for ${pageId} (${fingerprint})`);
        },
        (errorMsg) => {
          // T066: Error handling with partial content preservation
          console.error(`❌ Personalization error for ${pageId}:`, errorMsg);
          
          // Preserve partial content if any was received
          if (accumulatedContent) {
            setPersonalizedContent(accumulatedContent);
            setError(`Personalization interrupted: ${errorMsg}. Partial content displayed.`);
          } else {
            setError(errorMsg);
          }
          
          setIsGenerating(false);
          setIsLoading(false);
          generatingRef.current = false;
        }
      );
    } catch (err) {
      console.error('Personalization request failed:', err);
      setError('Failed to personalize content');
      setIsGenerating(false);
      setIsLoading(false);
      generatingRef.current = false;
    }
  };

  // T067: Handle regenerate button click
  const handleRegenerate = () => {
    // T097: Debounce to prevent accidental double-clicks (500ms)
    const now = Date.now();
    if (now - lastClickTimeRef.current < 500) {
      return; // Ignore click if within 500ms of last click
    }
    lastClickTimeRef.current = now;

    if (userProfile) {
      setIsCached(false);
      generatePersonalizedContent(userProfile);
    }
  };

  // T068: Handle login button click
  const handleLoginClick = () => {
    const returnTo = encodeURIComponent(location.pathname);
    history.push(`/login?returnTo=${returnTo}`);
  };

  // T069: Render login button if not authenticated
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <p>Sign in to view personalized content tailored to your experience level.</p>
        <button 
          className={styles.loginButton}
          onClick={handleLoginClick}
        >
          Login to See Personalized Content
        </button>
      </div>
    );
  }

  // T070: Main content rendering
  return (
    <div role="tabpanel" id="personalized-panel" aria-labelledby="personalized-tab">
      {/* Generate button - only show if no content */}
      {!personalizedContent && !isGenerating && !isLoading && (
        <div className={styles.generateContainer}>
          <button
            className={styles.generateButton}
            onClick={() => userProfile && generatePersonalizedContent(userProfile)}
            disabled={!userProfile}
            aria-label="Generate personalized content based on your proficiency level"
            aria-busy={isGenerating}
          >
            Generate Personalized Content
          </button>
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Personalizing content for your experience level...</p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className={styles.errorMessage}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Content display - rendered as markdown like Original tab */}
      {(isGenerating || personalizedContent) && (
        <>
          <div 
            ref={contentContainerRef}
            className="markdown"
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToHTML(isGenerating ? streamingText : personalizedContent)
            }}
          />
          <div ref={contentEndRef} />

          {/* Regenerate button - subtle and non-intrusive */}
          {!isGenerating && personalizedContent && (
            <div className={styles.regenerateContainer}>
              <button
                className={styles.regenerateButton}
                onClick={handleRegenerate}
                aria-label="Regenerate personalized content with fresh AI response"
              >
                🔄 Regenerate
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
