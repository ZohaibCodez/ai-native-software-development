# Implementation Plan: Navbar Authentication UI

**Branch**: `035-navbar-auth` | **Date**: 2025-11-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/035-navbar-auth/spec.md`

## Summary

Add a login/logout button to the Docusaurus navbar positioned between the GitHub link and theme toggle button. The feature provides MVP authentication UI using existing dummy authentication infrastructure (DummyLoginWithProfile modal and authService), with full keyboard accessibility and ARIA support. This establishes the foundation for future Clerk SSO integration while maintaining UI consistency and avoiding breaking changes to the existing navbar layout.

## Technical Context

**Language/Version**: TypeScript 5.6.2, React 19.0.0  
**Primary Dependencies**: Docusaurus 3.9.2, @docusaurus/theme-common 3.9.2, React DOM 19.0.0  
**Storage**: sessionStorage (via existing cacheService)  
**Testing**: Manual testing + accessibility validation (keyboard nav, ARIA, screen reader)  
**Target Platform**: Web (Docusaurus static site)  
**Project Type**: Web application (Docusaurus documentation site)  
**Performance Goals**: Button render <100ms, login/logout state change <200ms  
**Constraints**: No UI breakage, maintain existing navbar layout, reuse existing components  
**Scale/Scope**: Single-page component integration, affects all site pages (global navbar)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Code Quality Gates

**✅ Maintainability**: Feature reuses existing DummyLoginWithProfile and authService - no new authentication logic. Component isolation prevents navbar coupling.

**✅ Testing**: Manual testing sufficient for MVP UI component. Acceptance scenarios from spec map directly to keyboard + mouse interaction tests.

**✅ Performance**: Minimal impact - single conditional render in navbar, sessionStorage reads (synchronous, <1ms).

**✅ Security**: Uses existing dummy auth (no new security surface). Future Clerk SSO migration path documented in spec.

**✅ Architecture**: Maintains Docusaurus theme override pattern (swizzle Navbar component). No deviation from established patterns.

### Architectural Compliance

**✅ Complexity Budget**: Single component addition to existing navbar. No new projects, repositories, or services. Simple conditional UI + event handlers.

**✅ Dependency Hygiene**: Zero new dependencies - uses existing Docusaurus theme components and authService.

**✅ Single Responsibility**: Component handles ONLY login/logout button UI. Delegates authentication logic to authService, modal to DummyLoginWithProfile.

### Violations Requiring Justification

None. All gates pass.

## Project Structure

### Documentation (this feature)

```text
specs/035-navbar-auth/
├── spec.md              # Feature specification with clarifications
├── plan.md              # This file
├── research.md          # Docusaurus navbar swizzling patterns, accessibility best practices
├── data-model.md        # Authentication state model (existing authService)
├── quickstart.md        # Developer guide for testing navbar auth
└── contracts/           # N/A (UI-only feature, no APIs)
```

### Source Code (repository root)

```text
book-source/
├── src/
│   ├── theme/
│   │   └── Navbar/           # Swizzled Docusaurus Navbar component
│   │       ├── index.tsx     # Main navbar with auth button
│   │       └── Content/      # Navbar content wrapper
│   │           └── index.tsx # Contains login/logout button logic
│   ├── components/
│   │   └── ContentTabs/
│   │       └── DummyLoginWithProfile.tsx  # Existing modal (reused)
│   ├── services/
│   │   ├── authService.ts    # Existing auth logic (reused)
│   │   └── cacheService.ts   # Existing sessionStorage wrapper (reused)
│   └── types/
│       └── contentTabs.ts    # Existing types (AuthState, UserProfile)
└── static/
    └── img/                  # User icon assets (generic avatar SVG)
```

**Structure Decision**: Docusaurus theme override pattern via swizzling. The navbar component must be swizzled (not wrapped) to maintain full control over button positioning between GitHub and theme toggle. All authentication logic delegated to existing services - no new service layer required.

## Complexity Tracking

No violations to track. All complexity gates pass without justification needed.
