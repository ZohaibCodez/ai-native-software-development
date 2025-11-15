# Implementation Plan: Interactive Content Tabs with AI Summarization

**Branch**: `022-content-tabs` | **Date**: 2025-11-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/022-content-tabs/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Add interactive tab navigation to all Docusaurus content pages with three views: Original (default full content), Summary (AI-generated streaming summary with authentication), and Personalized (future placeholder). Implement session-scoped caching for summaries (20-25% of original, 150-500 word bounds), dummy authentication with future SSO migration path, and auto-scrolling streaming UI. Technical approach uses React components for tabs, session storage for cache, and FastAPI backend endpoint for OpenAI Agents SDK integration.

## Technical Context

**Language/Version**: TypeScript 5.6 (frontend), Python 3.11+ (backend)
**Primary Dependencies**: React 19, Docusaurus 3.9.2, FastAPI (backend), OpenAI Agents SDK
**Storage**: Browser sessionStorage (current), future database migration planned
**Testing**: Jest + React Testing Library (frontend), pytest (backend)
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions), Mobile responsive
**Project Type**: Web application (Docusaurus frontend + FastAPI backend)
**Performance Goals**: Tab switch <1s, summary streaming start <3s, 95% success rate
**Constraints**: Session-scoped cache, 500ms login redirect, <2s error display, mobile-responsive
**Scale/Scope**: Educational book site, ~100+ content pages, concurrent users TBD

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

This project is a Docusaurus-based documentation site with no formal constitution file established. Applying general best practices:

- ✅ **Component-Based Architecture**: Tab UI will be reusable React component
- ✅ **Test-First Approach**: Acceptance criteria defined, tests before implementation  
- ✅ **Observability**: Streaming events, error states, and loading indicators specified
- ✅ **Simplicity**: Starting with session storage, dummy auth (SSO deferred)
- ⚠️ **Complexity Note**: Adding backend dependency (FastAPI) to existing Docusaurus site - justified for AI summarization feature requirement

**Re-evaluation Required**: After Phase 1 design completion

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# Frontend: Docusaurus + React Components
book-source/
├── src/
│   ├── components/
│   │   └── ContentTabs/           # New tab component
│   │       ├── index.tsx
│   │       ├── TabBar.tsx
│   │       ├── OriginalTab.tsx
│   │       ├── SummaryTab.tsx
│   │       ├── PersonalizedTab.tsx
│   │       └── styles.module.css
│   ├── services/
│   │   ├── authService.ts         # Auth check & dummy login
│   │   ├── summaryService.ts      # API client for streaming
│   │   └── cacheService.ts        # Session storage wrapper
│   └── theme/
│       └── DocItem/               # Docusaurus theme override
│           └── Content/
│               └── index.tsx      # Inject tabs into content pages
└── tests/
    ├── components/
    │   └── ContentTabs.test.tsx
    └── services/
        ├── authService.test.ts
        ├── summaryService.test.ts
        └── cacheService.test.ts

# Backend: FastAPI Service
api/                                # New directory for backend
├── src/
│   ├── main.py                    # FastAPI app entry
│   ├── routers/
│   │   └── summarize.py           # /summarize endpoint
│   ├── services/
│   │   └── openai_agent.py        # OpenAI Agents SDK integration
│   └── models/
│       └── schemas.py             # Request/response models
└── tests/
    ├── test_main.py
    ├── test_summarize.py
    └── test_openai_agent.py
```

**Structure Decision**: Web application with existing Docusaurus frontend and new FastAPI backend. Frontend components integrate into Docusaurus theme system via swizzling. Backend is standalone service for AI summarization.

## Complexity Tracking

No constitutional violations. Adding backend service is justified by feature requirement for AI summarization with streaming.

---

## Phase 0: Research ✅ COMPLETE

**Artifacts**:
- [research.md](./research.md) - 8 key technical decisions documented with rationale and alternatives

**Key Decisions**:
1. Docusaurus swizzling for theme customization
2. sessionStorage for caching (session-scoped, shared across tabs)
3. Server-Sent Events (SSE) for streaming
4. JWT in sessionStorage for dummy auth (future SSO)
5. OpenAI Agents SDK with streaming completion
6. Compound component pattern for tab UI
7. Declarative state management for error handling
8. CSS modules with mobile-first responsive design

---

## Phase 1: Design & Contracts ✅ COMPLETE

**Artifacts**:
- [data-model.md](./data-model.md) - 6 entities with validation rules and state machines
- [contracts/summarize-api.yaml](./contracts/summarize-api.yaml) - OpenAPI 3.0 specification for backend API
- [quickstart.md](./quickstart.md) - Developer setup and troubleshooting guide

**Key Outputs**:
- **Entities**: Tab State, Summary Cache Entry, Auth State, Content Page, Summary Request/Response
- **API Endpoints**: `/summarize` (SSE streaming), `/auth/dummy-login`, `/auth/verify`, `/health`
- **Validation Rules**: Content ≥100 words, summary 150-500 words, session-scoped cache
- **State Machines**: Summary generation flow (idle → check cache → check auth → loading → streaming → success/error)

---

## Constitution Re-Check (Post-Design)

✅ **All gates passed**:
- Component-based architecture maintained
- Test-first approach ready (acceptance criteria → tests → implementation)
- Observability built into design (loading states, error messages, streaming events)
- Simplicity preserved (session storage first, database migration deferred)
- Backend complexity justified by feature requirement

**Ready for Phase 2**: Task breakdown (`/sp.tasks` command)

---

## Next Steps

1. Run `/sp.tasks` to generate detailed implementation tasks
2. Implement in order: Frontend components → Backend services → Integration → Tests
3. Follow quickstart.md for local development setup
4. Reference data-model.md and contracts for implementation details
5. Maintain acceptance criteria from spec.md as definition of done
