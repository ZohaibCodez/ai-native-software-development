# Chapter 13 Specification: Introduction to Modern Python

**Feature Branch**: `013-introduction-to-python`
**Created**: 2025-11-08
**Status**: Ready for Planning
**Target Audience**: Dual-path (absolute beginners + professionals transitioning to AI-native development)
**Complexity Tier**: BEGINNER (A1-A2) with A2-B1 extension paths

---

## Overview & Context

Chapter 13 is the gateway to Python for learners who have completed Chapters 1-12 (AIDD fundamentals, tools, markdown, prompting, and context engineering). This chapter teaches Python introduction fundamentals and the foundation for your first program.

**Key Design Philosophy**: Students don't memorize syntax. They **understand concepts first**, then use **Claude Code or Gemini CLI as their thinking partner** to explore code, ask questions, and build with confidence. This chapter reinforces specification-first thinking from Chapter 4.

**Prerequisites**:
- Chapter 4: The Nine Pillars of AIDD (understand specification-first, validation-first, AI partnership)
- Chapter 5: Claude Code features and workflows
- Chapter 6: Gemini CLI basics
- Chapter 10: Prompt Engineering (to ask AI good questions about code)

---

## Success Evals (Business-Goal Aligned)

These evals measure whether students achieve the chapter's outcomes:

1. **Installation & Environment Success**: 80%+ students successfully run `python --version` in terminal and confirm Python 3.13+ is installed
2. **First Program Success**: 80%+ students create and run their first interactive program (asks for name, prints personalized greeting)
3. **AI Partnership Demonstrated**: 75%+ students articulate in reflection: "I used Claude Code/Gemini to understand what this code does before modifying it"
4. **Specification-First Practice**: 70%+ students write a specification (plain language intent) BEFORE asking AI to generate code
5. **Concept Understanding**: 75%+ students can explain (in their own words) why Python is relevant for AI-native development

---

## User Scenarios & Testing

### User Story 1 - Absolute Beginner Learns Why Python Matters (Priority: P1)

A student with zero coding experience wants to understand what Python is, why it exists, and why it matters for AI-driven development.

**Why this priority**: Without understanding relevance, beginners lose motivation. This is the hook that connects Python to the larger AIDD mission learned in Chapters 1-11.

**Independent Test**: Student can explain (in 2-3 sentences) what Python is and why AI-native developers use it.

**Acceptance Scenarios**:

1. **Given** a beginner with no coding experience, **When** they read Lesson 1 (What is Python?), **Then** they can articulate that Python is readable code used in AI, data science, and automation.
2. **Given** the same beginner, **When** they explore the "Python in Agentic AI" section, **Then** they understand Python's role in building autonomous agents.

---

### User Story 2 - Beginner Installs Python & Sets Up Development Environment (Priority: P1)

A student wants to install Python on their laptop and verify it's working so they can write their first program.

**Why this priority**: Cannot proceed without working environment. This is a blocking dependency for all lessons that follow.

**Independent Test**: Student runs `python --version` and confirms 3.13+ is installed on their system.

**Acceptance Scenarios**:

1. **Given** a beginner without Python installed, **When** they follow the installation guide, **Then** Python 3.13+ is successfully installed on their system (Windows/macOS/Linux).
2. **Given** Python is installed, **When** they open a terminal and type `python --version`, **Then** the terminal confirms Python 3.13+ is available.

---

### User Story 3 - Beginner Writes & Runs Their First Program (Priority: P1)

A student wants to write their first Python program: an interactive script that asks for their name and prints a personalized greeting.

**Why this priority**: This is the core outcome. Writing and running code builds confidence and proves capability.

**Independent Test**: Student successfully creates and executes a Python script that produces expected output (greeting with their name).

**Acceptance Scenarios**:

1. **Given** a working Python environment, **When** they follow Lesson 3 (Your First Program), **Then** they create a `.py` file with code that runs without errors.
2. **Given** the program is created, **When** they run it and enter their name, **Then** the program prints a message like "Hello, Alice! Welcome to Python."

---

### User Story 4 - Professional Understands AI-First Approach to Python Learning (Priority: P2)

A software engineer transitioning to AI-native development wants to understand how specification-first and AI partnership accelerate Python learning compared to traditional syntax-memorization approaches.

**Why this priority**: Professionals need to see the value of AIDD methodology applied to language learning. This reframes their learning mindset.

**Independent Test**: Professional can articulate at least 2 ways that AI partnership changes how they approach learning Python.

**Acceptance Scenarios**:

1. **Given** a professional completes Lesson 4 (AI Partnership Pattern), **When** they write a specification before asking AI to generate code, **Then** they notice it's faster and clearer than typing code manually.
2. **Given** the same professional, **When** they ask Claude Code "Why does this code work?" instead of trying to memorize syntax, **Then** they understand the code's reasoning better than they would from documentation.

---

### User Story 5 - Dual-Path Students Choose Their Learning Path (Priority: P2)

Students want to know whether to follow the "Beginner" path (foundational concepts only) or the "Professional" path (includes AIDD methodology and agent-thinking connections).

**Why this priority**: Personalizes the learning experience. Prevents cognitive overload for true beginners while providing depth for professionals.

**Independent Test**: Student can identify which path fits them and understand what they'll learn in each path.

**Acceptance Scenarios**:

1. **Given** a student reads the chapter intro, **When** they see the dual-path explanation, **Then** they can clearly choose between Beginner and Professional paths based on their background.

---

### Edge Cases

- What happens if a student's Python version is 3.12 or older? (Offer upgrade path, show why 3.13 matters)
- What if a student's terminal doesn't recognize `python` command? (Troubleshooting for PATH issues, platform-specific guidance)
- What if a student tries to extend the greeting program with syntax from Chapter 14+? (Gently guide back to scope, foreshadow future lessons)

---

## Requirements

### Functional Requirements (What Students Will Learn)

- **FR-001**: Students MUST understand what Python is: a high-level, readable, interpreted language
- **FR-002**: Students MUST understand why Python matters for AI-native development: agents, data science, automation
- **FR-003**: Students MUST successfully install Python 3.13+ on their system (Windows, macOS, or Linux)
- **FR-004**: Students MUST verify their Python installation by running `python --version` in a terminal
- **FR-005**: Students MUST write their first Python program that accepts user input and produces output
- **FR-006**: Students MUST be able to run their first program and see correct output
- **FR-007**: Students MUST understand the "Think with Your AI" pattern: asking questions, not memorizing syntax
- **FR-008**: Students MUST understand how specification-first thinking (from Chapter 4) applies to writing code
- **FR-009**: [Professional path only] Students MUST articulate how AI partnership accelerates learning compared to traditional memorization
- **FR-010**: [Professional path only] Students MUST understand how basic Python concepts relate to agent thinking

### What This Chapter Does NOT Cover (Scope Boundaries)

- ❌ Data types (Chapter 14 topic)
- ❌ Variables and naming (Chapter 15 topic)
- ❌ Operators and keywords (Chapter 15 topic)
- ❌ Functions and modules (Chapter 20 topic)
- ❌ Classes and objects (Chapter 24 topic)
- ❌ Exception handling (Chapter 21 topic)
- ❌ Advanced Python concepts (async, metaclasses, etc. - Parts 5-14 topics)
- ❌ Type hints (Chapter 15 topic)

### Key Concepts (Max 5 - AIDD Principle #12)

1. **What is Python**: Definition, characteristics (readable, interpreted, versatile), and context in programming landscape
2. **Why Python for AIDD**: Connection to AI, agents, agentic workflows, and the book's mission
3. **Installation & Environment**: Setting up Python 3.13+, verifying installation, understanding where code runs
4. **First Program Foundation**: Basic code pattern (input → process → output), running code, seeing results
5. **AI Partnership Pattern**: Using Claude Code/Gemini to ask questions, not memorize syntax; specification-first approach

### Cognitive Load Validation

- **Total new concepts**: 5 (matches AIDD Principle #12 for beginners)
- **Concepts per lesson**: Max 2 per lesson to prevent overwhelm
- **Practical exercises**: 1 per lesson (hands-on, not theory-heavy)
- **AI interactions**: 3-4 "Think with Your AI" prompts per lesson for concept exploration

---

## Learning Objectives (Aligned with Success Evals)

By the end of Chapter 13, students will be able to:

1. **Explain** what Python is and why it matters for AI-native development (connects to AIDD mission from Chapter 4)
2. **Install** Python 3.13+ on their system and verify it works
3. **Write and execute** their first Python program (interactive greeting script)
4. **Use** Claude Code or Gemini CLI to understand code instead of memorizing syntax
5. **Apply** specification-first thinking (from Chapter 4) to coding: clarify intent before writing code

---

## Content Outline & Lesson Breakdown

### Lesson 1: What is Python and Why AIDD Needs It (45 min)

**Concepts Introduced**: What is Python, Why Python for AI, Connection to Agentic AI

**Structure**:
- What it is: Plain-language explanation of Python (high-level, readable, interpreted)
- Why it matters: Connection to AI agents, agentic workflows, the book's mission
- Code idea: Show minimal example of what Python code looks like (visual only, no execution yet)
- Think with your AI: 3 questions to explore with Claude Code
- Why it matters for thinking: How Python's readability connects to clear reasoning

**Learning Path**:
- **Beginner path**: Focus on what Python is, why we use it, visual code examples
- **Professional path**: Add connection to agent thinking, how Python enables agentic systems, why readability matters for reasoning

---

### Lesson 2: Installing Python & Setting Up Your Environment (30 min)

**Concepts Introduced**: Installation, terminal/command line basics, environment setup, verification

**Structure**:
- What it is: What Python installation means, where it lives on your computer
- Code idea: Show what `python --version` output looks like
- Think with your AI: Use Claude Code to understand installation steps, troubleshoot issues
- Why it matters: Your environment is the foundation; nothing works without it

**Learning Path**:
- **Beginner path**: Step-by-step installation guide for Windows/macOS/Linux
- **Professional path**: Explain virtual environments (mention, don't go deep), understand why 3.13 matters

---

### Lesson 3: Your First Program (45 min)

**Concepts Introduced**: Running code, input/output, basic program structure, syntax (minimal)

**Structure**:
- What it is: A program is instructions that Python follows
- Code idea: Complete first program (asks for name, prints greeting)
- Try it: Students type the code and run it
- Think with your AI: Ask Claude Code questions like "Why does this line do that?", "What would happen if we changed X?"
- Why it matters: You've written code that runs; that's the foundation of everything

**Learning Path**:
- **Beginner path**: Simple version with basic print and input
- **Professional path**: Show how to specify intent first, then ask AI to generate the code

---

### Lesson 4: Thinking Like an AI-First Developer (30 min) [Extension for Professional Path]

**Concepts Introduced**: Specification-first approach, AI partnership, code as communication

**Structure**:
- What it is: How specification-first thinking (Chapter 4) applies to writing code
- Code idea: Compare "typing code" vs. "specifying intent then using AI"
- Think with your AI: Practice the pattern: write spec → ask AI → validate → ask questions
- Why it matters: This is how modern developers work; syntax is cheap, reasoning is gold

**Learning Path**:
- **Professional path only**: Deep dive into specification-first coding; beginner path references without depth

---

## Code Examples (3-5 Total)

All examples follow the pattern: **What it does → Code → Try it → Think with your AI → Why it matters**

### Example 1: Print a Simple Message

**What it does**: Outputs text to the screen

```python
print("Hello, World!")
```

**Try it**: Run this in a Python terminal or `.py` file

**Think with your AI**:
- "What does `print()` do?"
- "What happens if we change the text inside the quotes?"
- "What if we use single quotes instead of double quotes?"

**Why it matters**: This is the simplest form of Python code; it shows that Python is readable.

---

### Example 2: Get Input from the User

**What it does**: Asks the user a question and waits for their response

```python
name = input("What is your name? ")
```

**Try it**: Run this in a terminal; type your name when prompted

**Think with your AI**:
- "What does `input()` do and how is it different from `print()`?"
- "Why does the text in quotes appear on the screen?"
- "What happens to what the user types?"

**Why it matters**: Real programs interact with users. This shows how.

---

### Example 3: Your First Complete Program

**What it does**: Asks for your name, then greets you personally

```python
name = input("What is your name? ")
print("Hello, " + name + "! Welcome to Python.")
```

**Try it**: Run this; type your name when asked; see the personalized greeting

**Think with your AI**:
- "How does this program work step-by-step?"
- "What does the `+` symbol do here?" (hint: not math)
- "What would happen if we removed one of the `+` symbols?"
- "How could we change the greeting?"

**Why it matters**: This is your first real program. It shows input → processing → output.

---

### Example 4: Exploring with AI (Professional Path)

**What it does**: Shows how to write a specification BEFORE coding

**Specification** (plain language intent):
```
I want a program that:
1. Greets the user
2. Asks them a personal question (their favorite color)
3. Responds with a message that includes their answer
```

**AI Prompt**:
```
Write a Python program that greets the user, asks for their favorite color,
and responds with a message that includes their answer.
```

**Generated Code** (what Claude Code might produce):
```python
print("Hello! Let me learn more about you.")
color = input("What is your favorite color? ")
print("Wow, " + color + " is a great choice!")
```

**Think with your AI**:
- "Why did we write the specification first?"
- "How does writing intent in plain language make it easier to get what we want from AI?"
- "What parts of the code match our specification?"

**Why it matters**: This is the professional pattern: specify intent → use AI → validate against spec.

---

## Acceptance Criteria

- [ ] **Concept Count**: Exactly 5 core concepts (AIDD Principle #12)
- [ ] **Teaching Pattern**: Every lesson section includes "What it is → Code → Try → Think with AI → Why it matters"
- [ ] **AI Integration**: 3-4 "Think with your AI" prompts per lesson (encouraging dialogue, not memorization)
- [ ] **No Forward References**: Zero mentions of Chapters 14+ (data types, variables, functions, classes, etc.)
- [ ] **Scope Boundaries**: Clear what's IN (introduction, installation, first program) and OUT (everything else)
- [ ] **AIDD Reinforcement**: Chapter 4 (specification-first), Chapter 5 (AI partnership) actively reinforced
- [ ] **Dual Paths Clear**: Both Beginner and Professional paths clearly marked and distinct
- [ ] **Code Safety**: No security vulnerabilities, hardcoded secrets, or unsafe patterns
- [ ] **Readability**: Grade 7-8 reading level, accessible but not condescending
- [ ] **Outcomes Met**: All 5 learning objectives are achievable and measurable
- [ ] **Success Evals Aligned**: Content enables all 5 success evals to be measured

---

## Assumptions

- Students have completed Chapters 1-12 (understand AIDD, have tools installed, know prompt engineering)
- Students have access to a computer with internet for Python download and Claude Code/Gemini CLI
- "Modern Python" means 3.13+ (released October 2024)
- Installation guidance is needed for Windows, macOS, and Linux
- Students have a text editor or IDE available (VS Code, Cursor, or similar from Chapter 5)
- Dual-path design assumes clear learning background context is provided at chapter start

---

## Success Criteria (Technology-Agnostic, Measurable)

### Measurable Outcomes

- **SC-001**: 80%+ of students successfully run `python --version` and confirm 3.13+ is installed within the first 30 minutes of Lesson 2
- **SC-002**: 80%+ of students write and execute their first program (greeting script) and see correct output within 45 minutes of Lesson 3
- **SC-003**: 75%+ of students can articulate in writing why Python matters for AI development after completing Lesson 1
- **SC-004**: 75%+ of students use Claude Code or Gemini CLI to ask a question about their code (instead of looking it up) during Lesson 3
- **SC-005**: 70%+ of students write a specification (plain language) before asking AI to generate code in Lesson 4 (Professional path)
- **SC-006**: 90%+ of students can run their program without syntax errors on the first or second attempt (indicates readability)
- **SC-007**: Zero forward references to undefined concepts (all code examples use only concepts from this chapter)

---

## Complexity Tier: BEGINNER (A1-A2) with Professional Extension (A2-B1)

**Core Path (A1-A2)**:
- Complete newcomers
- Focus on understanding and confidence
- Max 5 concepts
- Hands-on practice
- Avoid overwhelming detail

**Professional Path (A2-B1)**:
- Experienced developers transitioning to AIDD
- Focus on methodology and reasoning
- Connect Python to agent thinking
- Specification-first practice
- Links to larger AI development ecosystem

---

## Next Phases

- **Planning Phase**: Break this spec into 4 lessons with detailed learning progression, CEFR proficiency levels (A1 → A2 → A2/B1), and AI prompts
- **Implementation Phase**: Create lesson `.md` files with full AIDD teaching pattern applied
- **Validation Phase**: Technical review for code correctness, pedagogical effectiveness, AIDD principle alignment
