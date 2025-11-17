# Data Model: Personalized Content Generation

**Feature**: 023-personalization | **Date**: 2025-11-17
**Purpose**: Define entities, validation rules, and state transitions for personalization system

## Overview

This document defines the data structures and validation rules for personalized content generation. All entities are session-scoped (no persistent database) with client-side caching and session storage.

---

## Entity 1: User Profile

**Purpose**: Represents user's learning preferences collected during login

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| name | string | Required, 1-100 chars | User's display name |
| email | string | Required, valid email format | Email address (for future SSO) |
| programmingExperience | ProficiencyLevel enum | Required | One of: Novice, Beginner, Intermediate, Expert |
| aiProficiency | ProficiencyLevel enum | Required | One of: Novice, Beginner, Intermediate, Expert |

**Validation Rules**:
- All fields are required (FR-002a)
- Email must match regex: `^[\w\.-]+@[\w\.-]+\.\w+$`
- Proficiency levels must be exactly one of the enum values (case-sensitive)
- Name cannot be empty or whitespace-only

**Derived Properties**:
- `profileFingerprint`: Computed as `"{programmingExperience}-{aiProficiency}"` (e.g., "Novice-Beginner")
- Used for cache key generation (FR-017a)

**TypeScript Type**:
```typescript
type ProficiencyLevel = 'Novice' | 'Beginner' | 'Intermediate' | 'Expert';

interface UserProfile {
  name: string;
  email: string;
  programmingExperience: ProficiencyLevel;
  aiProficiency: ProficiencyLevel;
}
```

**Python Schema**:
```python
from enum import Enum
from pydantic import BaseModel, Field, EmailStr

class ProficiencyLevel(str, Enum):
    NOVICE = "Novice"
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    EXPERT = "Expert"

class UserProfile(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, strip_whitespace=True)
    email: EmailStr
    programming_experience: ProficiencyLevel
    ai_proficiency: ProficiencyLevel
```

---

## Entity 2: Authentication Session

**Purpose**: Temporary session state combining auth token and user profile

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| token | string | Required, non-empty | Dummy authentication token |
| profile | UserProfile | Required | Embedded user profile object |
| expiresAt | number \| undefined | Optional, Unix timestamp | Session expiration (future use) |

**Storage**: SessionStorage key `authSession` (composite object)

**Lifecycle**:
- Created on successful login (FR-005, FR-006)
- Persists for browser session duration
- Cleared on logout or browser close
- Validated before personalization requests (FR-007)

**State Transitions**:
```
[No Session] 
    → (Login with profile) → [Active Session]
    → (Session expires) → [Expired Session]
    → (Re-login) → [Active Session]
    → (Logout / Browser close) → [No Session]
```

**TypeScript Type**:
```typescript
interface AuthSession {
  token: string;
  profile: UserProfile;
  expiresAt?: number;
}
```

---

## Entity 3: Personalization Cache Entry

**Purpose**: Client-side cached personalized content for fast retrieval

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| pageId | string | Required, non-empty | Content page identifier |
| profileFingerprint | string | Required, format: "Level-Level" | User profile fingerprint |
| personalizedText | string | Required, non-empty | Generated personalized content |
| timestamp | number | Required, Unix timestamp | When content was generated |
| cached | boolean | Always true | Indicates cached content |

**Storage**: SessionStorage key format: `personalized_{pageId}_{profileFingerprint}`

**Validation Rules**:
- pageId must not be empty
- profileFingerprint must match pattern: `^(Novice|Beginner|Intermediate|Expert)-(Novice|Beginner|Intermediate|Expert)$`
- personalizedText must not be empty
- timestamp must be valid Unix timestamp (milliseconds)

**Cache Behavior**:
- Check cache before generation (FR-018)
- Load immediately if found (FR-019, <500ms per SC-003)
- Target 80% hit rate for repeat visits (SC-007)
- Profile-specific: Different profiles get different cache entries for same page (FR-017, clarification #4)

**TypeScript Type**:
```typescript
interface PersonalizationCacheEntry {
  pageId: string;
  profileFingerprint: string;
  personalizedText: string;
  timestamp: number;
  cached: true;
}
```

---

## Entity 4: Personalization Request

**Purpose**: API request payload for personalized content generation

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| pageId | string | Required, non-empty | Content page identifier |
| content | string | Required, 100-50000 chars | Full page content text |
| token | string | Required, non-empty | Auth token |
| programmingLevel | ProficiencyLevel | Required | User's programming proficiency |
| aiLevel | ProficiencyLevel | Required | User's AI proficiency |

**Delivery**: Query parameters for SSE endpoint (GET request for EventSource compatibility)

**Validation Rules**:
- All fields required
- Content length 100-50000 characters (reasonable bounds)
- Token must be non-empty (dummy validation)
- Proficiency levels must be valid enum values

**Python Schema**:
```python
from pydantic import BaseModel, Field

class PersonalizationRequest(BaseModel):
    """Query parameters for /personalize endpoint"""
    page_id: str = Field(..., alias="pageId", min_length=1)
    content: str = Field(..., min_length=100, max_length=50000)
    token: str = Field(..., min_length=1)
    programming_level: ProficiencyLevel = Field(..., alias="programmingLevel")
    ai_level: ProficiencyLevel = Field(..., alias="aiLevel")
```

---

## Entity 5: Personalization Response (Streaming)

**Purpose**: SSE event stream chunks during personalized content generation

**SSE Event Format**:
```json
{
  "chunk": "Partial text content...",
  "done": false,
  "error": null
}
```

**Final Event**:
```json
{
  "chunk": "",
  "done": true,
  "error": null
}
```

**Error Event**:
```json
{
  "chunk": "",
  "done": true,
  "error": "Error message here"
}
```

**Fields**:
| Field | Type | Description |
|-------|------|-------------|
| chunk | string | Partial personalized content text |
| done | boolean | True when streaming complete |
| error | string \| null | Error message if generation failed |

**Streaming Behavior**:
- Start streaming within 2 seconds (SC-002)
- Progressive chunks accumulate into full content
- On error: preserve partial content + show error + retry button (FR-015a/b/c, clarification #3)

**Python Schema**:
```python
class PersonalizationChunk(BaseModel):
    chunk: str
    done: bool
    error: Optional[str] = None
```

---

## Entity 6: Profile Login Request

**Purpose**: Enhanced login request with user profiling

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| name | string | Required, 1-100 chars | User's name |
| email | string | Required, valid email | User's email |
| programmingExperience | ProficiencyLevel | Required | Programming proficiency level |
| aiProficiency | ProficiencyLevel | Required | AI proficiency level |

**Endpoint**: `POST /api/v1/auth/dummy-login-with-profile`

**Response**: AuthWithProfileResponse
```json
{
  "token": "dummy_token_abc123",
  "expires": "session",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "programmingExperience": "Intermediate",
    "aiProficiency": "Beginner"
  }
}
```

**Python Schema**:
```python
class ProfileLoginRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, strip_whitespace=True)
    email: EmailStr
    programming_experience: ProficiencyLevel = Field(..., alias="programmingExperience")
    ai_proficiency: ProficiencyLevel = Field(..., alias="aiProficiency")

class AuthWithProfileResponse(BaseModel):
    token: str
    expires: str  # "session" for dummy auth
    user: dict  # Contains all profile fields
```

---

## State Machine: Personalization Generation Flow

**States**:
1. **IDLE**: No personalization action initiated
2. **CHECKING_CACHE**: Looking for cached content
3. **CACHE_HIT**: Cached content found
4. **CHECKING_AUTH**: Validating session token
5. **AUTH_FAILED**: No valid session (redirect to login)
6. **LOADING**: Preparing to stream
7. **STREAMING**: Receiving personalized content chunks
8. **SUCCESS**: Generation complete, content cached
9. **ERROR**: Generation failed, partial content preserved

**Transitions**:
```
IDLE 
  → (User clicks generate) → CHECKING_CACHE
     → (Cache hit) → CACHE_HIT → (Display cached) → IDLE
     → (Cache miss) → CHECKING_AUTH
        → (No token/expired) → AUTH_FAILED → (Show login)
        → (Valid token) → LOADING
           → (Stream starts) → STREAMING
              → (Stream completes) → SUCCESS → (Cache + display) → IDLE
              → (Stream fails) → ERROR → (Preserve partial + retry) → IDLE
```

**UI State Mapping**:
| State | Button State | Display |
|-------|--------------|---------|
| IDLE | Enabled: "Generate Personalized Content" | Empty or previous content |
| CHECKING_CACHE | Disabled: "Checking cache..." | Loading indicator |
| CACHE_HIT | Disabled | Cached content + cache indicator |
| CHECKING_AUTH | Disabled: "Checking auth..." | Loading indicator |
| AUTH_FAILED | Hidden | Login form |
| LOADING | Disabled: "Generating..." | Loading indicator |
| STREAMING | Disabled: "Generating..." | Streaming chunks (auto-scroll) |
| SUCCESS | Enabled: "Generate Personalized Content" | Full personalized content |
| ERROR | Enabled: "Retry" | Partial content + error message |

---

## Validation Summary

| Entity | Key Validations | Error Messages |
|--------|----------------|----------------|
| UserProfile | All fields required | "All fields are required" |
|  | Email format | "Invalid email format" |
|  | Name length 1-100 | "Name must be 1-100 characters" |
|  | Valid proficiency levels | "Invalid proficiency level" |
| AuthSession | Token non-empty | "Authentication required" |
|  | Profile complete | "Invalid user profile" |
| PersonalizationCache | Profile fingerprint format | "Invalid profile fingerprint format" |
|  | Content non-empty | "Empty personalized content" |
| PersonalizationRequest | Content 100-50000 chars | "Content too short/long for personalization" |
|  | All query params present | "Missing required parameter: {param}" |

---

## Performance Considerations

**Cache Strategy**:
- Key format: `personalized_{pageId}_{profileFingerprint}` (Decision 7 from research.md)
- No size limits (session storage ~5-10MB browser default)
- No TTL (session-scoped, cleared on browser close)
- 16 max cache entries per page (4x4 profile combinations)

**Success Metrics** (from spec SC-001 through SC-007):
- Login < 30s
- Streaming start < 2s
- Cache load < 500ms
- 80% cache hit rate target
- Support content up to 10,000 characters
