/**
 * SummaryTab Component - displays AI-generated summary with streaming support
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { SummaryCacheEntry } from "../../types/contentTabs";
import * as authService from "../../services/authService";
import * as cacheService from "../../services/cacheService";
import * as summaryService from "../../services/summaryService";
import styles from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface SummaryTabProps {
  pageId: string;
  content: string;
}

export default function SummaryTab({
  pageId,
  content,
}: SummaryTabProps): React.ReactElement {
  const history = useHistory();
  const location = useLocation();
  
  // T031: Check authentication on mount
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCached, setIsCached] = useState(false);
  const [streamingText, setStreamingText] = useState<string>("");
  const summaryEndRef = useRef<HTMLDivElement>(null);
  const generatingRef = useRef(false);
  const summaryContainerRef = useRef<HTMLDivElement>(null);
  const lastUpdateRef = useRef<number>(0);
  const pendingTextRef = useRef<string>("");
  const throttleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check authentication on mount and listen for changes
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        checkCacheAndGenerate();
      } else {
        // Clear content when logged out
        setSummary("");
        setStreamingText("");
      }
    };

    checkAuth();

    // Listen for auth state changes
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('authStateChanged', handleAuthChange);

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange);
    };
  }, [pageId]);

  // Throttled text update for smoother rendering (60fps)
  const throttledSetStreamingText = useCallback((text: string) => {
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdateRef.current;
    
    // Update at most every 50ms for smoother, more readable streaming
    if (timeSinceLastUpdate >= 50) {
      lastUpdateRef.current = now;
      setStreamingText(text);
      pendingTextRef.current = "";
    } else {
      // Store pending update
      pendingTextRef.current = text;
      
      // Schedule update
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
      
      throttleTimerRef.current = setTimeout(() => {
        lastUpdateRef.current = Date.now();
        setStreamingText(pendingTextRef.current);
        pendingTextRef.current = "";
      }, 50 - timeSinceLastUpdate);
    }
  }, []);

  // Auto-scroll to latest content during streaming with smooth behavior
  useEffect(() => {
    if (isGenerating && summaryContainerRef.current) {
      summaryContainerRef.current.scrollTo({
        top: summaryContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [streamingText, isGenerating]);

  // Cleanup throttle timer on unmount
  useEffect(() => {
    return () => {
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
    };
  }, []);

  const checkCacheAndGenerate = useCallback(async () => {
    // Check cache first
    const cacheKey = `summary_${pageId}`;
    const cached = cacheService.get<SummaryCacheEntry>(cacheKey);

    if (cached && cached.summary) {
      console.log(`✅ Cache hit for ${pageId} - displaying cached summary`);
      setSummary(cached.summary);
      setIsCached(true);
      return;
    }

    console.log(`❌ Cache miss for ${pageId} - generating new summary`);
    setIsCached(false);

    // Request deduplication: prevent multiple simultaneous requests
    if (generatingRef.current) {
      return;
    }

    // Generate new summary
    await generateSummary();
  }, [pageId]);

  const generateSummary = useCallback(async () => {
    const token = authService.getToken();
    if (!token) {
      setError("Authentication required");
      return;
    }

    // Request deduplication
    if (generatingRef.current) {
      return;
    }

    generatingRef.current = true;
    setIsGenerating(true);
    setIsLoading(true); // Show loading screen initially
    setError(null);
    setSummary("");
    setStreamingText("");

    // Accumulator for final summary to cache
    let accumulatedSummary = "";
    let firstChunkReceived = false;

    try {
      await summaryService.fetchSummary(
        pageId,
        content,
        token,
        (chunk) => {
          // Hide loading screen and show streaming as soon as first chunk arrives
          if (!firstChunkReceived) {
            firstChunkReceived = true;
            setIsLoading(false);
          }

          // Progressive text append and normalize whitespace
          accumulatedSummary += chunk;
          const normalized = accumulatedSummary
            .replace(/\n{2,}/g, '\n\n')      // Collapse any multiple newlines to exactly 2
            .replace(/^\s+/g, '')             // Remove leading whitespace
            .replace(/\s+$/g, '')             // Remove trailing whitespace
            .trim();
          
          // Use throttled update for smoother rendering
          throttledSetStreamingText(normalized);
        },
        () => {
          // On completion - normalize and cache the final summary
          const finalSummary = accumulatedSummary
            .replace(/\n{2,}/g, '\n\n')
            .trim();
          
          setIsLoading(false);
          setIsGenerating(false);
          setSummary(finalSummary);
          setStreamingText("");
          generatingRef.current = false;

          // Cache the completed summary
          const cacheKey = `summary_${pageId}`;
          const cacheEntry: SummaryCacheEntry = {
            pageId,
            summary: finalSummary,
            timestamp: Date.now(),
          };
          cacheService.set(cacheKey, cacheEntry);
        },
        (errorMessage) => {
          // On error
          setError(errorMessage);
          setIsLoading(false);
          setIsGenerating(false);
          setStreamingText("");
          generatingRef.current = false;
        }
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate summary"
      );
      setIsLoading(false);
      setIsGenerating(false);
      setStreamingText("");
      generatingRef.current = false;
    }
  }, [pageId, content]); // Dependencies for useCallback

  const handleLogin = () => {
    setIsAuthenticated(true);
    checkCacheAndGenerate();
  };

  const handleRetry = () => {
    setError(null);
    generateSummary();
  };

  // T032: Show login button if not authenticated
  if (!isAuthenticated) {
    return (
      <div className={styles.loginButton}>
        <h3>Authentication Required</h3>
        <p>You need to be authenticated to view AI-generated summaries.</p>
        <button
          onClick={() => {
            // T035: Add navigation state with return URL
            const returnTo = `${location.pathname}${location.hash || '#summary'}`;
            history.push(`/login?returnTo=${encodeURIComponent(returnTo)}`);
          }}
          type="button"
        >
          Login to See Summary
        </button>
        <p style={{ fontSize: '0.85em', color: 'var(--ifm-color-emphasis-600)', marginTop: '1rem' }}>
          Note: This is a temporary dummy authentication for demonstration purposes.
        </p>
      </div>
    );
  }

  // Show error with retry button
  if (error) {
    return (
      <div className={styles.error} role="alert">
        <div className={styles.errorTitle}>Error</div>
        <div className={styles.errorMessage}>{error}</div>
        <button
          className={styles.retryButton}
          onClick={handleRetry}
          type="button"
        >
          Retry
        </button>
      </div>
    );
  }

  // Show loading spinner
  if (isLoading && !summary) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.loadingSpinner} />
          <div className={styles.loadingText}>
            <div className={styles.loadingTitle}>Generating AI Summary</div>
            <div className={styles.loadingSubtitle}>
              This may take a few moments...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show summary content - clean format with smooth streaming UX
  return (
    <div
      role="tabpanel"
      id="summary-panel"
      aria-labelledby="summary-tab"
      className={styles.summaryPanel}
    >
      {(summary || streamingText) && (
        <>
          {/* Content with smooth reveal animation */}
          <div 
            className={`${styles.summaryContent} ${isGenerating ? styles.streaming : styles.complete}`}
            ref={summaryContainerRef}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {isGenerating ? streamingText : summary}
            </ReactMarkdown>
            
            {/* Animated typing cursor during streaming */}
            {isGenerating && (
              <span className={styles.typingCursor} aria-hidden="true">
                <span className={styles.cursorBlink}>▊</span>
              </span>
            )}
          </div>
          <div ref={summaryEndRef} />
        </>
      )}
    </div>
  );
}
