---
id: 0003
title: Navbar Auth Implementation Plan
stage: plan
date: 2025-11-18
surface: agent
model: Claude Sonnet 4.5
feature: navbar-auth
branch: 035-navbar-auth
user: ZohaibCodez
command: /sp.plan
labels: ["implementation-plan", "docusaurus", "react", "accessibility", "architecture"]
links:
  spec: specs/035-navbar-auth/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/035-navbar-auth/plan.md
  - specs/035-navbar-auth/research.md
  - specs/035-navbar-auth/data-model.md
  - specs/035-navbar-auth/quickstart.md
tests:
  - Manual testing guide in quickstart.md
---

## Prompt

Follow instructions in sp.plan.prompt.md.

## Response snapshot

Completed comprehensive implementation plan for navbar authentication UI with full Phase 0 (Research) and Phase 1 (Design) deliverables:

**Plan Structure Created**:
1. **plan.md**: Technical context, constitution check (all gates pass), project structure
2. **research.md**: 6 research decisions resolving all technical unknowns
3. **data-model.md**: Reference documentation for existing AuthState/UserProfile/AuthSession entities
4. **quickstart.md**: 8-test manual testing guide with troubleshooting and success criteria

**Key Technical Decisions**:

| Decision Area | Choice | Rationale |
|--------------|--------|-----------|
| Navbar Customization | Docusaurus swizzle Navbar/Content | Official pattern, maintains upgrade path, enables precise positioning |
| State Management | React useState + useEffect | Simple reactive updates, no global state overhead, storage events for sync |
| Accessibility | Semantic `<button>` + ARIA | WCAG 2.1 AA compliance, browser-native keyboard support |
| Icon Asset | Font Awesome fa-user-circle | Already loaded in project, standard avatar pattern |
| Modal Trigger | Controlled component with callbacks | Clean interface, no tight coupling to existing modal |
| Button Positioning | Array splice before ColorModeToggle | Deterministic placement between GitHub and theme toggle |

**Research Outcomes** (6 tasks resolved):
1. ✅ Docusaurus swizzling pattern documented with implementation code
2. ✅ React hooks for auth state reactivity (useState + useEffect + storage events)
3. ✅ WCAG 2.1 AA keyboard accessibility pattern (Tab, Enter, Space, Escape)
4. ✅ Icon selection (Font Awesome already available)
5. ✅ Modal trigger pattern (controlled component)
6. ✅ Navbar positioning strategy (array splice logic)

**Constitution Check Results**: All gates **PASS**
- ✅ Maintainability: Reuses existing components, no new auth logic
- ✅ Testing: Manual testing sufficient for UI-only MVP
- ✅ Performance: <100ms render, <200ms state change
- ✅ Security: Uses existing dummy auth, no new surface
- ✅ Architecture: Standard Docusaurus theme override pattern
- ✅ Complexity Budget: Single component, zero new dependencies
- ✅ No violations requiring justification

**Data Model**: No new entities - references existing:
- AuthState (token + isAuthenticated flag)
- UserProfile (name, email, proficiency levels)
- AuthSession (composite of token + profile)
- All from `book-source/src/types/contentTabs.ts`

**Project Structure**:
- **Frontend**: `book-source/src/theme/Navbar/Content/index.tsx` (swizzled)
- **Existing Services**: authService, cacheService (reused)
- **Existing Components**: DummyLoginWithProfile (reused)
- **Assets**: Font Awesome icons (already loaded)

**Quickstart Testing Guide** (8 test scenarios):
1. Guest login flow (P1 - critical)
2. Session persistence across navigation (P1 - critical)
3. Logout functionality (P2 - essential)
4. Keyboard accessibility (P3 - quality, WCAG)
5. Screen reader support (P3 - quality, ARIA)
6. Mobile responsive design (P3 - quality)
7. Browser session timeout (clarification validation)
8. Multi-tab independence (clarification validation)

Each test includes steps, expected results, and acceptance criteria mapping to spec requirements.

## Outcome

- ✅ Impact: Complete technical plan for navbar auth button with zero new dependencies, full accessibility compliance (WCAG 2.1 AA), and clean integration with existing auth infrastructure. All constitution gates pass - no complexity violations.
- 🧪 Tests: Comprehensive 8-test manual testing guide covering P1 (critical), P2 (essential), and P3 (quality) scenarios. Includes keyboard-only, screen reader, mobile, and multi-tab testing.
- 📁 Files: Created 4 planning artifacts - plan.md (46 loc), research.md (397 loc), data-model.md (267 loc), quickstart.md (423 loc). Total 1,133 lines of implementation guidance.
- 🔁 Next prompts: Ready for `/sp.tasks` to generate atomic implementation tasks with red/green/refactor cycles.
- 🧠 Reflection: Research phase successfully resolved all unknowns (swizzle pattern, hooks, accessibility, positioning). Data model analysis confirmed zero new entities needed - full reuse of existing auth infrastructure validates MVP scope. Quickstart provides complete testing blueprint before implementation.

## Evaluation notes (flywheel)

- Failure modes observed: None. All technical unknowns resolved through research, constitution gates passed without violations.
- Graders run and results (PASS/FAIL): Constitution Check - ALL GATES PASS (7/7 criteria met), Research Coverage - 100% (6/6 unknowns resolved)
- Prompt variant (if applicable): Standard /sp.plan workflow with constitution-first gate evaluation
- Next experiment (smallest change to try): Consider ADR for Docusaurus swizzle vs plugin approach (architectural decision with long-term implications for theme upgrades).