# Research: Interactive Content Tabs with AI Summarization

**Feature**: 022-content-tabs  
**Date**: 2025-11-15

## Overview

This document consolidates research findings for implementing interactive content tabs in Docusaurus with AI-powered summarization. Each decision is documented with rationale and alternatives considered.

## 1. Docusaurus Theme Customization (Swizzling)

**Decision**: Use Docusaurus swizzling to inject tab UI into content pages

**Rationale**:
- Docusaurus provides official mechanism for theme customization via "swizzling"
- Allows wrapping existing MDX content without modifying source markdown files
- `DocItem/Content` component is the standard injection point for content page enhancements
- Preserves upgrade path for future Docusaurus versions

**Alternatives Considered**:
- **MDX components**: Require manual addition to every content file - rejected due to maintenance burden
- **Custom plugin**: More complex than needed for UI enhancement - over-engineering
- **Direct theme modification**: Would fork entire theme - rejected as unmaintainable

**Implementation Approach**:
```bash
npm run swizzle @docusaurus/theme-classic DocItem/Content -- --wrap
```

Then modify `src/theme/DocItem/Content/index.tsx` to wrap original content with tabs.

**References**:
- https://docusaurus.io/docs/swizzling
- https://docusaurus.io/docs/markdown-features/react#mdx-component-scope

---

## 2. Session Storage for Caching

**Decision**: Use browser `sessionStorage` API for summary caching

**Rationale**:
- Clarification confirmed session-scoped cache (cleared when browser closes)
- `sessionStorage` is shared across all tabs in same origin/session (matches requirement for multi-tab summary sharing)
- No backend infrastructure needed initially
- Simple migration path to database (change storage service implementation)
- 5-10MB typical limit sufficient for text summaries

**Alternatives Considered**:
- **localStorage**: Persists across sessions - violates session-scoped requirement
- **IndexedDB**: Over-engineered for simple key-value text storage
- **In-memory state**: Not shared across browser tabs - violates clarification answer
- **Cookies**: 4KB limit too small for summaries

**Implementation Pattern**:
```typescript
// cacheService.ts
const CACHE_PREFIX = 'summary_';

export const cacheSummary = (pageId: string, summary: string) => {
  sessionStorage.setItem(`${CACHE_PREFIX}${pageId}`, summary);
};

export const getCachedSummary = (pageId: string): string | null => {
  return sessionStorage.getItem(`${CACHE_PREFIX}${pageId}`);
};
```

**Migration Path**: When moving to database, only `cacheService.ts` changes - components unchanged.

---

## 3. Streaming Response Handling

**Decision**: Use Server-Sent Events (SSE) with `EventSource` API

**Rationale**:
- SSE is standard for server-to-client streaming (HTTP/1.1+ supported)
- Native browser `EventSource` API with auto-reconnect
- Simpler than WebSockets for unidirectional streaming
- FastAPI has built-in `StreamingResponse` support
- Clarification specified "append with auto-scroll" pattern

**Alternatives Considered**:
- **WebSockets**: Bi-directional, more complex setup - unnecessary for unidirectional stream
- **Long polling**: Poor UX, high latency between chunks - rejected
- **Fetch with ReadableStream**: Requires manual reconnect logic - more complex than SSE

**Implementation Pattern**:

Frontend:
```typescript
const eventSource = new EventSource(`${API_URL}/summarize?pageId=${id}`);

eventSource.onmessage = (event) => {
  setSummaryChunks(prev => [...prev, event.data]);
  // Auto-scroll to bottom
  contentRef.current?.scrollTo(0, contentRef.current.scrollHeight);
};

eventSource.onerror = () => {
  eventSource.close();
  showError("Unable to generate summary. Please try again later.");
};
```

Backend:
```python
from fastapi.responses import StreamingResponse

async def summarize_stream(content: str):
    for chunk in openai_agent.stream_summary(content):
        yield f"data: {chunk}\n\n"
        
@app.get("/summarize")
async def summarize(pageId: str):
    content = get_page_content(pageId)
    return StreamingResponse(
        summarize_stream(content),
        media_type="text/event-stream"
    )
```

---

## 4. Authentication Strategy

**Decision**: JWT token in sessionStorage with dummy validation endpoint

**Rationale**:
- Clarification specified "dummy/stub login for now, future SSO"
- Session storage aligns with session-scoped cache strategy
- JWT pattern prepares for future SSO integration (Auth0, Okta, Google)
- Simple boolean check sufficient for dummy implementation

**Alternatives Considered**:
- **HTTP-only cookies**: More secure but complicates SSO migration
- **OAuth2 now**: Over-engineered for dummy implementation
- **No auth**: Violates spec requirement for authentication check

**Implementation Pattern**:

Frontend:
```typescript
// authService.ts
export const isAuthenticated = (): boolean => {
  return sessionStorage.getItem('authToken') !== null;
};

export const dummyLogin = async (): Promise<void> => {
  // Dummy implementation - always succeeds
  sessionStorage.setItem('authToken', 'dummy_token_12345');
};

export const logout = (): void => {
  sessionStorage.removeItem('authToken');
};
```

Backend (dummy endpoint):
```python
@app.post("/auth/dummy-login")
async def dummy_login():
    return {"token": "dummy_token_12345", "expires": "session"}

@app.get("/auth/verify")
async def verify_token(authorization: str = Header(None)):
    # Dummy: accept any token
    return {"valid": True}
```

**Migration Path**: Replace dummy implementation with SSO provider SDK (e.g., `@auth0/auth0-react`), update token validation in backend.

---

## 5. OpenAI Agents SDK Integration

**Decision**: Use OpenAI Agents SDK with streaming completion

**Rationale**:
- Spec explicitly mentions "OpenAI Agents SDK"
- SDK provides structured agent framework with tool calling
- Native streaming support via `stream=True` parameter
- Clarification specifies 20-25% compression ratio - requires prompt engineering

**Alternatives Considered**:
- **Direct OpenAI API**: Less structured than Agents SDK
- **LangChain**: Additional abstraction layer - unnecessary complexity
- **Local LLM**: Would require significant infrastructure - out of scope

**Implementation Pattern**:

```python
# openai_agent.py
from openai import AsyncOpenAI

client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

SUMMARY_PROMPT = """
Summarize the following content. Target length: 20-25% of original.
Minimum 150 words, maximum 500 words.
Maintain key concepts and preserve technical accuracy.

Content:
{content}

Summary:
"""

async def stream_summary(content: str):
    word_count = len(content.split())
    target_words = max(150, min(500, int(word_count * 0.225)))
    
    prompt = SUMMARY_PROMPT.format(content=content)
    
    stream = await client.chat.completions.create(
        model="gpt-4-turbo-preview",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
        max_tokens=target_words * 2  # Rough estimate: 1.5 tokens per word
    )
    
    async for chunk in stream:
        if chunk.choices[0].delta.content:
            yield chunk.choices[0].delta.content
```

**Configuration**:
- Model: `gpt-4-turbo-preview` (balance of quality and speed)
- Temperature: 0.7 (consistent summaries with some variety)
- Fallback: `gpt-3.5-turbo` if rate limits hit

---

## 6. React Component Architecture

**Decision**: Compound component pattern with controlled tabs

**Rationale**:
- Separates concerns (TabBar, individual tabs, content)
- Reusable across different content types
- Aligns with React best practices
- Easy to test individual components
- Clarification specified independent tab state per browser tab

**Implementation Pattern**:

```typescript
// ContentTabs/index.tsx
interface ContentTabsProps {
  children: React.ReactNode;  // Original MDX content
  pageId: string;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({ children, pageId }) => {
  const [activeTab, setActiveTab] = useState<'original' | 'summary' | 'personalized'>('original');
  
  return (
    <div className={styles.contentTabs}>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={styles.tabContent}>
        {activeTab === 'original' && <OriginalTab>{children}</OriginalTab>}
        {activeTab === 'summary' && <SummaryTab pageId={pageId} />}
        {activeTab === 'personalized' && <PersonalizedTab />}
      </div>
    </div>
  );
};
```

**Component Responsibilities**:
- `TabBar`: UI for tab selection, active state styling
- `OriginalTab`: Simple wrapper for MDX content
- `SummaryTab`: Handles auth check, API call, streaming, caching, error states
- `PersonalizedTab`: Placeholder "Feature coming soon" message

---

## 7. Error Handling & Loading States

**Decision**: Declarative state management with clear user feedback

**Rationale**:
- Spec defines specific error messages and timing constraints
- Success criteria: error display within 2 seconds
- User must be able to retry or switch tabs on error

**Implementation Pattern**:

```typescript
type SummaryState = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'streaming'; chunks: string[] }
  | { status: 'success'; summary: string }
  | { status: 'error'; message: string };

const SummaryTab: React.FC<{pageId: string}> = ({pageId}) => {
  const [state, setState] = useState<SummaryState>({ status: 'idle' });
  
  useEffect(() => {
    const cached = getCachedSummary(pageId);
    if (cached) {
      setState({ status: 'success', summary: cached });
      return;
    }
    
    if (!isAuthenticated()) {
      window.location.href = '/login';  // Dummy redirect
      return;
    }
    
    setState({ status: 'loading' });
    // ... fetch summary with streaming
  }, [pageId]);
  
  if (state.status === 'loading') {
    return <LoadingSpinner text="Generating summary..." />;
  }
  
  if (state.status === 'error') {
    return (
      <ErrorMessage 
        message={state.message}
        onRetry={() => /* refetch */}
      />
    );
  }
  
  // ... render streaming or completed summary
};
```

---

## 8. Mobile Responsiveness

**Decision**: CSS modules with mobile-first breakpoints

**Rationale**:
- Success criteria: "seamless integration without breaking responsive design on mobile"
- Docusaurus uses CSS modules by default
- Tab UI must work on small screens (scrollable tabs if needed)

**Implementation**:

```css
/* styles.module.css */
.contentTabs {
  width: 100%;
  margin: 1rem 0;
}

.tabBar {
  display: flex;
  border-bottom: 2px solid var(--ifm-color-emphasis-300);
  overflow-x: auto; /* Allow horizontal scroll on mobile */
}

.tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  background: none;
  transition: all 0.2s;
}

.tab:hover {
  background-color: var(--ifm-color-emphasis-100);
}

.tabActive {
  border-bottom: 3px solid var(--ifm-color-primary);
  color: var(--ifm-color-primary);
  font-weight: 600;
}

/* Mobile: stack tabs vertically if too narrow */
@media (max-width: 480px) {
  .tabBar {
    flex-direction: column;
  }
  
  .tab {
    width: 100%;
    text-align: left;
  }
}
```

---

## Summary of Key Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| **Theme Integration** | Docusaurus swizzling (DocItem/Content) | Official customization path, preserves upgrades |
| **Caching** | sessionStorage | Session-scoped, shared across tabs, simple migration to DB |
| **Streaming** | Server-Sent Events (SSE) | Standard for unidirectional streaming, native browser support |
| **Authentication** | JWT in sessionStorage (dummy) | Prepares for SSO, simple implementation |
| **AI Integration** | OpenAI Agents SDK with streaming | Spec requirement, native streaming support |
| **Component Pattern** | Compound components, controlled | Separation of concerns, testable, React best practice |
| **Error Handling** | Declarative state with feedback | Clear user messages, retry capability |
| **Responsive Design** | CSS modules, mobile-first | Docusaurus convention, works on all screen sizes |

## Next Steps

- **Phase 1**: Create data-model.md, API contracts, quickstart.md
- **Implementation**: Follow tasks.md generated from `/sp.tasks` command
- **Testing**: Unit tests for services, integration tests for streaming, E2E for user flows
