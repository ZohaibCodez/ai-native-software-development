# Tasks: Chapter 13 - Introduction to Modern Python

**Specification**: `specs/part-4-chapter-13/spec.md`
**Plan**: `specs/part-4-chapter-13/plan.md`
**Feature Branch**: `013-introduction-to-python`
**Created**: 2025-11-08

---

## Overview

This task checklist guides the implementation of Chapter 13 through 4 progressive lessons. Each lesson is independently testable and contributes to the overall chapter objective: students understand Python, install it, write their first program, and practice AI-first development.

**Key Implementation Principles**:
- ✅ Each lesson applies the AIDD teaching pattern exactly as specified in plan.md
- ✅ All code examples are verified to run without errors
- ✅ Dual-path design is clearly marked (🟦 CORE / 🟪 PROFESSIONAL)
- ✅ No forward references to Chapters 14+
- ✅ Validation checkpoints are measurable
- ✅ AI prompts are specific and exploration-oriented (not generic)

---

## Phase 1: Setup & Chapter Infrastructure

**Purpose**: Prepare chapter directory structure

- [ ] T001 Create chapter directory: `docs/04-Part-4-Python-Fundamentals/13-introduction-to-python/`
- [ ] T002 Create lesson files (placeholders):
  - [ ] `readme.md` (chapter intro with overview and learning objectives)
  - [ ] `01-what-is-python.md`
  - [ ] `02-installing-python.md`
  - [ ] `03-your-first-program.md`
  - [ ] `04-thinking-like-an-ai-developer.md`

**Checkpoint**: Chapter structure ready

---

## Phase 2: Lesson 1 - What is Python and Why AIDD Needs It (P1) 🎯

**Goal**: Students understand what Python is and why it matters for AI-native development

**Acceptance Criteria**:
- Student can identify: Python is a high-level, readable, interpreted language
- Student can articulate: Why Python matters for AI and agentic development
- Student can recognize: Connection to AIDD mission from Chapters 1-4

### Content Implementation: Lesson 1

#### Constitutional & Formatting Guidelines (Apply to ALL lessons)

**Constitution Alignment** (Reference: `.specify/memory/constitution.md` v3.0.2):
- ✅ **Evals-First Design**: Success evals defined first (lesson enables specific, measurable outcomes)
- ✅ **Specification-First**: Every section shows clear intent before AI prompts
- ✅ **AI as Co-Reasoning Partner**: Prompts guide thinking, not just syntax
- ✅ **Validation-First**: Checkpoints test understanding, not code execution
- ✅ **Bilingual Development**: Python introduced as reasoning layer (TypeScript comes later)
- ✅ **Learning by Building**: Hands-on practice with real Python programs
- ✅ **Progressive Complexity**: A1 recognition → A2 simple application (CEFR standards)
- ✅ **Transparency & Methodology**: Show spec-first thinking applied to coding

**Output Style Guidelines** (Reference: `.claude/output-styles/lesson.md`):
- ✅ **YAML Frontmatter**: All lessons include skills metadata (CEFR levels, Bloom's, DigComp, cognitive load)
- ✅ **Chapter readme.md**: Overview with learning objectives (separate from lesson content)
- ✅ **Lesson Structure**: Content + subheadings (H2/H3) + final "Try With AI" section
- ✅ **No "Key Takeaways" or "What's Next"**: Lessons end ONLY with "Try With AI" section
- ✅ **Metadata**: Generation info (spec, plan, tasks references), creation date, author
- ✅ **Cognitive Load**: Track new concepts, Bloom's levels, max 2 per lesson (A1 limit = 5 total)

#### Lesson 1 Implementation Tasks

- [ ] T003 [US1] Create `01-what-is-python.md` with required YAML frontmatter:
  - [ ] Title, chapter (13), lesson (1), duration_minutes (45)
  - [ ] Skills metadata: "What is Python" (A1/Remember), "Why for AIDD" (A1/Understand), "Connection to Agentic AI" (A1/Understand)
  - [ ] Learning objectives (3): identify Python, recognize relevance, connect to AIDD
  - [ ] Cognitive load: 2 concepts (within A1 limit of 5)
  - [ ] Generation metadata: spec, plan, tasks references
- [ ] T004 [US1] Write "What it is" section - plain language explanation of Python (paragraph + 3 characteristics)
- [ ] T005 [US1] Write "Why Python for AIDD" section - connection to AI agents, automation, data science
- [ ] T006 [US1] Embed Code Examples section with AIDD pattern (What it does → Code → Try it → Why it matters):
  - [ ] Example 1: Simple print statement (shows readability)
  - [ ] Example 2: Code comparison (Python vs. other language, highlight readability)
- [ ] T007 [US1] Write 🤖 "Think with Your AI" section with exactly 3 specific Claude Code/Gemini prompts:
  - [ ] Prompt 1: "Show me a 'Hello World' in Python. Why is it only one line?"
  - [ ] Prompt 2: "How is Python different from other languages I've heard of?"
  - [ ] Prompt 3: "Why would someone building an AI agent choose Python?"
  - Validation: Prompts must be exploration-oriented, not generic "ask AI what is X"
- [ ] T008 [US1] Write 🧠 "Why it matters for thinking" section - reasoning pattern connecting to AIDD (not just syntax)
- [ ] T009 [US1] [P] Add 🟦 CORE PATH content:
  - [ ] Mark clearly with "🟦 CORE PATH" header
  - [ ] Content: visual examples, basic Python definition, relevance to development
  - [ ] Assessment: Can student identify Python characteristics?
- [ ] T010 [US1] [P] Add 🟪 PROFESSIONAL PATH extension:
  - [ ] Mark clearly with "🟪 PROFESSIONAL PATH" header
  - [ ] Content: Python's dominance in AI/data science (Anthropic, OpenAI, DeepMind, Google)
  - [ ] Connection: Link to agent thinking from Chapters 1-4
  - [ ] Assessment: Can professional articulate why Python for AI-native development?
- [ ] T011 [US1] Add validation checkpoint section: "Can you explain why Python matters for AIDD in 2-3 sentences?"

**Checkpoint**: Lesson 1 complete with constitutional alignment, YAML metadata, AIDD teaching pattern, dual paths marked

---

## Phase 3: Lesson 2 - Installing Python & Setting Up Environment (P1)

**Goal**: Students successfully install Python 3.13+ and verify installation

**Acceptance Criteria**:
- Student can run `python --version` on their system
- Student confirms Python 3.13+ is installed
- Student understands what installation means (where code lives, terminal access)

### Content Implementation: Lesson 2

- [ ] T012 [US2] Create `02-installing-python.md` with required YAML frontmatter:
  - [ ] Title, chapter (13), lesson (2), duration_minutes (30)
  - [ ] Skills metadata: "Installing Python" (A1/Understand), "Environment Setup" (A1/Apply), "Verification" (A1/Apply)
  - [ ] Learning objectives (3): install Python 3.13+, open terminal, verify installation
  - [ ] Cognitive load: 2 concepts (within A1 limit)
  - [ ] Generation metadata: spec, plan, tasks references
- [ ] T013 [US2] Write "What it is" section - plain language explanation of installation, where Python lives
- [ ] T014 [US2] Write platform-specific installation guides (by OS):
  - [ ] Windows installation steps (with PATH setup if needed)
  - [ ] macOS installation steps (Homebrew option)
  - [ ] Linux installation steps (apt/dnf/pacman depending on distro)
- [ ] T015 [US2] Write "How to verify installation" section with step-by-step terminal commands
- [ ] T016 [US2] Embed Code Examples section:
  - [ ] Example: `python --version` output (correct)
  - [ ] Example: Error output (incorrect PATH scenario)
  - [ ] Pattern: What it does → Try it → Why it matters
- [ ] T017 [US2] Write 🤖 "Think with Your AI" section with exactly 3 specific troubleshooting prompts:
  - [ ] Prompt 1: "I ran `python --version` and got an error. What does this mean?"
  - [ ] Prompt 2: "Which Python version do I have? Is 3.13 required or recommended?"
  - [ ] Prompt 3: "My terminal doesn't recognize the python command. What's happening?"
- [ ] T018 [US2] Write 🧠 "Why it matters" section - environment is the foundation
- [ ] T019 [US2] [P] Add 🟦 CORE PATH:
  - [ ] Mark clearly with header
  - [ ] Content: Basic installation steps for all three platforms
  - [ ] Assessment: Student confirms Python 3.13+ with terminal command
- [ ] T020 [US2] [P] Add 🟪 PROFESSIONAL PATH:
  - [ ] Mark clearly with header
  - [ ] Content: Virtual environments preview, why Python 3.13 matters, modern development practices
  - [ ] Connection to Chapter 7 (Bash) and Chapter 5 (Claude Code)
- [ ] T021 [US2] Add validation checkpoint: "Run `python --version` and confirm 3.13+"

**Checkpoint**: Lesson 2 complete with platform coverage, constitutional alignment, troubleshooting guidance

---

## Phase 4: Lesson 3 - Your First Program (P1)

**Goal**: Students write, execute, and modify their first Python program

**Acceptance Criteria**:
- Student creates a `.py` file with greeting program
- Student executes the program and sees correct output
- Student modifies the program and observes the changes
- Student asks AI questions about code (instead of memorizing)

### Content Implementation: Lesson 3

- [ ] T022 [US3] Create `03-your-first-program.md` with required YAML frontmatter:
  - [ ] Title, chapter (13), lesson (3), duration_minutes (45)
  - [ ] Skills metadata: "Running Code" (A2/Apply), "Input/Output Pattern" (A2/Apply), "Program Structure" (A2/Understand)
  - [ ] Learning objectives (4): understand program structure, write first program, execute code, ask AI questions
  - [ ] Cognitive load: 2 concepts (within A2 limit)
  - [ ] Generation metadata: spec, plan, tasks references
- [ ] T023 [US3] Write "What it is" section - plain language explanation of programs, basic structure
- [ ] T024 [US3] Write scaffolded code-building section with 3 progressive steps:
  - [ ] Step 1: Print a simple greeting (print statement only)
  - [ ] Step 2: Ask user for name (input statement)
  - [ ] Step 3: Combine both into complete greeting program
- [ ] T025 [US3] Embed all three code examples in-lesson with full AIDD pattern:
  - [ ] Code Example 1: `print("Hello, World!")` with What it does → Try it → Why it matters
  - [ ] Code Example 2: `name = input("What is your name? ")` with full pattern
  - [ ] Code Example 3: Complete greeting program combining both
  - Validation: All code examples run without errors on Python 3.13+
- [ ] T026 [US3] Write 🤖 "Think with Your AI" section with exactly 4 specific prompts:
  - [ ] Prompt 1: "Explain line-by-line what this program does. What happens first? Then what?"
  - [ ] Prompt 2: "What would happen if we removed the `input()` line? What would change?"
  - [ ] Prompt 3: "How could we change the greeting message? Show me two ways."
  - [ ] Prompt 4: "Why do we use `+` here to combine text?"
- [ ] T027 [US3] Write 🧠 "Why it matters" section - foundation of programming, input → process → output pattern
- [ ] T028 [US3] [P] Add 🟦 CORE PATH:
  - [ ] Mark clearly with header
  - [ ] Content: Simple version, copy-paste scaffolding, step-by-step guided exploration
  - [ ] Assessment: Student writes, runs, and modifies greeting program
- [ ] T029 [US3] [P] Add 🟪 PROFESSIONAL PATH:
  - [ ] Mark clearly with header
  - [ ] Content: Challenge - write program from specification (previews Lesson 4 methodology)
  - [ ] Connection: Link to specification-first thinking from Chapter 4
- [ ] T030 [US3] Add validation checkpoint: "Write, run, and modify the greeting program"

**Checkpoint**: Lesson 3 complete with embedded code examples, constitutional alignment, both paths included

---

## Phase 5: Lesson 4 - Thinking Like an AI-First Developer (P2, Professional Only)

**Goal**: Students apply specification-first thinking to writing code

**Acceptance Criteria**:
- Student writes a plain-language specification
- Student asks AI to generate code from specification
- Student validates generated code against specification
- Student understands why specification-first is more efficient

### Content Implementation: Lesson 4

- [ ] T031 [US4] Create `04-thinking-like-an-ai-developer.md` with required YAML frontmatter:
  - [ ] Title, chapter (13), lesson (4), duration_minutes (30)
  - [ ] Skills metadata: "Specification-First Approach" (B1/Apply), "Code Validation" (B1/Analyze), "AI Partnership" (A2-B1/Apply)
  - [ ] Learning objectives (3): apply spec-first thinking, validate generated code, understand methodology value
  - [ ] Cognitive load: 2 concepts (within B1 limit)
  - [ ] Differentiation note: "🟪 PROFESSIONAL PATH ONLY - for experienced developers transitioning to AIDD"
  - [ ] Generation metadata: spec, plan, tasks references
- [ ] T032 [US4] Add chapter note: "🟪 PROFESSIONAL PATH ONLY - This lesson is for experienced developers"
- [ ] T033 [US4] Write "What it is" section - explain specification-first approach (from Chapter 4) and AIDD principles
- [ ] T034 [US4] Write comparison section: "Typing Code vs. Specifying Then Using AI"
  - [ ] Compare effort, clarity, debugging, scalability
  - [ ] Connection to Chapter 4 (Nine Pillars - specification-first)
- [ ] T035 [US4] Embed Code Example with full AIDD pattern:
  - [ ] Section 1: Plain-language specification (what we want the program to do)
  - [ ] Section 2: Generated code (what Claude Code/Gemini might produce)
  - [ ] Section 3: Validation (does it match the spec? What works? What's missing?)
- [ ] T036 [US4] Write 🤖 "Think with Your AI" section with exactly 4 specific prompts:
  - [ ] Prompt 1: "Write a program that does [my specification]. Here's what I want: [example details]"
  - [ ] Prompt 2: "I gave you this specification. Does this code match what I asked for? Why or why not?"
  - [ ] Prompt 3: "Using my specification, how would you generate better code? What was missing?"
  - [ ] Prompt 4: "Why is writing the specification first easier than just typing code?"
- [ ] T037 [US4] Write 🧠 "Why it matters" section - AIDD methodology connection (Chapter 4), thinking over typing
- [ ] T038 [US4] Add validation checkpoint: "Write specification → ask AI → validate → explain result"

**Checkpoint**: Lesson 4 complete (Professional path only), specification-first methodology taught

---

## Phase 6: Chapter Integration & Validation

**Purpose**: Quality assurance and chapter-wide consistency

### Code Verification

- [ ] T039 [P] Verify all code examples execute without errors on Python 3.13+
  - [ ] Example 1: print("Hello, World!")
  - [ ] Example 2: input("What is your name? ")
  - [ ] Example 3: Complete greeting program
- [ ] T040 [P] Verify all code examples produce expected output
- [ ] T041 [P] Verify no forward references in any lesson (search: "variable", "function", "class", "async", "def", "class")

### Pattern & Pedagogy Validation

- [ ] T042 Verify all 4 lessons: AIDD teaching pattern (What it is → Code → Think with AI → Why it matters)
- [ ] T043 [P] Verify all "Think with Your AI" prompts are specific, exploration-oriented (NOT generic)
- [ ] T044 [P] Verify CEFR levels assigned correctly:
  - [ ] Lesson 1: A1 (recognition)
  - [ ] Lesson 2: A1 (guided procedure)
  - [ ] Lesson 3: A2 (simple application)
  - [ ] Lesson 4: A2-B1 (professional, independent application)
- [ ] T045 [P] Verify cognitive load (2 concepts per lesson, max 10 total)

### Dual-Path Validation

- [ ] T046 Verify 🟦 CORE PATH clearly marked with header in Lessons 1-3
- [ ] T047 Verify 🟪 PROFESSIONAL PATH clearly marked with header in Lessons 1-4
- [ ] T048 Verify Professional content connects to Chapters 1-11 (spec-first, AI partnership, etc.)

### Chapter Integration

- [ ] T049 Create `readme.md` with:
  - [ ] Chapter title and introduction (2-3 paragraphs)
  - [ ] "What You'll Learn" section (5 learning objectives)
  - [ ] Dual-path explanation and guidance
  - [ ] Prerequisites (Chapters 1-12 AIDD, tools, prompting)
  - [ ] Time estimate (~2.5 hours)
  - [ ] Links to lesson files
- [ ] T050 [P] Verify foundation for Chapter 14 (Data Types):
  - [ ] Students can run Python ✓
  - [ ] Students understand input/output ✓
  - [ ] Students ask AI questions about code ✓
  - [ ] Students value specification-first thinking ✓

### Documentation & Accessibility

- [ ] T051 Verify reading level is Grade 7-8 (accessible, not condescending)
- [ ] T052 [P] Verify all code examples have clear comments
- [ ] T053 [P] Verify all "Try it" sections have step-by-step instructions
- [ ] T054 [P] Verify all YAML frontmatter is complete (no missing fields)

**Checkpoint**: All quality assurance passed, chapter ready for technical review

---

## Phase 7: Final Review & Sign-Off

**Purpose**: Ensure chapter meets specification and is publication-ready

- [ ] T055 Complete chapter self-review:
  - [ ] All 4 lessons implemented ✓
  - [ ] All 5 success evals measurable ✓
  - [ ] Dual paths clear and functional ✓
  - [ ] No forward references ✓
  - [ ] AIDD patterns enforced ✓
  - [ ] CEFR levels assigned ✓
  - [ ] AI prompts specific ✓
  - [ ] Constitutional alignment verified ✓
  - [ ] Formatting guidelines followed ✓
- [ ] T056 Run technical reviewer validation (use `technical-reviewer` subagent)
- [ ] T057 Address any technical reviewer feedback
- [ ] T058 Prepare chapter for publication (merge to main)

---

## Dependency Graph & Completion Order

```
Phase 1 (Setup)
    ↓
Phase 2 (Lesson 1)  ┐
Phase 3 (Lesson 2)  ├─ Can run in parallel
Phase 4 (Lesson 3)  ┤
Phase 5 (Lesson 4)  ┘
    ↓
Phase 6 (Validation & Integration)
    ↓
Phase 7 (Final Review & Sign-Off)
```

**Independent Parallelization**:
- Lessons 1, 2, 3 can be implemented in parallel after Phase 1
- Lesson 4 (professional) can proceed independently
- All code verification (T039-T041) parallelizable
- All pattern validation (T042-T045) parallelizable
- Professional path additions in Lessons 1-3 can be done in parallel

---

## MVP Scope (Recommended First Delivery)

**Minimum Viable Chapter** (covers all core learning objectives):
- ✅ Phase 1: Setup (chapter directory + readme.md)
- ✅ Phase 2: Lesson 1 (What is Python)
- ✅ Phase 3: Lesson 2 (Installing Python)
- ✅ Phase 4: Lesson 3 (Your First Program)
- ✅ Phase 6: Code verification + pattern validation

**Time estimate**: ~4-6 hours for MVP implementation

**Full Chapter** (adds professional methodology):
- ✅ Phase 5: Lesson 4 (specification-first, professional path)
- ✅ Professional path extensions in Lessons 1-3

**Total time estimate**: ~6-8 hours including all validation + review

---

## Implementation Strategy

### Recommended Workflow

1. **Phase 1** (Setup) - Create directory + readme.md - ~15 minutes
2. **Phases 2-5** (Lessons 1-4) - Implement in parallel or sequentially - ~4-5 hours
   - Each lesson: Write YAML frontmatter + sections + AI prompts + dual paths
3. **Phase 6** (Validation) - Code + pattern + integration checks - ~1 hour
4. **Phase 7** (Final Review) - Self-review + technical review - ~30 minutes

### Testing & Validation

No unit tests required (educational content).

**Validation approach**:
- Code examples: Run on Python 3.13+, verify output
- Pedagogy: Review against AIDD pattern checklist + constitution
- Content: Read-through for clarity, reading level, no forward refs
- Metadata: Verify YAML frontmatter completeness, CEFR accuracy

### File Structure (Final)

```
docs/04-Part-4-Python-Fundamentals/13-introduction-to-python/
├── readme.md                   (Chapter intro, learning objectives, dual-path guide)
├── 01-what-is-python.md        (Lesson 1, A1)
├── 02-installing-python.md     (Lesson 2, A1)
├── 03-your-first-program.md    (Lesson 3, A2)
└── 04-thinking-like-ai-dev.md  (Lesson 4, A2-B1, professional only)
```

---

## Acceptance Criteria (Chapter-Level)

All tasks complete when:

- ✅ **Specification**: All tasks reference spec.md, plan.md, and constitutional principles
- ✅ **Lessons**: All 4 lessons created with AIDD pattern applied
- ✅ **Constitution**: Constitutional alignment verified (evals-first, spec-first, AI partnership, validation-first, etc.)
- ✅ **Formatting**: Output style guidelines followed (YAML frontmatter, CEFR levels, Bloom's, DigComp)
- ✅ **Code**: All examples run without errors on Python 3.13+
- ✅ **Success Evals**: All 5 success evals measurable and achievable through content
- ✅ **Dual Paths**: 🟦 CORE (Lessons 1-3) and 🟪 PROFESSIONAL (Lesson 4) clearly marked
- ✅ **Scope**: Zero forward references to Chapters 14+ (no variables, functions, classes, async)
- ✅ **Proficiency**: CEFR levels assigned (A1, A1, A2, A2-B1) with appropriate Bloom's
- ✅ **AI Prompts**: All specific, exploration-oriented (not generic "ask AI")
- ✅ **Reinforcement**: Chapters 1-12 (AIDD, tools, prompting) reinforced
- ✅ **Foundation**: Ready for Chapter 14 (Data Types) - students can run Python, understand I/O, ask AI questions
- ✅ **Technical Review**: Passed validation from technical-reviewer subagent
- ✅ **Publication**: Ready for main branch and Docusaurus build

---

## Notes & Guidance

**Constitutional Alignment**:
- Evals-First: Success evals defined first (lesson enables measurable outcomes)
- Specification-First: Every section shows intent before AI interaction
- AI Partnership: Prompts guide thinking, not syntax memorization
- Validation-First: Checkpoints test understanding, not code execution

**Output Style**:
- YAML Frontmatter: Required (skills, CEFR, Bloom's, cognitive load)
- Lesson Structure: Content sections + final "Try With AI" (NO "Key Takeaways")
- Metadata: spec, plan, tasks references + generation date
- Readability: Grade 7-8 level for absolute beginners

**Scope Boundaries**:
- ✅ Introduction, installation, input/output, AI partnership, spec-first thinking
- ❌ Variables, data types, functions, classes, exception handling, async/await

**Code Examples**:
- All 3-5 lines max (cognitive load management)
- All tested on Python 3.13+
- All include "What it does → Code → Try it → Why it matters" pattern
- All embedd in lessons (NO separate code-examples directory)
