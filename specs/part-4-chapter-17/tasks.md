# Chapter 17: Control Flow and Loops — Task Checklist

**Chapter Number**: 17
**Chapter Title**: Control Flow and Loops
**Part**: 4 (Python Fundamentals - Early)
**Chapter Type**: Technical/Code-Focused
**Complexity Tier**: Beginner (A1-A2 CEFR)
**Status**: Ready for Development
**Feature Branch**: `017-ch17-controlflow-loops`
**Owner**: To be assigned
**Estimated Effort**: 14-16 hours (story points: 13-21)

---

## Task Dependency Map

```
Phase 1: Structure & Foundation
├── Chapter README
└── Lesson Outlines (1-7)

Phase 2: Content Creation
├── Lesson 1: Understanding Decisions
├── Lesson 2: If and Else
├── Lesson 3: Multiple Choices with Elif
├── Lesson 4: Nesting Conditions
├── Lesson 5: For Loops Basics
├── Lesson 6: While Loops
└── Lesson 7: Controlling Loops

Phase 3: Practice & Assessment Elements
├── Exercises for each lesson (2-5 per lesson)
├── Assessment items (quizzes, code challenges)
└── "Try With AI" closures (4 prompts per lesson)

Phase 4: Review & Integration
├── Peer review (pedagogical clarity)
├── Technical validation (code quality, standards)
├── Accessibility check (reading level, inclusive language)
└── Cross-chapter coherence check

Phase 5: Publishing Preparation
└── Final editorial polish
```

---

## Task List by Phase

### Phase 1: Content Structure & Core Elements

#### Subtask 1.1: Create Chapter README.md

- [ ] **MUST**: Write chapter overview and learning outcomes
  - **Acceptance**:
    - README.md exists at `/Users/mjs/Documents/code/panaversity-official/tutorgpt-build/ai-native-software-development/book-source/docs/04-Part-4-Python-Fundamentals-Early/17-control-flow-loops/readme.md` (uppercase README)
    - Follows `.claude/output-styles/chapters.md` structure
    - Section headings use descriptive titles (never "Lesson N")
    - Includes: Chapter title (H1), introduction (2-3 paragraphs), "What You'll Learn" section (bulleted learning objectives)
    - Reading level: Grade 8-9
    - Tone: Conversational, welcoming, "you" language
  - **Reference**: `.claude/output-styles/chapters.md` Section 1 (Chapter overview structure)
  - **Effort**: 1-2 hours

#### Subtask 1.2: Outline All 7 Lessons

- [ ] **MUST**: Create outline for Lesson 1: Understanding Decisions
  - **Acceptance**:
    - Document in plan or separate file lists: content sections, key concepts (3), learning objectives, code examples (2), AI integration points
    - Matches lesson plan `specs/part-4-chapter-17/plan.md` Section Lesson 1
    - Specifies which CoLearning elements (💬🎓🚀✨) appear where
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 1
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 2: If and Else
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 2
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 3: Multiple Choices with Elif
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 3
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 4: Nesting Conditions
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 4
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 5: For Loops Basics
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 5
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 6: While Loops
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 6
  - **Effort**: 30 min

- [ ] **MUST**: Create outline for Lesson 7: Controlling Loops
  - **Acceptance**: Same as Lesson 1
  - **Reference**: `specs/part-4-chapter-17/plan.md` Lesson 7
  - **Effort**: 30 min

---

### Phase 2: Lesson Implementation (7 Lessons)

#### Lesson 1: Understanding Decisions

- [ ] **MUST**: Write Lesson 1 full content
  - **Acceptance**:
    - File: `lesson-1-understanding-decisions.md`
    - YAML frontmatter with skills metadata (CEFR A1, Bloom's "Remember/Understand", cognitive load: 3 concepts)
    - H1 title, opening hook (15-20 min section)
    - Four content sections (~20 min each): Decisions Everywhere, True/False, Operators, Total ~80 min
    - Includes 2 runnable code examples (A1-A2 complexity)
    - Reading level: Grade 8 (clear, simple language, define terms)
    - Conversational tone ("you", "your AI helps")
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 1
  - **Effort**: 2-3 hours

- [ ] **MUST**: Design "Try With AI" activity for Lesson 1
  - **Acceptance**:
    - 4 copyable prompts (Recall → Apply → Analyze → Synthesize)
    - Named AI tool (ChatGPT for beginners pre-tool setup)
    - Expected outcomes for each prompt
    - No "Key Takeaways" or "What's Next" after this section
    - Brief safety/ethics note if applicable
  - **Reference**: `.claude/output-styles/lesson.md` "AI-First Closure Policy"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 1 (optional)
  - **Acceptance**: 2-3 exercises reinforcing True/False and comparison operators
  - **Effort**: 1 hour

#### Lesson 2: If and Else

- [ ] **MUST**: Write Lesson 2 full content
  - **Acceptance**:
    - File: `lesson-2-if-and-else.md`
    - YAML frontmatter with skills metadata (CEFR A1-A2, Bloom's "Understand/Apply", cognitive load: 5 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): If Statements, Else Statements, Indentation Matters, Tracing If/Else
    - Includes 3 runnable code examples (A1-A2 complexity)
    - CoLearning elements: 💬 prompt after foundational concepts, 🎓 commentary on indentation, 🚀 challenge (write if/else from spec), ✨ tip (debugging indentation)
    - Reading level: Grade 8-9
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 2
  - **Effort**: 3-4 hours

- [ ] **MUST**: Code examples for Lesson 2 (write, test, validate)
  - **Acceptance**:
    - All 3 examples runnable in Python 3.10+
    - Include type hints on all variables
    - Pass tests: predict output before running, then verify
    - Include comments explaining each part
    - Test at least 2-3 input variations per example
  - **Effort**: 1-2 hours

- [ ] **MUST**: Design "Try With AI" activity for Lesson 2
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 2
  - **Acceptance**: 2-5 exercises (trace code, predict output, write if/else)
  - **Effort**: 1-2 hours

#### Lesson 3: Multiple Choices with Elif

- [ ] **MUST**: Write Lesson 3 full content
  - **Acceptance**:
    - File: `lesson-3-multiple-choices-with-elif.md`
    - YAML frontmatter with skills metadata (CEFR A2, Bloom's "Apply", cognitive load: 5 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): Elif Syntax, Order Matters, Reading Elif Chains, Common Mistakes
    - Includes 3 runnable code examples (A2 complexity)
    - CoLearning elements: 💬 prompt on condition ordering, 🎓 commentary on "Syntax cheap, semantics gold", 🚀 challenge (create elif chain from spec), ✨ tip (debugging order mistakes)
    - Reading level: Grade 8-9
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 3
  - **Effort**: 3-4 hours

- [ ] **MUST**: Code examples for Lesson 3 (write, test, validate)
  - **Acceptance**:
    - All 3 examples runnable
    - Include type hints
    - Test boundary values (e.g., score=70, 80, 90 for grading)
    - Include comments
    - Pass 80%+ test coverage
  - **Effort**: 1-2 hours

- [ ] **MUST**: Design "Try With AI" activity for Lesson 3
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 3
  - **Acceptance**: 2-5 exercises (read elif chains, trace, predict output, write from spec)
  - **Effort**: 1-2 hours

#### Lesson 4: Nesting Conditions

- [ ] **MUST**: Write Lesson 4 full content
  - **Acceptance**:
    - File: `lesson-4-nesting-conditions.md`
    - YAML frontmatter with skills metadata (CEFR A2, Bloom's "Apply", cognitive load: 4 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): What is Nesting?, When to Nest, Indentation in Nesting, AI Helps with Complexity
    - Includes 2 runnable code examples (A2 complexity, one-level nesting only)
    - CoLearning elements: 💬 prompt on nesting benefit, 🎓 commentary on readability, 🚀 challenge (compare nesting vs AND), ✨ tip (trace nested blocks)
    - Reading level: Grade 8-9
    - **CRITICAL**: Emphasize that complex nesting (2+ levels) should use AI; teach students when to ask for help
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 4
  - **Effort**: 3 hours

- [ ] **MUST**: Code examples for Lesson 4 (write, test, validate)
  - **Acceptance**:
    - 2 runnable examples (one-level nesting only)
    - Include type hints
    - Test with different input values
    - Include comments explaining indentation
  - **Effort**: 1 hour

- [ ] **MUST**: Design "Try With AI" activity for Lesson 4
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 4
  - **Acceptance**: 2-3 exercises (trace nested code, predict output, simple nesting tasks)
  - **Effort**: 1 hour

#### Lesson 5: For Loops Basics

- [ ] **MUST**: Write Lesson 5 full content
  - **Acceptance**:
    - File: `lesson-5-for-loops-basics.md`
    - YAML frontmatter with skills metadata (CEFR A2, Bloom's "Apply", cognitive load: 5 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): What is a Loop?, For Loop Syntax, Range() Explained, Tracing Loops
    - Includes 3 runnable code examples (A2 complexity)
    - CoLearning elements: 💬 prompt on range() internals, 🎓 commentary on understanding intent vs syntax, 🚀 challenge (write loop from spec), ✨ tip (explore range() with AI)
    - Reading level: Grade 8-9
    - Heavy emphasis on tracing loops mentally
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 5
  - **Effort**: 3-4 hours

- [ ] **MUST**: Code examples for Lesson 5 (write, test, validate)
  - **Acceptance**:
    - All 3 examples runnable
    - Include type hints
    - Test range() variations: range(n), range(start, end), range(start, end, step)
    - Include off-by-one error examples (what NOT to do)
    - Pass 80%+ test coverage
  - **Effort**: 1-2 hours

- [ ] **MUST**: Design "Try With AI" activity for Lesson 5
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 5
  - **Acceptance**: 2-5 exercises (predict range() output, trace loops, modify loops)
  - **Effort**: 1-2 hours

#### Lesson 6: While Loops

- [ ] **MUST**: Write Lesson 6 full content
  - **Acceptance**:
    - File: `lesson-6-while-loops.md`
    - YAML frontmatter with skills metadata (CEFR A2-B1, Bloom's "Apply", cognitive load: 5 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): While Loop Syntax, When to Use While, INFINITE LOOP DANGER (emphasized), AI Helps Prevent Infinite Loops
    - Includes 3 runnable code examples (A2-B1 complexity)
    - CoLearning elements: 💬 prompt on iteration unknowns, 🎓 commentary on for vs while thinking, 🚀 challenge (write while loop from spec), ✨ tip (ask AI to check for infinite loops)
    - Reading level: Grade 8-9
    - **CRITICAL**: Heavy emphasis on infinite loop prevention and how to ask AI for verification
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 6
  - **Effort**: 3-4 hours

- [ ] **MUST**: Code examples for Lesson 6 (write, test, validate)
  - **Acceptance**:
    - All 3 examples runnable
    - Include type hints
    - Include BOTH safe and infinite loop examples (with warnings)
    - Show how to prevent infinite loops
    - Pass 80%+ test coverage
  - **Effort**: 1-2 hours

- [ ] **MUST**: Design "Try With AI" activity for Lesson 6
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 6
  - **Acceptance**: 2-5 exercises (identify infinite loops, fix while conditions, predict while behavior)
  - **Effort**: 1-2 hours

#### Lesson 7: Controlling Loops

- [ ] **MUST**: Write Lesson 7 full content
  - **Acceptance**:
    - File: `lesson-7-controlling-loops.md`
    - YAML frontmatter with skills metadata (CEFR A2, Bloom's "Apply", cognitive load: 4 concepts)
    - H1 title, opening hook
    - Four content sections (~20 min each): Break Statement, Continue Statement, Break vs Continue, AI Helps Choose
    - Includes 3 runnable code examples (A2 complexity)
    - CoLearning elements: 💬 prompt on break vs continue decision, 🎓 commentary on loop control intent, 🚀 challenge (use break/continue in loop), ✨ tip (ask AI to choose)
    - Reading level: Grade 8-9
  - **Reference**: `.claude/output-styles/lesson.md`, `specs/part-4-chapter-17/plan.md` Lesson 7
  - **Effort**: 3 hours

- [ ] **MUST**: Code examples for Lesson 7 (write, test, validate)
  - **Acceptance**:
    - All 3 examples runnable
    - Include type hints
    - Show break, continue, and both together
    - Pass 80%+ test coverage
  - **Effort**: 1 hour

- [ ] **MUST**: Design "Try With AI" activity for Lesson 7
  - **Acceptance**: 4 prompts, named tool, expected outcomes, no "Key Takeaways"
  - **Effort**: 45 min - 1 hour

- [ ] **SHOULD**: Add practice exercises for Lesson 7
  - **Acceptance**: 2-3 exercises (trace break/continue, predict output, write loops with control flow)
  - **Effort**: 1 hour

---

### Phase 3: Practice & Validation Elements

#### Subtask 3.1: Assessments & Quizzes

- [ ] **MUST**: Design assessment items covering all learning objectives
  - **Acceptance**:
    - Items test CEFR levels A1-A2 (recognition, understanding, simple application)
    - Multiple question types: multiple choice (recognition), short answer (understanding), code prediction (application)
    - Answers provided with explanations
    - Questions aligned with evals from spec (EVAL-001 through EVAL-010)
  - **Coverage**: At least 3-4 assessment items per lesson (20-30 items total)
  - **Reference**: `specs/part-4-chapter-17/spec.md` Success Evals section
  - **Effort**: 3-4 hours

#### Subtask 3.2: Finalize "Try With AI" Sections

- [ ] **MUST**: All lessons have valid "Try With AI" section as ONLY closure
  - **Acceptance**:
    - Each lesson ends with single "Try With AI" section (no "Key Takeaways", "What's Next", etc.)
    - 4 copyable prompts per lesson (Recall → Apply → Analyze → Synthesize)
    - Named AI tool (ChatGPT web for beginner context)
    - Expected outcomes concise and clear
    - Optional safety/ethics note
  - **Reference**: `.claude/output-styles/lesson.md` "AI-First Closure Policy"
  - **Effort**: 45 min - 1 hour (review all 7 lessons)

---

### Phase 4: Review & Integration

#### Subtask 4.1: Pedagogical Review

- [ ] **SHOULD**: Peer review for pedagogical clarity
  - **Acceptance**:
    - Reviewer confirms: learning objectives met, scaffolding appropriate, examples clear
    - Reviewer validates: max 5 concepts per lesson, A1-A2 CEFR levels appropriate
    - Reviewer checks: CoLearning elements (💬🎓🚀✨) integrated throughout
    - Feedback document created with specific comments per lesson
  - **Effort**: 2-3 hours

#### Subtask 4.2: Technical Code Review

- [ ] **MUST**: Code examples pass technical standards
  - **Acceptance**:
    - All code runs without errors (Python 3.10+)
    - Type hints on ALL variables and function parameters
    - F-strings for output (no .format() or concatenation)
    - No hardcoded secrets, no eval()/exec()
    - 80%+ test coverage with inputs
    - Code follows PEP 8 style guidelines
    - Comments explain intent, not syntax
  - **Reference**: `.specify/memory/constitution.md` Code Standards
  - **Effort**: 2-3 hours

#### Subtask 4.3: Accessibility & Inclusivity Check

- [ ] **MUST**: Content meets accessibility requirements
  - **Acceptance**:
    - Reading level Grade 8-9 (Flesch-Kincaid verified)
    - Clear language (avoid jargon; define technical terms on first use)
    - Examples are diverse and inclusive (multiple names, contexts, scenarios)
    - No gatekeeping language ("obviously", assumptions of prior knowledge)
    - Code examples have clear variable names (not single letters in explanations)
    - Content doesn't assume specific background or identity
  - **Effort**: 1-2 hours

#### Subtask 4.4: Cross-Chapter Coherence Check

- [ ] **SHOULD**: Verify integration with prior/subsequent chapters
  - **Acceptance**:
    - All prerequisites from Ch 13-16 are referenced (comparison operators, variables, f-strings)
    - No forward references to Ch 18+ (no lists, no comprehensions, no functions)
    - Clear prerequisite statements: "You'll need comparison operators from Chapter 15"
    - Links to next chapter setup: "Chapter 18 uses loops to process lists"
  - **Reference**: `specs/part-4-chapter-17/plan.md` Integration Points section
  - **Effort**: 1 hour

---

### Phase 5: Publishing Preparation

#### Subtask 5.1: Final Editorial Polish

- [ ] **SHOULD**: Final editorial review for publication quality
  - **Acceptance**:
    - Grammar, spelling, punctuation checked
    - Consistency: formatting, tone, terminology
    - Visual flow: headings logical, examples well-placed, white space appropriate
    - All links working (internal chapter references)
    - YAML frontmatter valid and complete
  - **Effort**: 1-2 hours

#### Subtask 5.2: Build Validation

- [ ] **SHOULD**: Test chapter builds correctly in Docusaurus
  - **Acceptance**:
    - `docusaurus build` succeeds with no errors
    - All markdown renders correctly (tables, code blocks, formatting)
    - Images (if any) load correctly
    - Navigation links work
  - **Effort**: 30 min

---

## Acceptance Criteria (Definition of Done)

### ALL CHAPTERS Must Pass:

- [ ] All MUST-HAVE tasks completed (Subtasks 1.1-1.2, 2.1-2.7 content + exercises + closures, 3.1-3.2, 4.1-4.4)
- [ ] Learning objectives are measurable using Bloom's taxonomy (Remember, Understand, Apply)
- [ ] CEFR proficiency levels assigned: A1 for Lesson 1; A1-A2 for Lessons 2-7
- [ ] Skills metadata in YAML frontmatter (for institutional integration)
- [ ] Cognitive load validated: Max 5 concepts per lesson for A1-A2
- [ ] Chapter integrates with Part 4 context (Chapters 13-16 prerequisites clear)
- [ ] Accessibility: Grade 8-9 reading level, clear language, inclusive examples
- [ ] No advanced patterns included (NO match/case, NO loop+else, NO 2+ level nesting, NO comprehensions)
- [ ] Beginner tier characteristics: Max 2 conceptual choices (if vs elif, for vs while); heavy scaffolding; AI partnership evident

### CODE EXAMPLES Must Pass:

- [ ] All code examples runnable (Python 3.10+)
- [ ] Type hints on all variables and functions
- [ ] Examples tested: 80%+ coverage with multiple input values
- [ ] F-strings used for output (no .format() or concatenation)
- [ ] No security issues (no hardcoded secrets, no eval())
- [ ] Comments explain intent, not syntax
- [ ] Include "off-by-one" and "infinite loop" warnings where applicable
- [ ] Boundary values tested (e.g., range(5) gives 0-4, not 1-5)

### LESSONS Must Pass:

- [ ] 7 lessons total (4 conditional, 3 loop lessons) as specified
- [ ] Each lesson has single H1 title
- [ ] Content sections clear and progressively build concepts
- [ ] CoLearning elements present: 💬 prompt, 🎓 commentary, 🚀 challenge, ✨ tip
- [ ] Each lesson ends with ONLY "Try With AI" section (no "Key Takeaways" or "What's Next")
- [ ] "Try With AI" has 4 prompts (Recall, Apply, Analyze, Synthesize) + tool name + expected outcomes
- [ ] Conversational tone throughout ("you", "your", "your AI helps you")
- [ ] No lesson summary sections separate from "Try With AI"

### EVALS & ACCEPTANCE CRITERIA Met:

- [ ] EVAL-001 (75%+ readers understand if/elif/else): Content teaches these clearly
- [ ] EVAL-002 (80%+ predict loop behavior): Many trace exercises
- [ ] EVAL-003 (70%+ identify infinite loops): Lesson 6 emphasizes detection
- [ ] EVAL-004 (75%+ write conditional from spec): Lessons 2-4 include spec-driven exercises
- [ ] EVAL-005 (70%+ implement loops with break/continue): Lessons 5-7 include applications
- [ ] EVAL-007 (Grade 8-9 reading level): Verified via Flesch-Kincaid check
- [ ] EVAL-008 (Type hints + clear names): All code examples audited
- [ ] EVAL-009 (70%+ completion rate): Design supports engagement (many examples, practice)
- [ ] EVAL-010 (80%+ "Try With AI" attempts): 4 prompts per lesson, clear expected outcomes

---

## Task Priority Matrix

| Priority | Category | Task | Effort |
|----------|----------|------|--------|
| CRITICAL | Phase 1 | Chapter README | 1-2h |
| CRITICAL | Phase 2 | Lesson 1-7 full content | 21-28h |
| CRITICAL | Phase 2 | Code examples (all) | 7-9h |
| CRITICAL | Phase 2 | Try With AI sections | 5-7h |
| HIGH | Phase 2 | Lesson exercises | 7-9h |
| HIGH | Phase 3 | Assessments | 3-4h |
| HIGH | Phase 4 | Technical code review | 2-3h |
| HIGH | Phase 4 | Accessibility check | 1-2h |
| MEDIUM | Phase 4 | Pedagogical review | 2-3h |
| MEDIUM | Phase 4 | Cross-chapter coherence | 1h |
| LOW | Phase 5 | Final editorial polish | 1-2h |
| LOW | Phase 5 | Build validation | 30m |

**Total Critical + High Path**: ~40-45 hours (actual effort; plan shows 14-16 hours because "Chapter README + lesson outlines" is planning work, not implementation)

---

## Follow-Ups & Risks

### Risk 1: Off-by-One Errors in Range()
**Blocker**: Students struggle to understand why `range(5)` gives 0-4, not 1-5
**Mitigation**:
- [ ] Heavy practice in Lesson 5 with multiple range() variations
- [ ] Explicit "common mistakes" section in lesson
- [ ] Trace exercises predict range() output before running code
- [ ] AI tip: "Use Claude Code to explore: What does range(10, 1, -1) produce?"
**Owner**: Lesson-writer; Technical reviewer validates coverage

### Risk 2: Infinite Loops Cause Frustration
**Blocker**: Student's while loop hangs; they don't understand why
**Mitigation**:
- [ ] Lesson 6 explicitly teaches infinite loop prevention
- [ ] Show cause-and-effect: "If X never changes, condition never becomes False"
- [ ] Practice task: "Identify infinite loops and fix them"
- [ ] Teaching tip: "Ask AI: Will this while condition eventually become False?"
**Owner**: Lesson-writer; emphasize in Lesson 6

### Risk 3: Nesting Complexity Overwhelms
**Blocker**: Students confused by 2+ level nesting; indentation errors
**Mitigation**:
- [ ] Lesson 4 keeps to ONE level of nesting only
- [ ] Explicitly teach when to ask AI (complex nesting → let AI suggest)
- [ ] Indentation errors are expected; show fixing process
**Owner**: Lesson-writer; emphasize "when to ask AI for help"

### Risk 4: Confusing For vs While
**Blocker**: Students use for when while is better, or vice versa
**Mitigation**:
- [ ] Lesson 6 includes clear comparison table
- [ ] Decision framework: "Do you know the count? Yes → for; No → while"
- [ ] Multiple examples of each
**Owner**: Lesson-writer; Lesson 6 critical

### Risk 5: Forgetting Indentation Causes Errors
**Blocker**: Python IndentationError in every lesson
**Mitigation**:
- [ ] Every lesson emphasizes indentation (4 spaces)
- [ ] Show wrong vs correct in side-by-side code blocks
- [ ] Practice debugging indentation errors
- [ ] Teaching tip: IDE highlights indentation; use it
**Owner**: Lesson-writer; all lessons

---

## Next Steps (After Tasks Complete)

1. **Quality Assurance**: Run all acceptance criteria checks
2. **Technical Review**: Invoke technical-reviewer subagent
3. **Peer Review**: Have instructor review pedagogical flow
4. **Accessibility Audit**: Check reading level and inclusive language
5. **Build Test**: Run `docusaurus build` to verify rendering
6. **Publication**: Merge to main, deploy to book site

---

## Implementation Notes for Lesson-Writer

### Critical Constraints (Non-Negotiable)

1. **Beginner Tier Strictly**:
   - Max 5 concepts per lesson (Principle 12)
   - Heavy scaffolding (many examples, predict-then-run)
   - Conversational tone ("you", "your AI")

2. **No Advanced Patterns**:
   - NO match/case (defer to Ch 24-25)
   - NO loop+else (confusing for beginners)
   - NO nested loops 2+ levels (defer to Ch 18-19 with data structures)
   - NO list comprehensions (Ch 18-19)
   - NO functions (Ch 20)
   - NO exception handling (Ch 21)

3. **CoLearning Throughout**:
   - 💬 AI Colearning Prompt: After foundational concepts, encourage exploration
   - 🎓 Instructor Commentary: "Syntax cheap, semantics gold" theme
   - 🚀 CoLearning Challenge: Specification-driven exercises (spec → AI generates → you validate)
   - ✨ Teaching Tip: AI tool literacy (how to ask AI specific questions)

4. **Try With AI Only**:
   - Each lesson ends with ONLY "Try With AI" section
   - 4 prompts per lesson: Recall → Apply → Analyze → Synthesize
   - No "Key Takeaways" or "What's Next" sections
   - Named tool (ChatGPT web for beginners)

5. **Type Hints Everywhere**:
   - All variables: `age: int`, `name: str`
   - All functions: `def check(age: int) -> bool:`
   - All lists: `numbers: list[int]`

6. **F-Strings Only**:
   - Use: `print(f"Value: {x}")`
   - NOT: `print("Value: " + str(x))` or `print("Value: {}".format(x))`

7. **YAML Frontmatter**:
   - Include at top of every lesson file
   - Skills section with CEFR level + Bloom's level
   - Learning objectives with proficiency levels
   - Cognitive load section (count new concepts)
   - Differentiation (remedial + extension guidance)
   - Generation metadata (not visible to students)

---

**Tasks Status**: Ready for Assignment
**Estimated Total Effort**: 40-45 hours (critical path)
**Quality Gate**: All MUST-HAVE tasks + high-priority review = DoD met

