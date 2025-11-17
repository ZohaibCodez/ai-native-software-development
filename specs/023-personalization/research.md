# Research: Personalized Content Generation

**Feature**: 023-personalization | **Date**: 2025-11-17
**Purpose**: Document technical decisions and research findings for personalization implementation

## Overview

This document captures research decisions for implementing personalized content generation that tailors educational content based on user programming experience and AI proficiency levels. System mirrors existing summarization architecture while extending authentication to capture user profiles and generating profile-specific content.

---

## Decision 1: Profile Fingerprint Format

**Context**: FR-017a requires constructing cache keys from programming experience + AI proficiency (e.g., "Novice-Beginner"). Need deterministic, readable format for 16 possible combinations.

**Decision**: Hyphen-separated concatenation: `"{ProgrammingLevel}-{AILevel}"`

**Rationale**:
- Simple and human-readable for debugging
- Deterministic (same inputs → same key every time)
- No collision risk with 4x4 combinations
- Easy to parse if needed for analytics later
- Matches clarification decision from spec

**Alternatives Considered**:
1. **Hashed fingerprint (MD5/SHA)**: Rejected - adds unnecessary complexity, loses readability, no collision benefit at this scale
2. **Numeric encoding (1-4 for each level)**: Rejected - requires lookup table, not self-documenting
3. **Nested structure ("programming:X,ai:Y")**: Rejected - verbose, harder to use as cache key

**Implementation**:
```typescript
// TypeScript (authService.ts)
function generateProfileFingerprint(programmingLevel: string, aiLevel: string): string {
  return `${programmingLevel}-${aiLevel}`;  // e.g., "Novice-Beginner"
}
```

---

## Decision 2: Separate OpenAI Agent for Personalization

**Context**: FR-009 requires personalized content generation via streaming similar to summarization. Existing `openai_agent.py` uses OpenAI Agents SDK with streaming completion. User requirement specifies creating a separate agent instance for personalization (not reusing summary agent).

**Decision**: Create dedicated personalization Agent instance in `openai_agent.py` with separate `generate_personalized_content()` function using distinct Agent configuration + Runner.run_streamed() pattern

**Rationale**:
- **Separate concerns**: Summary and personalization have different instruction sets and behaviors
- **Independent optimization**: Can tune each agent separately without affecting the other
- **Clear isolation**: Agent names, instructions, and session IDs are distinct
- **Proven pattern**: Reuses existing OpenAI Agents SDK infrastructure
- **Consistent streaming**: Same SSE architecture as summarization
- **No new dependencies**: Uses existing OpenAI client configuration

**Alternatives Considered**:
1. **Reuse summary agent with conditional instructions**: Rejected - violates separation of concerns, user explicitly requested separate agent
2. **Separate agent service file**: Rejected - creates code duplication, both agents share OpenAI client config
3. **Direct OpenAI API calls**: Rejected - loses abstraction benefits, no streaming support in basic API
4. **Third-party personalization library**: Rejected - adds dependency, our requirements are simple

**Implementation Pattern** (separate agent instance):
```python
# openai_agent.py

# Existing summary agent function (unchanged)
async def generate_summary(content: str, page_id: str) -> AsyncGenerator[str, None]:
    """Generate AI-powered summary using dedicated summary agent"""
    # ... existing implementation ...
    agent = Agent(
        name="Content Summarizer",
        instructions=instructions,
        model=model,
    )
    # ... rest of summary logic ...

# NEW: Separate personalization agent function
async def generate_personalized_content(
    content: str, 
    page_id: str,
    programming_level: str,
    ai_proficiency: str
) -> AsyncGenerator[str, None]:
    """
    Generate personalized content based on user profile using dedicated personalization agent.
    
    This is a SEPARATE agent instance from the summarizer, with distinct instructions
    and behavior tailored to proficiency-based content adaptation.
    
    Args:
        content: Full page content text to personalize
        page_id: Unique identifier for the content page
        programming_level: User's programming proficiency (Novice/Beginner/Intermediate/Expert)
        ai_proficiency: User's AI proficiency (Novice/Beginner/Intermediate/Expert)
    
    Yields:
        str: Chunks of personalized content as they are generated
    """
    logger.info(f"Starting personalized content generation for page_id: {page_id}")
    logger.info(f"User profile: Programming={programming_level}, AI={ai_proficiency}")
    
    instructions = build_personalization_instructions(programming_level, ai_proficiency)
    
    try:
        # Create SEPARATE Agent instance for personalization
        agent = Agent(
            name="Content Personalizer",  # Different name from "Content Summarizer"
            instructions=instructions,     # Profile-specific instructions
            model=model,                   # Same model but different agent
        )
        
        # Create session with profile fingerprint
        session_id = f"{page_id}_{programming_level}_{ai_proficiency}"
        session = SQLiteSession(session_id=session_id)
        
        # Run personalization agent with streaming
        result = Runner.run_streamed(
            starting_agent=agent,
            input=f"Personalize this content for the learner:\n\n{content}",
            session=session,
        )
        
        # Stream response chunks - same event handling as summary
        async for event in result.stream_events():
            logger.debug(f"Event type: {event.type}")
            
            if event.type == "raw_response_event":
                delta_text = None
                
                if hasattr(event, 'data'):
                    if hasattr(event.data, 'delta') and event.data.delta:
                        delta_text = event.data.delta
                    elif hasattr(event.data, 'content') and event.data.content:
                        delta_text = event.data.content
                
                if not delta_text and hasattr(event, 'delta') and event.delta:
                    delta_text = event.delta
                
                if not delta_text and hasattr(event, 'content') and event.content:
                    delta_text = event.content
                
                if delta_text:
                    logger.debug(f"Yielding delta: {delta_text[:50]}...")
                    yield delta_text
        
        logger.info(f"Personalized content generation completed for page_id: {page_id}")
        
    except Exception as e:
        logger.error(f"Error generating personalized content for page_id {page_id}: {str(e)}")
        raise


def build_personalization_instructions(programming_level: str, ai_level: str) -> str:
    """Build proficiency-specific instructions for the personalization agent"""
    # ... instruction building logic from Decision 5 ...
```

**Key Distinction**: Two separate Agent instances in the same file:
- `Agent(name="Content Summarizer", ...)` for summaries
- `Agent(name="Content Personalizer", ...)` for personalization

Both use the same OpenAI client and model configuration but have distinct behaviors, instructions, and session management.

---

## Decision 3: Enhanced Authentication Schema

**Context**: FR-002 requires collecting name, email, programming experience, and AI proficiency during login. Current dummy auth only handles simple token.

**Decision**: Create new `/api/v1/auth/dummy-login-with-profile` endpoint accepting UserProfileRequest Pydantic model

**Rationale**:
- Keeps existing `/dummy-login` unchanged (backward compatibility)
- Explicit schema validation via Pydantic
- Clear migration path to SSO (Clerk will provide these fields)
- Type safety in backend

**Alternatives Considered**:
1. **Modify existing /dummy-login**: Rejected - breaks existing Summary tab if not coordinated
2. **Store profile separately from token**: Rejected - requires two API calls, complicates session management
3. **Use query parameters**: Rejected - unsuitable for POST data, no validation

**Schema**:
```python
# schemas.py
from pydantic import BaseModel, Field
from enum import Enum

class ProficiencyLevel(str, Enum):
    NOVICE = "Novice"
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    EXPERT = "Expert"

class UserProfileRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$")
    programming_experience: ProficiencyLevel
    ai_proficiency: ProficiencyLevel

class AuthWithProfileResponse(BaseModel):
    token: str
    expires: str
    user: dict  # Contains name, email, programming_experience, ai_proficiency
```

---

## Decision 4: Session Storage Schema for User Profile

**Context**: FR-006 requires storing authentication token + user preferences in session storage. Current implementation only stores token string.

**Decision**: Extend authService to store composite object: `{ token: string, profile: UserProfile }`

**Rationale**:
- Single atomic write to sessionStorage
- Profile always available when token is valid
- Simplifies profile retrieval (no separate cache lookup)
- Matches token lifecycle (session-scoped)

**Alternatives Considered**:
1. **Separate sessionStorage keys** (`auth_token`, `user_profile`): Rejected - can get out of sync
2. **Embed profile in token (JWT)**: Rejected - dummy auth doesn't use real JWTs yet
3. **Store in cache service**: Rejected - profile is auth-related, not content cache

**Implementation**:
```typescript
// authService.ts types
interface UserProfile {
  name: string;
  email: string;
  programmingExperience: 'Novice' | 'Beginner' | 'Intermediate' | 'Expert';
  aiProficiency: 'Novice' | 'Beginner' | 'Intermediate' | 'Expert';
}

interface AuthSession {
  token: string;
  profile: UserProfile;
  expiresAt?: number;
}

// Storage
export function setAuthSession(token: string, profile: UserProfile): void {
  const session: AuthSession = { token, profile };
  cacheService.set('authSession', session);
}

export function getAuthSession(): AuthSession | null {
  return cacheService.get<AuthSession>('authSession');
}
```

---

## Decision 5: Proficiency-Based Content Adaptation Strategy

**Context**: FR-011 and FR-012 require adjusting content complexity based on programming experience and AI proficiency levels. Need clear mapping from levels to generation instructions.

**Decision**: Define level-specific instruction templates in OpenAI Agent prompts with explicit guidance for each proficiency dimension

**Rationale**:
- LLMs excel at instruction-following when explicitly guided
- Allows fine-tuning per level without code changes
- Testable (same profile → same instruction template)
- Documented in code for maintainability

**Level-Specific Guidelines**:

| Programming Level | Content Adaptation |
|-------------------|-------------------|
| **Novice** | Explain basic programming concepts, avoid jargon, include analogies, define terms inline |
| **Beginner** | Assume basic syntax knowledge, explain intermediate concepts, light jargon with context |
| **Intermediate** | Skip fundamentals, focus on patterns and best practices, use standard terminology |
| **Expert** | Advanced insights, edge cases, performance considerations, assume deep knowledge |

| AI Proficiency | AI-Related Content Adaptation |
|----------------|-------------------------------|
| **Novice** | Explain what AI/LLMs are, basic capabilities, high-level concepts |
| **Beginner** | Assume awareness of AI basics, explain practical applications, prompt engineering basics |
| **Intermediate** | Discuss architectures, fine-tuning concepts, agent patterns, RAG |
| **Expert** | Deep technical details, model internals, optimization techniques, research insights |

**Alternatives Considered**:
1. **Hardcoded content variants**: Rejected - unmaintainable with 16 combinations
2. **Post-processing filters**: Rejected - doesn't leverage LLM capabilities fully
3. **Separate models per level**: Rejected - cost prohibitive, complex deployment

**Implementation**:
```python
def build_personalization_instructions(programming_level: str, ai_level: str) -> str:
    programming_guidance = {
        "Novice": "Explain basic programming concepts step-by-step. Define all technical terms. Use analogies from everyday life. Avoid assuming prior coding knowledge.",
        "Beginner": "Assume familiarity with basic syntax and variables. Explain intermediate concepts like functions, loops, and objects. Use common programming terminology with brief context.",
        "Intermediate": "Focus on design patterns, best practices, and code organization. Skip basic syntax explanations. Discuss trade-offs and alternative approaches.",
        "Expert": "Provide advanced insights, edge cases, and performance implications. Assume deep programming knowledge. Discuss architecture and scalability considerations."
    }
    
    ai_guidance = {
        "Novice": "Explain AI concepts from first principles. Define what LLMs are. Use simple analogies. Focus on high-level understanding.",
        "Beginner": "Assume basic AI awareness. Focus on practical applications and prompt engineering. Explain how to use AI tools effectively.",
        "Intermediate": "Discuss agent architectures, RAG patterns, and fine-tuning concepts. Explain when to use different AI approaches.",
        "Expert": "Cover model internals, optimization techniques, and research frontiers. Discuss advanced agent patterns and production considerations."
    }
    
    return f"""You are an expert technical educator creating personalized content.
    
PROGRAMMING LEVEL: {programming_level}
{programming_guidance[programming_level]}

AI PROFICIENCY: {ai_level}
{ai_guidance[ai_level]}

Adapt the following content accordingly, maintaining technical accuracy while matching the reader's level."""
```

---

## Decision 6: Error Handling for Streaming Failures

**Context**: FR-015a/b/c require preserving partial content, showing error message, and providing retry button when streaming fails mid-generation.

**Decision**: Implement error boundaries in PersonalizationTab component with state management for partial content + error state

**Rationale**:
- User doesn't lose progress if generation fails halfway
- Clear feedback about what went wrong
- Immediate recovery path (retry button)
- Matches clarification decision C from spec

**Alternatives Considered**:
1. **Clear all content on error**: Rejected - user loses valuable partial information
2. **Auto-retry silently**: Rejected - can create infinite loops, user has no control
3. **No retry button**: Rejected - forces page refresh or navigation away

**Implementation Pattern**:
```typescript
// PersonalizationTab.tsx state
const [personalizedContent, setPersonalizedContent] = useState<string>('');
const [streamingChunks, setStreamingChunks] = useState<string>('');
const [error, setError] = useState<string | null>(null);
const [isGenerating, setIsGenerating] = useState(false);

// Streaming with error handling
await personalizationService.fetchPersonalized(
  pageId, content, token, profile,
  (chunk) => {
    // Accumulate chunks
    setStreamingChunks(prev => prev + chunk);
  },
  () => {
    // Success: commit to final state
    setPersonalizedContent(streamingChunks);
    setStreamingChunks('');
    setError(null);
  },
  (errorMsg) => {
    // Failure: preserve partial content + show error
    setPersonalizedContent(streamingChunks);  // Keep partial
    setStreamingChunks('');
    setError(errorMsg);  // Show error with retry button
  }
);
```

---

## Decision 7: Cache Key Structure

**Context**: FR-017a defines profile fingerprint format. Need complete cache key structure including page ID.

**Decision**: Cache key format: `personalized_{pageId}_{profileFingerprint}`

**Rationale**:
- Namespaced prefix prevents collision with summary cache
- Page ID first for easy grouping/filtering
- Profile fingerprint last for readability
- Consistent with existing `summary_{pageId}` pattern

**Examples**:
- `personalized_intro-to-ai_Novice-Novice`
- `personalized_advanced-agents_Expert-Expert`
- `personalized_chapter-5_Intermediate-Beginner`

**Alternatives Considered**:
1. **Flat key without prefix**: Rejected - collision risk with other cache types
2. **Profile first**: Rejected - harder to find all cache for a page
3. **JSON object as key**: Rejected - SessionStorage uses string keys

**Implementation**:
```typescript
function generateCacheKey(pageId: string, profile: UserProfile): string {
  const fingerprint = `${profile.programmingExperience}-${profile.aiProficiency}`;
  return `personalized_${pageId}_${fingerprint}`;
}
```

---

## Decision 8: Button State Management During Generation

**Context**: FR-021a/b require disabling generate button and showing "Generating..." state to prevent duplicate requests.

**Decision**: Use React state for button disabled prop + loading text, guard with ref flag for request deduplication

**Rationale**:
- Visual feedback (disabled button) prevents accidental clicks
- Loading text communicates system status
- Ref flag prevents race conditions if state updates slowly
- Same pattern as existing SummaryTab

**Alternatives Considered**:
1. **Silently ignore clicks**: Rejected - no user feedback
2. **Queue requests**: Rejected - unnecessary complexity for session-scoped feature
3. **Cancel previous request**: Rejected - wastes API costs

**Implementation Pattern** (mirroring SummaryTab):
```typescript
const generatingRef = useRef(false);
const [isGenerating, setIsGenerating] = useState(false);

const handleGenerate = async () => {
  if (generatingRef.current) return;  // Guard
  
  generatingRef.current = true;
  setIsGenerating(true);
  
  try {
    await generatePersonalizedContent();
  } finally {
    generatingRef.current = false;
    setIsGenerating(false);
  }
};

return (
  <button 
    onClick={handleGenerate}
    disabled={isGenerating}
  >
    {isGenerating ? 'Generating...' : 'Generate Personalized Content'}
  </button>
);
```

---

## Summary of Technical Decisions

| Decision | Technology/Pattern | Rationale |
|----------|-------------------|-----------|
| Profile Fingerprint | Hyphen-separated string | Simple, readable, deterministic |
| Content Generation | OpenAI Agents SDK (existing) | Proven, streaming-capable, no new deps |
| Auth Enhancement | New `/dummy-login-with-profile` endpoint | Backward compatible, validates via Pydantic |
| Profile Storage | Composite object in sessionStorage | Atomic, prevents desync |
| Content Adaptation | Instruction templates per level | LLM-friendly, maintainable, testable |
| Error Handling | Partial content + error state + retry | User-friendly, preserves progress |
| Cache Keys | `personalized_{pageId}_{fingerprint}` | Namespaced, consistent with patterns |
| Button State | React state + ref guard | Visual feedback, prevents duplicates |

All decisions align with existing architecture patterns (SummaryTab, authService, openai_agent.py) to minimize deviation and maintain consistency.
