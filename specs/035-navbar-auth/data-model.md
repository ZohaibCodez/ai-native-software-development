# Data Model: Navbar Authentication UI

**Feature**: 035-navbar-auth  
**Date**: 2025-11-18  
**Purpose**: Document authentication state entities and their relationships

## Overview

This feature does NOT introduce new data models. It reuses existing authentication entities from the ContentTabs personalization feature. This document serves as a reference to the existing data structures used by the navbar authentication button.

## Existing Entities (Reference Only)

### 1. AuthState

**Source**: `book-source/src/types/contentTabs.ts`

**Purpose**: Represents current authentication status

**Fields**:
```typescript
interface AuthState {
  isAuthenticated: boolean;    // True if valid token exists
  token: string | null;         // Authentication token (dummy for MVP)
  expiresAt: number | undefined; // Optional expiration timestamp (unused in MVP)
}
```

**Usage in Navbar**:
- Read via `authService.getAuthState()` or `authService.isAuthenticated()`
- Determines which button to render (Login vs Logout)
- No writes from navbar - only authService modifies this state

**Validation Rules**:
- `isAuthenticated` derived from token existence + non-expiry
- `token` can be any non-empty string (dummy auth MVP)
- `expiresAt` not used in MVP (browser session only)

---

### 2. UserProfile

**Source**: `book-source/src/types/contentTabs.ts`

**Purpose**: User information collected during login

**Fields**:
```typescript
type ProficiencyLevel = 'Novice' | 'Beginner' | 'Intermediate' | 'Expert';

interface UserProfile {
  name: string;                        // User's full name
  email: string;                       // User's email address
  programmingExperience: ProficiencyLevel; // Programming skill level
  aiProficiency: ProficiencyLevel;    // AI knowledge level
}
```

**Usage in Navbar**:
- Read via `authService.getProfile()` after authentication
- NOT displayed in navbar (clarification: icon-only, no username)
- Future use: Could display name in dropdown/tooltip

**Validation Rules** (enforced by DummyLoginWithProfile):
- `name`: Non-empty string
- `email`: Valid email format
- `programmingExperience`: One of 4 enum values
- `aiProficiency`: One of 4 enum values

---

### 3. AuthSession

**Source**: `book-source/src/types/contentTabs.ts`

**Purpose**: Composite session object containing token + profile

**Fields**:
```typescript
interface AuthSession {
  token: string;                // Authentication token
  profile: UserProfile;          // User profile data
  expiresAt: number | undefined; // Optional expiration (unused in MVP)
}
```

**Usage in Navbar**:
- Read via `authService.getSession()`
- Alternative to reading `getAuthState()` + `getProfile()` separately
- Single object containing all auth data

**Storage**:
- Persisted in sessionStorage via `cacheService.set(AUTH_SESSION_KEY, session)`
- Key: `'authSession'`
- Cleared on logout or browser close

---

## State Transitions

### Login Flow

```
[Guest State]
  ↓ (User clicks "Login" button)
[Show DummyLoginWithProfile Modal]
  ↓ (User submits form with valid data)
[authService.saveSession(token, profile)]
  ↓ (sessionStorage updated)
[Authenticated State]
  ↓ (Navbar re-renders via useEffect + storage event)
[Display "Logout" button with user icon]
```

**Triggers**:
1. User clicks Login button → `setShowLoginModal(true)`
2. Modal calls `authService.saveSession()` → sessionStorage write
3. Storage event OR callback triggers `setIsAuthenticated(true)` → re-render
4. Navbar button changes from "Login" to icon + "Logout"

---

### Logout Flow

```
[Authenticated State]
  ↓ (User clicks "Logout" button)
[authService.clearToken()]
  ↓ (sessionStorage cleared)
[Guest State]
  ↓ (Navbar re-renders via useEffect + storage event)
[Display "Login" button]
```

**Triggers**:
1. User clicks Logout button → `handleLogout()` calls `authService.clearToken()`
2. sessionStorage cleared → storage event fired
3. `setIsAuthenticated(false)` → re-render
4. Navbar button changes from icon + "Logout" to "Login"

---

### Browser Session Lifecycle

```
[User Logs In]
  ↓ (sessionStorage: AUTH_SESSION_KEY = {...})
[Session Active]
  ↓ (User navigates between pages)
[Session Persists] (sessionStorage retained)
  ↓ (User closes browser tab/window)
[Session Cleared] (sessionStorage destroyed)
  ↓ (User returns later)
[Guest State] (must log in again)
```

**Clarification from spec**: No inactivity timeout, no localStorage persistence. Session lasts only during browser session.

---

## Relationships

```
AuthSession
  ├─ token: string
  └─ profile: UserProfile
       ├─ name: string
       ├─ email: string
       ├─ programmingExperience: ProficiencyLevel
       └─ aiProficiency: ProficiencyLevel

AuthState (derived view of AuthSession)
  ├─ isAuthenticated: boolean (computed from token existence)
  ├─ token: string | null (same as AuthSession.token)
  └─ expiresAt: number | undefined (unused in MVP)
```

**Derivation Logic**:
- `AuthState.isAuthenticated = !!AuthSession.token && !isExpired(AuthSession.expiresAt)`
- For MVP: `isExpired()` always returns false (no timeout)

---

## sessionStorage Schema

**Key**: `authSession`

**Value** (JSON stringified):
```json
{
  "token": "dummy-token-12345",
  "profile": {
    "name": "John Doe",
    "email": "john@example.com",
    "programmingExperience": "Intermediate",
    "aiProficiency": "Beginner"
  },
  "expiresAt": undefined
}
```

**Lifecycle**:
- **Written by**: `authService.saveSession()` (called by DummyLoginWithProfile)
- **Read by**: `authService.getSession()`, `authService.isAuthenticated()`, `authService.getProfile()`
- **Cleared by**: `authService.clearToken()` (called by navbar logout handler)
- **Auto-cleared**: Browser close (sessionStorage behavior)

---

## Navbar Component State (New)

**Purpose**: Local UI state for navbar button and modal visibility

**Fields** (React useState):
```typescript
const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
```

**Rationale**:
- `isAuthenticated`: Cached auth state for button rendering (avoids sessionStorage reads on every render)
- `userProfile`: Cached user profile (for future dropdown/tooltip features)
- `showLoginModal`: Controls DummyLoginWithProfile visibility

**Sync Strategy**:
- Initialize from sessionStorage on mount (`useEffect`)
- Update on storage events (cross-tab changes - though clarification says independent tabs)
- Update on login success callback

---

## No New Data Models Created

This feature intentionally reuses all existing authentication infrastructure:
- ✅ AuthState (existing)
- ✅ UserProfile (existing)
- ✅ AuthSession (existing)
- ✅ authService methods (existing)
- ✅ cacheService (existing)
- ✅ DummyLoginWithProfile (existing)

**New additions**:
- ❌ No new backend models
- ❌ No new API contracts
- ❌ No new database schemas
- ✅ Only local UI state in navbar component (ephemeral, not persisted)

## Validation Summary

| Entity | Validation Rules | Enforced By |
|--------|------------------|-------------|
| AuthState | token exists + not expired | authService.isAuthenticated() |
| UserProfile | name/email non-empty, proficiency enums | DummyLoginWithProfile form validation |
| AuthSession | valid token + valid profile | authService.saveSession() |
| Navbar UI State | boolean flags only | React (type-safe) |

**No validation logic added by this feature.** All validation already exists in authService and DummyLoginWithProfile.
