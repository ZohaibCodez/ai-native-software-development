# Data Model: Interactive Content Tabs with AI Summarization

**Feature**: 022-content-tabs  
**Date**: 2025-11-15

## Overview

This document defines the data structures, relationships, and validation rules for the content tabs feature. The model is lightweight, focusing on client-side state and API contracts with minimal backend persistence (session-based).

---

## Entities

### 1. Tab State

Represents the current active tab for a content page (UI state, not persisted).

**Attributes**:
- `activeTab`: `'original' | 'summary' | 'personalized'` - Currently selected tab
- `pageId`: `string` - Unique identifier for the content page (derived from URL path)

**Lifecycle**:
- Created: When user navigates to a content page
- Updated: When user clicks a different tab
- Destroyed: When user navigates away from page

**Validation Rules**:
- `activeTab` must be one of three valid tab names
- Default value: `'original'`

**State Transitions**:
```
idle → original (default on page load)
original ↔ summary ↔ personalized (user clicks tabs)
```

**Storage**: React component state (not persisted)

---

### 2. Summary Cache Entry

Represents a cached AI-generated summary for a content page.

**Attributes**:
- `pageId`: `string` - Unique identifier for the content page (cache key)
- `summary`: `string` - Complete AI-generated summary text
- `timestamp`: `number` - Unix timestamp when summary was generated
- `version`: `string` - Content version hash (future: detect stale cache)

**Relationships**:
- One Summary Cache Entry per unique `pageId`
- Shared across all browser tabs in the same session

**Validation Rules**:
- `pageId` required, non-empty string
- `summary` required, 150-500 words (validated post-generation)
- `timestamp` required, valid Unix timestamp

**Lifecycle**:
- Created: After successful summary generation
- Read: When user opens Summary tab (before API call)
- Updated: Never (summaries are immutable once generated)
- Destroyed: When browser session ends

**Storage**: Browser `sessionStorage`

**Cache Key Format**: `summary_{pageId}` where `pageId` is URL path slug

**Example**:
```json
{
  "pageId": "01-introducing-ai-driven-development/01-ai-development-revolution/06-autonomous-agent-era",
  "summary": "This chapter explores the autonomous agent era in AI development...",
  "timestamp": 1700000000000,
  "version": "abc123"
}
```

---

### 3. Authentication State

Represents whether a user is authenticated (dummy implementation, future SSO).

**Attributes**:
- `isAuthenticated`: `boolean` - Whether user has valid session
- `token`: `string | null` - Auth token (dummy value or SSO token)
- `expiresAt`: `number | null` - Token expiration timestamp (future SSO)

**Validation Rules**:
- `token` required if `isAuthenticated` is `true`
- For dummy implementation: any non-null `token` means authenticated

**Lifecycle**:
- Created: On successful login (dummy or SSO)
- Read: Before allowing access to Summary tab
- Destroyed: On logout or session end

**Storage**: Browser `sessionStorage`

**Keys**:
- `authToken`: stores token value
- `authExpiry`: stores expiration timestamp (future)

**State Transitions**:
```
unauthenticated → authenticated (on login)
authenticated → unauthenticated (on logout or session end)
```

---

### 4. Content Page (Read-Only)

Represents a book chapter/section with original markdown content.

**Attributes**:
- `pageId`: `string` - Unique identifier (URL path)
- `title`: `string` - Page title
- `content`: `string` - Full markdown content
- `wordCount`: `number` - Content length in words
- `lastModified`: `string` - ISO 8601 timestamp (from Git or file system)

**Relationships**:
- One Content Page has zero or one Summary Cache Entry
- Content Page is the input for Summary generation

**Validation Rules**:
- `pageId` must be unique across the site
- `content` required, minimum 100 words (otherwise summary not useful)
- `wordCount` derived from `content.split(/\s+/).length`

**Lifecycle**:
- Created: When Docusaurus builds the site
- Read: When user navigates to page, when generating summary
- Updated: When content author edits markdown file
- Destroyed: When page is deleted from site

**Storage**: Docusaurus static build output (not in runtime state)

**Data Flow**: Markdown file → Docusaurus build → React component props → Summary API

---

### 5. Summary Request (API)

Represents a request to generate a summary (transient, not persisted).

**Attributes**:
- `pageId`: `string` - Identifier for content to summarize
- `content`: `string` - Full page content text
- `targetLength`: `'short' | 'medium' | 'long'` - Future: user preference (currently always 20-25%)
- `requestId`: `string` - UUID for tracking/logging

**Validation Rules**:
- `pageId` required
- `content` required, max 50,000 characters (prevent abuse)
- `content` must have ≥100 words (minimum for meaningful summary)

**Lifecycle**: Transient (exists only during API call)

---

### 6. Summary Response (API, Streamed)

Represents the streaming summary response from the backend.

**Attributes**:
- `chunk`: `string` - Partial summary text chunk
- `done`: `boolean` - Whether streaming is complete
- `error`: `string | null` - Error message if generation failed

**Stream Format** (Server-Sent Events):
```
data: {"chunk": "This chapter explores ", "done": false}
data: {"chunk": "the autonomous agent era...", "done": false}
data: {"chunk": "", "done": true}
```

**Validation Rules**:
- If `done` is `true`, no more chunks will follow
- If `error` is non-null, `done` must be `true`

**Lifecycle**: Transient (exists only during streaming)

---

## Relationships Diagram

```
┌─────────────────┐
│  Content Page   │
│  (Static Build) │
└────────┬────────┘
         │
         │ input for
         ▼
┌─────────────────┐      ┌──────────────────┐
│ Summary Request │─────▶│ Summary Response │
│   (API Call)    │      │   (Streaming)    │
└─────────────────┘      └────────┬─────────┘
                                  │
                                  │ cached as
                                  ▼
                         ┌──────────────────┐
                         │ Summary Cache    │
                         │ (sessionStorage) │
                         └──────────────────┘

┌──────────────────┐
│ Auth State       │
│ (sessionStorage) │──checks──▶ Summary Tab Access
└──────────────────┘

┌──────────────────┐
│   Tab State      │
│ (React State)    │──controls──▶ UI Rendering
└──────────────────┘
```

---

## Validation Rules Summary

| Entity | Field | Rule |
|--------|-------|------|
| Tab State | `activeTab` | Must be 'original', 'summary', or 'personalized' |
| Summary Cache | `pageId` | Non-empty string, unique |
| Summary Cache | `summary` | 150-500 words, non-empty |
| Auth State | `token` | Required if authenticated |
| Content Page | `pageId` | Unique, derived from URL |
| Content Page | `content` | ≥100 words (minimum for summary) |
| Summary Request | `content` | ≥100 words, ≤50,000 characters |
| Summary Response | `chunk` | Non-empty unless `done=true` |

---

## State Machines

### Summary Generation State Machine

```
┌─────────┐
│  idle   │
└────┬────┘
     │ user clicks Summary tab
     ▼
┌──────────────┐  no  ┌────────────┐
│ check cache  │─────▶│ check auth │
└──┬───────────┘      └──┬─────────┘
   │                     │ not authenticated
   │ cache hit           ▼
   │              ┌────────────┐
   │              │  redirect  │
   │              │ to login   │
   │              └────────────┘
   │ cache miss + authenticated
   ▼
┌─────────┐
│ loading │
└────┬────┘
     │ API call
     ▼
┌───────────┐
│ streaming │◀─┐
└────┬──────┘  │ chunks arriving
     │         │
     │         └──────┐
     │ done or error  │
     ▼                │
┌─────────┐           │
│ success │           │
│  or     │           │
│  error  │           │
└─────────┘           │
     │                │
     │ switch away    │
     ▼                │
┌─────────┐           │
│  idle   │───────────┘
└─────────┘
```

---

## Data Persistence

| Entity | Storage | Lifetime | Shared Across Tabs? |
|--------|---------|----------|---------------------|
| Tab State | React state | Single page view | No |
| Summary Cache | sessionStorage | Browser session | Yes |
| Auth State | sessionStorage | Browser session | Yes |
| Content Page | Docusaurus build | Site lifetime | N/A (static) |
| Summary Request | None (transient) | Single API call | No |
| Summary Response | None (transient) | Single stream | No |

---

## Migration Notes

### Phase 1 (Current): Session-based

- `sessionStorage` for cache and auth
- No backend database
- Summaries regenerated per session

### Phase 2 (Future): Database-backed

**Changes Required**:
1. Add database table: `summaries`
   - `id` (UUID), `page_id` (string), `content_hash` (string), `summary` (text), `created_at` (timestamp)
2. Update `cacheService.ts` to call backend API instead of sessionStorage
3. Add cache invalidation logic (based on `content_hash` comparison)
4. Implement user-specific summaries (if personalization added)

**Migration Path**:
- Only `cacheService.ts` changes
- Frontend components unchanged (interface stays the same)
- Add backend endpoint: `GET /api/cache/{pageId}`, `POST /api/cache/{pageId}`

---

## API Contract References

See `contracts/summarize-api.yaml` for detailed OpenAPI specification.
