# Implementation Plan: Personalized Content Generation with User Profiling

**Branch**: `023-personalization` | **Date**: 2025-11-17 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/023-personalization/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement personalized content generation system that adapts educational content based on user's programming experience and AI proficiency levels. System collects user preferences through enhanced dummy login (name, email, programming level, AI level), generates tailored content via OpenAI Agents SDK with streaming similar to summarization, and caches results with profile-specific keys. Technical approach uses React components for login/profiling UI, session storage for auth and cache with hyphen-separated fingerprints ("Novice-Beginner"), and separate FastAPI backend endpoints for profile-aware authentication and personalization generation.

## Technical Context

**Language/Version**: TypeScript 5.6 (frontend), Python 3.11+ (backend)
**Primary Dependencies**: React 19, Docusaurus 3.9.2, FastAPI (backend), OpenAI Agents SDK, Pydantic (schemas)
**Storage**: Browser sessionStorage (current, profile + token), future database migration planned
**Testing**: Jest + React Testing Library (frontend), pytest (backend)
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions), Mobile responsive
**Project Type**: Web application (Docusaurus frontend + independent FastAPI backend)
**Performance Goals**: Login <30s, streaming start <2s, cache load <500ms, 95% generation success rate
**Constraints**: Session-scoped profiles, client-side cache only, profile fingerprint "Level-Level" format, disabled button during generation
**Scale/Scope**: Educational book site, ~100+ content pages, 16 profile combinations (4x4 proficiency matrix), concurrent users TBD

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

This project extends existing Docusaurus site with personalization features. Constitution principles applied:

- ✅ **Component-Based Architecture**: Reusable PersonalizationTab, DummyLoginWithProfile components
- ✅ **Test-First Approach**: Acceptance criteria defined with Given-When-Then, tests before implementation
- ✅ **Observability**: Streaming states, error messages, retry buttons, cache indicators specified
- ✅ **Simplicity**: Session storage first, dummy auth (SSO with Clerk deferred), client-side cache (DB migration deferred)
- ✅ **Backend Separation**: Independent FastAPI service, modular for future repository extraction
- ⚠️ **Complexity Note**: Extending auth system and adding second AI generation endpoint - justified by personalization feature requirement and future SSO migration path

**Re-evaluation Required**: After Phase 1 design completion

## Project Structure

### Documentation (this feature)

```text
specs/023-personalization/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
# Frontend: Docusaurus + React Components
book-source/
├── src/
│   ├── components/
│   │   └── ContentTabs/
│   │       ├── PersonalizationTab.tsx      # NEW: Personalized content display
│   │       ├── DummyLoginWithProfile.tsx   # NEW: Enhanced login with profiling
│   │       ├── SummaryTab.tsx              # MODIFIED: Use enhanced login
│   │       ├── index.tsx                   # MODIFIED: Add Personalization tab
│   │       └── styles.module.css           # MODIFIED: Styling for new components
│   ├── services/
│   │   ├── authService.ts                  # MODIFIED: Store user profile with token
│   │   ├── personalizationService.ts       # NEW: API client for personalization streaming
│   │   ├── summaryService.ts               # EXISTING: Keep unchanged
│   │   └── cacheService.ts                 # EXISTING: Keep unchanged
│   └── types/
│       └── contentTabs.ts                  # MODIFIED: Add UserProfile, PersonalizationCache types
└── tests/
    ├── components/
    │   ├── PersonalizationTab.test.tsx     # NEW
    │   └── DummyLoginWithProfile.test.tsx  # NEW
    └── services/
        ├── personalizationService.test.ts  # NEW
        └── authService.test.ts             # MODIFIED: Test profile storage

# Backend: Independent FastAPI Service
api/
├── src/
│   ├── main.py                             # MODIFIED: Register personalization router
│   ├── routers/
│   │   ├── auth.py                         # MODIFIED: Add /dummy-login-with-profile endpoint
│   │   ├── personalize.py                  # NEW: /personalize endpoint with SSE
│   │   └── summarize.py                    # EXISTING: Keep unchanged
│   ├── services/
│   │   ├── openai_agent.py                 # MODIFIED: Add generate_personalized_content() function
│   │   └── __init__.py                     # NEW: Export both functions
│   └── models/
│       └── schemas.py                      # MODIFIED: Add UserProfile, PersonalizationRequest schemas
└── tests/
    ├── test_personalize.py                 # NEW
    └── test_openai_agent.py                # MODIFIED: Test personalization function
```

**Structure Decision**: Web application with existing Docusaurus frontend and independent FastAPI backend. Frontend adds PersonalizationTab alongside existing SummaryTab. Backend adds separate /personalize endpoint using same OpenAI Agents SDK pattern. Auth service enhanced to store 4-field user profile (name, email, programming level, AI level) with session token.

## Complexity Tracking

No constitutional violations. Extending existing system with parallel personalization feature following established patterns (streaming SSE, session storage, OpenAI Agents SDK). Backend separation maintained for future repository extraction.
