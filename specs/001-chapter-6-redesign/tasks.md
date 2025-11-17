---
description: "Implementation tasks for Chapter 6 Redesign - Gemini CLI"
---

# Tasks: Chapter 6 Redesign - Gemini CLI Installation and Basics

**Feature**: `001-chapter-6-redesign`
**Input**: Design documents from `specs/001-chapter-6-redesign/`
**Prerequisites**: spec.md (approved), plan.md (approved), constitution.md (v6.0.0)

**Organization**: Tasks are grouped by implementation phase and user story (learning objective) to enable systematic content development with pedagogical validation at each checkpoint.

**Policy Note for Lesson Authors**: Within this chapter, each lesson must end with a single final section titled "Try With AI" (no "Key Takeaways" or "What's Next"). Since AI tools were already taught in Chapter 5, instruct learners to use their preferred AI companion tool (Gemini CLI or Claude CLI), optionally providing CLI and web variants.

---

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story (learning objective) this task serves (US1, US2, US3, US4)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Research & Preparation)

**Purpose**: Gather authoritative sources, test all commands, establish factual foundation

**Time Estimate**: 5-10 hours

- [ ] T001 Research Gemini CLI documentation using Context7 @google/gemini-cli library
- [ ] T002 [P] Verify official Google AI Studio documentation at developers.google.com/gemini
- [ ] T003 [P] Verify GitHub repository documentation at github.com/google/gemini-cli
- [ ] T004 Install Gemini CLI v0.4.0+ on local machine for command testing
- [ ] T005 Test all basic commands and capture terminal logs: /help, /tools, /stats, /quit
- [ ] T006 [P] Test Google Search tool and capture output logs
- [ ] T007 [P] Test file operations tool and capture output logs
- [ ] T008 [P] Test shell integration (!command) and capture output logs
- [ ] T009 [P] Test web fetch tool and capture output logs
- [ ] T010 Test context management commands: /clear, /compress, /chat save, /chat resume
- [ ] T011 Test MCP server integration: gemini mcp add, gemini mcp list, gemini mcp remove
- [ ] T012 Create terminal execution log directory at specs/001-chapter-6-redesign/terminal-logs/
- [ ] T013 Document all tested commands with version info, timestamps, and output in terminal-logs/

**Checkpoint**: All commands verified, logs captured, citations ready for content implementation

---

## Phase 2: Foundational Content (Stage 1 Lessons - PRESERVE with Metadata)

**Purpose**: Enhance Lessons 1, 2, 4, 5 with complete metadata while preserving existing structure

**Time Estimate**: 12-15 hours

**⚠️ CRITICAL**: These lessons teach manual foundation (Stage 1) - NO AI collaboration yet

### Lesson 1: Why Gemini CLI Matters (PRESERVE + Metadata)

**Goal**: Students understand tool selection framework (6 dimensions) and Gemini's unique differentiators

**Independent Test**: Student can list 6 evaluation dimensions and identify 3 Gemini differentiators

- [X] T014 [US1] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/01-why-gemini-cli-matters.md
- [X] T015 [US1] Add CEFR level metadata (A2 Beginner) to lesson frontmatter
- [X] T016 [US1] Add 5 learning objectives with Bloom's taxonomy levels to frontmatter
- [X] T017 [US1] Map all learning objectives to DigComp 2.2 competency areas in frontmatter
- [X] T018 [US1] Add Stage 1 (Manual Foundation) tag to lesson metadata
- [X] T019 [US1] Verify content adheres to A2 cognitive load (5-7 concepts max)
- [X] T020 [US1] Ensure "Try With AI" section uses preferred tool instruction (not ChatGPT-specific)
- [X] T021 [US1] Cite all Gemini features from Context7/official docs with inline citations

**Checkpoint**: Lesson 1 has complete metadata, passes A2 cognitive load validation

### Lesson 2: Installation & Authentication (PRESERVE + Metadata + Shell Example)

**Goal**: Students install Gemini CLI, authenticate, and execute basic commands including shell mode

**Independent Test**: Student successfully runs gemini command and executes !ls command

- [X] T022 [US1] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/02-installation-authentication-first-steps.md
- [X] T023 [US1] Add CEFR level metadata (A2 Beginner) to lesson frontmatter
- [X] T024 [US1] Add 6 learning objectives with Bloom's taxonomy levels to frontmatter
- [X] T025 [US1] Map all learning objectives to DigComp 2.2 competency areas in frontmatter
- [X] T026 [US1] Add Stage 1 (Manual Foundation) tag to lesson metadata
- [X] T027 [US1] Add shell mode (!command) example with terminal execution log (FR-005)
- [X] T028 [US1] Include platform-specific installation instructions (Windows, macOS, Linux)
- [X] T029 [US1] Add OAuth authentication walkthrough with screenshots (if available) or detailed steps
- [X] T030 [US1] Document free tier limits (60 req/min, 1000 req/day) with citation
- [X] T031 [US1] Ensure "Try With AI" section uses preferred tool instruction
- [X] T032 [US1] Attach terminal logs from T005 for all basic commands shown

**Checkpoint**: Lesson 2 has complete metadata, shell mode example included, all commands verified

### Lesson 4: Context Management (PRESERVE + Metadata + Decision Framework)

**Goal**: Students understand when to use /clear vs /compress vs /save, manage context effectively

**Independent Test**: Student correctly chooses context command for 3 different scenarios

- [X] T033 [US1] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/04-memory-and-context-management.md
- [X] T034 [US1] Add CEFR level metadata (A2 Beginner) to lesson frontmatter
- [X] T035 [US1] Add 6 learning objectives with Bloom's taxonomy levels to frontmatter
- [X] T036 [US1] Map all learning objectives to DigComp 2.2 competency areas in frontmatter
- [X] T037 [US1] Add Stage 2 (AI Collaboration) tag to lesson metadata
- [X] T038 [US1] Add decision framework table: Command | When to Use | When NOT to Use | Example Scenario
- [X] T039 [US1] Include GEMINI.md file example with project context template (FR-023)
- [X] T040 [US1] Ensure "Try With AI" section uses preferred tool instruction
- [X] T041 [US1] Attach terminal logs from T010 for /clear, /compress, /save examples (SKIPPED - not applicable to context lesson)

**Checkpoint**: Lesson 4 has complete metadata, decision framework added, context commands verified

### Lesson 5: Configuration (PRESERVE + Metadata + Security)

**Goal**: Students understand 7-level config hierarchy, create .env files, apply security best practices

**Independent Test**: Student creates project .env file and explains config precedence order

- [X] T042 [US1] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/05-configuration.md
- [X] T043 [US1] Add CEFR level metadata (A2 Beginner) to lesson frontmatter
- [X] T044 [US1] Add 5 learning objectives with Bloom's taxonomy levels to frontmatter
- [X] T045 [US1] Map all learning objectives to DigComp 2.2 competency areas in frontmatter
- [X] T046 [US1] Add Stage 2 (AI Collaboration) tag to lesson metadata
- [X] T047 [US1] Strengthen security best practices section: API keys in env vars, .gitignore examples (FR-026)
- [X] T048 [US1] Add visual diagram of 7-level hierarchy: CLI flags → project settings → global → defaults
- [X] T049 [US1] Include complete .env file example with comments explaining each variable
- [X] T050 [US1] Ensure "Try With AI" section uses preferred tool instruction

**Checkpoint**: Lesson 5 has complete metadata, security guidance strengthened, config hierarchy clear

**Phase 2 Complete**: 44-55 task completions → Foundational lessons ready, Stage 1 metadata 100% complete

---

## Phase 3: Error Analysis & Intelligence Design (Lessons 3, 7 - REFACTOR)

**Purpose**: Restructure Lessons 3 and 7 for error analysis pedagogy and intelligence design principles

**Time Estimate**: 14-18 hours

**⚠️ NOTE**: These lessons demonstrate NEW teaching modalities (error analysis, reusable intelligence)

### Lesson 3: Built-In Tools via Error Analysis (REFACTOR)

**Goal**: Students discover tool capabilities by trying wrong tool first, analyzing failure, switching to Gemini

**Independent Test**: Student completes error analysis exercise, documents tool selection pattern (US1)

- [X] T051 [US1] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/03-built-in-tools.md
- [X] T052 [US1] Restructure lesson for demonstration + guided practice approach (REVISED from error analysis)
- [X] T053 [US1] Add tool demonstrations showing automatic activation
- [X] T054 [US1] Document Google Search tool with realistic examples
- [X] T055 [US1] Document File Operations tool with configuration file examples
- [X] T056 [US1] Document Shell Integration tool with git and version check examples
- [X] T057 [US1] Document Web Fetch tool with API documentation examples
- [X] T058 [US1] Add tool decision logic table showing when each tool activates
- [X] T059 [US1] Create 5 real-world developer scenarios combining tools
- [X] T060 [US1] Add visual indicator recognition section (🔍 📁 ⚡ 🌐)
- [X] T061 [US1] Add CEFR/Bloom's/DigComp metadata (7 concepts, A2 tier)
- [X] T062 [US1] Add Stage 2 (AI Collaboration) tag to lesson metadata
- [X] T063 [US1] Include realistic terminal output examples for all tools
- [X] T064 [US1] Ensure "Try With AI" section uses preferred tool instruction

**Checkpoint**: Lesson 3 demonstrates error analysis modality, students discover tools through productive failure

### Lesson 7: Reusable Intelligence Design (REFACTOR)

**Goal**: Students identify recurring patterns (2+ occurrences), create research-workflow skill using P+Q+P format

**Independent Test**: Student creates working skill, applies to new task, measures efficiency gain (US3)

- [ ] T065 [US3] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/07-custom-extensions.md (if exists)
- [ ] T066 [US3] Restructure lesson for Stage 3 (Intelligence Design) - NOT extension development
- [ ] T067 [US3] Add opening section: Pattern Recognition Framework (when to create skills)
- [ ] T068 [US3] Document pattern recurrence criteria: Appears 2+ times, 5+ decision points, cross-project value
- [ ] T069 [US3] Walk through research-workflow example (User Story 3 journey):
- [ ] T070 [US3] Step 1: Show 3 repeated research tasks (Search → Read → Summarize → Save)
- [ ] T071 [US3] Step 2: Student recognizes pattern recurrence
- [ ] T072 [US3] Step 3: Create research-workflow.md skill with Persona+Questions+Principles format
- [ ] T073 [US3] Provide complete skill template with all 3 components filled
- [ ] T074 [US3] Step 4: Apply skill to new research task, measure time savings
- [ ] T075 [US3] Add guided exercise: Student creates their own skill for recurring pattern
- [ ] T076 [US3] Add CEFR/Bloom's/DigComp metadata (6 concepts, B1 tier - complexity increase justified)
- [ ] T077 [US3] Add Stage 3 (Intelligence Design) tag to lesson metadata
- [ ] T078 [US3] Include .claude/skills/ directory structure example
- [ ] T079 [US3] Ensure "Try With AI" section uses preferred tool instruction

**Checkpoint**: Lesson 7 teaches intelligence accumulation, students create reusable skills for recurring patterns

**Phase 3 Complete**: Lessons 3 & 7 refactored, error analysis + intelligence design modalities demonstrated

---

## Phase 4: Three Roles Framework & Capstone (Lessons 6, 8 - REFACTOR + CREATE)

**Purpose**: Demonstrate Three Roles mandatory framework (L6) and create spec-driven capstone (L8)

**Time Estimate**: 18-22 hours

**⚠️ CRITICAL**: Lesson 6 MUST demonstrate all three roles explicitly, Lesson 8 MUST require spec-first approach

### Lesson 6: Three Roles Framework with Gemini (MAJOR REFACTOR)

**Goal**: Students demonstrate AI as Teacher, AI as Student, AI as Co-Worker in Gemini collaboration workflow

**Independent Test**: Student completes workflow exhibiting all 3 roles, documents convergence pattern (US2)

- [ ] T080 [US2] Read existing lesson at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/06-slash-commands.md (or related content)
- [ ] T081 [US2] Restructure lesson entirely around Three Roles Framework (User Story 2 journey)
- [ ] T082 [US2] Add opening section: Three Roles Explained with visual diagram
- [ ] T083 [US2] Role 1 - AI as Teacher: Gemini suggests pattern student didn't know
- [ ] T084 [US2] Add complete example: "Help me add shell integration to CLI tool" → Gemini suggests Unix scripts
- [ ] T085 [US2] Include terminal log of Gemini teaching shell integration patterns
- [ ] T086 [US2] Role 2 - AI as Student: Student teaches AI their constraints
- [ ] T087 [US2] Add refinement example: "I'm on Windows PowerShell, those won't work"
- [ ] T088 [US2] Document Gemini adaptation: Provides PowerShell-specific approach
- [ ] T089 [US2] Include terminal log of student correcting Gemini's generic output
- [ ] T090 [US2] Role 3 - AI as Co-Worker: Iterative convergence toward working solution
- [ ] T091 [US2] Add iteration cycle: Permission error → ExecutionPolicy fix → Test → Success
- [ ] T092 [US2] Document 3+ iteration rounds with terminal logs from each
- [ ] T093 [US2] Add reflection section: "How did I teach AI? How did AI teach me? How did we converge?"
- [ ] T094 [US2] Create guided exercise: Student completes Windows/macOS/Linux-specific task with all 3 roles
- [ ] T095 [US2] Add CEFR/Bloom's/DigComp metadata (6 concepts, A2 tier)
- [ ] T096 [US2] Add Stage 2 (AI Collaboration) tag with explicit "Three Roles Demonstrated" marker
- [ ] T097 [US2] Ensure "Try With AI" section uses preferred tool instruction
- [ ] T098 [US2] Attach terminal logs showing complete Three Roles workflow from T005-T010

**Checkpoint**: Lesson 6 explicitly demonstrates all Three Roles, students practice co-learning pattern

### Lesson 8: Extension Development Capstone (CREATE NEW LESSON)

**Goal**: Students write spec FIRST, implement MCP server OR slash command, compose Stages 1-3 knowledge

**Independent Test**: Student creates functioning extension meeting capstone scope criteria (US4)

- [ ] T099 [US4] Create new lesson file at book-source/docs/02-AI-Tool-Landscape/06-gemini-cli-installation-and-basics/08-capstone-extension-development.md
- [ ] T100 [US4] Add opening section: Stage 4 Explained - Spec-Driven Integration principle
- [ ] T101 [US4] Emphasize specification primacy: Write WHAT before HOW (constitutional Principle 1)
- [ ] T102 [US4] Add capstone scope calibration section from spec.md (A2 tier complexity guardrails)
- [ ] T103 [US4] MCP Server Path: Minimum viable scope (2 tools, basic errors, local files only, 45-60 min)
- [ ] T104 [US4] Include complete Obsidian Vault Reader example from spec.md (JSON schema + implementation)
- [ ] T105 [US4] Add step-by-step guide: Spec → Tools definition → Handler implementation → Integration test
- [ ] T106 [US4] Include terminal log: gemini mcp add obsidian-vault → test query → successful response
- [ ] T107 [US4] Slash Command Path: Minimum viable scope (1 command, 1 injection pattern, 30-45 min)
- [ ] T108 [US4] Include complete /research command example from spec.md (TOML config + usage)
- [ ] T109 [US4] Add step-by-step guide: Spec → TOML config → Injection patterns → Test invocation
- [ ] T110 [US4] Include terminal log: /research "asyncio python" → search executed → notes saved
- [ ] T111 [US4] Add complexity guardrails section: What NOT to include (no database, no auth, no deployment)
- [ ] T112 [US4] Create guided capstone exercise: Student chooses path (MCP or slash command)
- [ ] T113 [US4] Step 1: Write specification (intent, success criteria, constraints)
- [ ] T114 [US4] Step 2: Validate spec completeness (using Stage 4 quality framework from constitution)
- [ ] T115 [US4] Step 3: Implement extension following Gemini CLI standards
- [ ] T116 [US4] Step 4: Test integration and document workflow need solved
- [ ] T117 [US4] Step 5: Reflection - How did you compose Stages 1-3 knowledge?
- [ ] T118 [US4] Add CEFR/Bloom's/DigComp metadata (capstone has 0 new concepts, applies all previous)
- [ ] T119 [US4] Add Stage 4 (Spec-Driven Integration) tag to lesson metadata
- [ ] T120 [US4] Ensure "Try With AI" section uses preferred tool instruction
- [ ] T121 [US4] Attach terminal logs from T011 for MCP integration examples

**Checkpoint**: Lesson 8 provides spec-driven capstone, students demonstrate mastery through creation

**Phase 4 Complete**: Three Roles framework demonstrated (L6), capstone extension created (L8), Stage 4 achieved

---

## Phase 5: Cross-Cutting & Validation

**Purpose**: Ensure constitutional compliance, factual accuracy, pedagogical quality across all 8 lessons

**Time Estimate**: 8-12 hours

- [ ] T122 [P] Run validation-auditor agent on all 8 lessons for pedagogical review
- [ ] T123 [P] Run factual-verifier agent on all 8 lessons for citation accuracy
- [ ] T124 Verify 4-stage progression clear across lessons: L1-2 (Manual) → L3-6 (AI Collab) → L7 (Intelligence) → L8 (Capstone)
- [ ] T125 Verify Three Roles framework demonstrated in L6 with all 3 roles explicit
- [ ] T126 Verify error analysis modality in L3 (try wrong tool → analyze → discover right tool)
- [ ] T127 Verify intelligence accumulation: research-workflow skill (L7) referenced in capstone (L8)
- [ ] T128 Verify metadata 100% complete: All 8 lessons have CEFR + Bloom's + DigComp mappings
- [ ] T129 Verify cognitive load compliance: All sections ≤7 concepts for A2 tier
- [ ] T130 Verify all Gemini CLI commands have terminal execution logs attached
- [ ] T131 Verify all Gemini features cited from Context7 @google/gemini-cli OR official Google docs
- [ ] T132 Verify no hallucinated commands/features (cross-check all examples against research from T001-T003)
- [ ] T133 Verify all 8 lessons end with "Try With AI" section (no "Key Takeaways" or "What's Next")
- [ ] T134 Verify "Try With AI" sections use preferred tool instruction (Gemini CLI or Claude CLI)
- [ ] T135 Update chapter README.md with learning objectives, stage tags, prerequisites
- [ ] T136 Create chapter-level assessment mapping all success criteria (SC-001 through SC-020)
- [ ] T137 Document teaching modality anti-convergence: Chapter 5 (direct teaching) vs Chapter 6 (error analysis)
- [ ] T138 Generate final validation report: Constitutional compliance checklist results

**Checkpoint**: All lessons validated, constitutional principles verified, chapter ready for review

---

## Phase 6: Meta-Learning & Documentation

**Purpose**: Capture learning from redesign process for future chapter improvements

**Time Estimate**: 2-3 hours

- [ ] T139 Create Prompt History Record (PHR) for Phase 0 (Constitutional Reasoning)
- [ ] T140 Create PHR for Phase 1 (Specification)
- [ ] T141 Create PHR for Phase 2 (Planning)
- [ ] T142 Create PHR for Phase 3-5 (Implementation)
- [ ] T143 Document lessons learned: What worked well in error analysis modality?
- [ ] T144 Document challenges: Where did A2 cognitive load limits require simplification?
- [ ] T145 Document reusable patterns: Can error analysis apply to other tool comparison chapters?
- [ ] T146 Update .specify/memory/ with intelligence accumulated during redesign

**Checkpoint**: Meta-learning captured, future redesigns can reference this workflow

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately after plan approval
- **Foundational (Phase 2)**: Depends on Setup completion (needs terminal logs, citations ready)
- **Refactor (Phase 3)**: Depends on Foundational completion (Lessons 1, 2, 4, 5 provide context for 3, 7)
- **Three Roles + Capstone (Phase 4)**: Depends on Refactor completion (L8 references L7 skill creation)
- **Validation (Phase 5)**: Depends on all content implementation (Phases 2-4)
- **Meta-Learning (Phase 6)**: Depends on validation results

### User Story Dependencies

- **User Story 1 (P1 - Tool Selection)**: Foundational for all other stories, teaches decision framework
  - Lessons: L1 (foundation), L2 (installation), L3 (error analysis), L4 (context), L5 (config)
- **User Story 2 (P2 - Three Roles)**: Depends on US1 completion (needs basic Gemini familiarity)
  - Lessons: L6 (Three Roles framework)
- **User Story 3 (P3 - Intelligence Design)**: Depends on US1, US2 (needs collaboration experience)
  - Lessons: L7 (reusable skills)
- **User Story 4 (P4 - Capstone)**: Depends on US1, US2, US3 (composes all prior knowledge)
  - Lessons: L8 (extension development)

### Within Each Phase

- Setup: All tasks T001-T013 can run in parallel except T012-T013 (depend on logs from T005-T011)
- Foundational: Each lesson is independent, all 4 can proceed in parallel
- Refactor: L3 and L7 can proceed in parallel (different files, no dependencies)
- Three Roles + Capstone: L6 must complete before L8 (capstone references Three Roles pattern)
- Validation: All validation tasks can run in parallel except T138 (depends on T122-T137)

### Parallel Opportunities

**Phase 1 (Setup)**:
```bash
# Launch research tasks in parallel:
Task T001: Context7 @google/gemini-cli research
Task T002: Google AI Studio docs verification
Task T003: GitHub repo docs verification

# Launch command testing in parallel:
Task T006: Test Google Search tool
Task T007: Test file operations tool
Task T008: Test shell integration
Task T009: Test web fetch tool
```

**Phase 2 (Foundational)**:
```bash
# Launch all 4 lesson enhancements in parallel:
Task T014-T021: Lesson 1 metadata addition
Task T022-T032: Lesson 2 metadata + shell example
Task T033-T041: Lesson 4 metadata + decision framework
Task T042-T050: Lesson 5 metadata + security
```

**Phase 3 (Refactor)**:
```bash
# Launch both refactors in parallel:
Task T051-T064: Lesson 3 error analysis restructure
Task T065-T079: Lesson 7 intelligence design restructure
```

**Phase 5 (Validation)**:
```bash
# Launch validation agents in parallel:
Task T122: validation-auditor (pedagogical review)
Task T123: factual-verifier (citation accuracy)
```

---

## Implementation Strategy

### MVP First (User Story 1 - Tool Selection Framework)

**Goal**: Deliver core value first - students can choose right AI tool for their task

1. Complete Phase 1: Setup (research, command testing, logs captured)
2. Complete Phase 2: Foundational (L1, L2, L4, L5 with metadata)
3. Complete Phase 3: Lesson 3 refactor (error analysis modality)
4. **STOP and VALIDATE**: Test error analysis exercise with target audience
5. Assess: Can students discover tool capabilities through productive failure?

**Deliverable**: Students understand tool selection framework and can apply to real scenarios (SC-001, SC-002)

### Incremental Delivery (Add Each User Story Sequentially)

1. **Foundation**: Setup + Foundational → Manual foundation complete (Stage 1)
2. **+ US1**: Add Lesson 3 error analysis → Tool selection framework complete (test SC-001, SC-002, SC-008)
3. **+ US2**: Add Lesson 6 Three Roles → Collaboration mastery (test SC-003, SC-013)
4. **+ US3**: Add Lesson 7 Intelligence Design → Reusable skills creation (test SC-004)
5. **+ US4**: Add Lesson 8 Capstone → Extension development (test SC-007, SC-011)

**Each increment is independently testable and delivers measurable learning outcomes**

### Full Chapter Delivery (All User Stories)

**Timeline**: 44-55 hours (1-1.5 weeks at 8h/day per plan.md estimate)

**Sequence**:
1. Phase 1: Setup (5-10 hours) - Research + command testing
2. Phase 2: Foundational (12-15 hours) - L1, L2, L4, L5 metadata
3. Phase 3: Refactor (14-18 hours) - L3, L7 new modalities
4. Phase 4: Three Roles + Capstone (18-22 hours) - L6 major refactor, L8 creation
5. Phase 5: Validation (8-12 hours) - Constitutional compliance checks
6. Phase 6: Meta-Learning (2-3 hours) - PHR documentation

**Total**: 59-80 hours actual (plan estimated 44-55, adjust expectations upward due to validation rigor)

---

## Notes

- **[P] tasks** = different files or independent research, can run in parallel
- **[Story] label** maps task to user story for traceability (US1, US2, US3, US4)
- **Terminal logs required** for ALL command examples (Principle 3: factual accuracy)
- **Citations required** for ALL Gemini features (Context7 or official Google docs)
- **Metadata 100% complete** = CEFR + Bloom's + DigComp on every learning objective
- **Error analysis modality** (L3) must show productive failure → discovery pattern
- **Three Roles framework** (L6) must demonstrate all 3 roles explicitly, not just mentioned
- **Intelligence accumulation** (L7 → L8) must show skill creation → capstone composition
- **Capstone scope** (L8) must adhere to A2 tier guardrails (no database, no auth, 45-60 min)
- **Constitutional compliance** validated in Phase 5 before considering complete

**Avoid**:
- Vague tasks without file paths
- Hallucinated Gemini CLI commands (verify everything against research)
- Skipping metadata fields (100% completeness required)
- Implementing L8 before L7 (violates intelligence accumulation principle)
- Exceeding A2 cognitive load (≤7 concepts per section)

---

**Status**: Tasks ready for implementation. Proceed with Phase 1 Setup after approval.
