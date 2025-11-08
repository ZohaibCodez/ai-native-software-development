# Chapter 13 Plan: Introduction to Modern Python

**Specification**: `specs/part-4-chapter-13/spec.md`
**Feature Branch**: `013-introduction-to-python`
**Created**: 2025-11-08
**Status**: Ready for Tasks Generation
**Complexity Tier**: BEGINNER (A1-A2) with Professional Extension (A2-B1)
**Target Audience**: Absolute beginners + professionals transitioning to AI-native development

---

## Overview & Pedagogical Foundation

This plan transforms the Chapter 13 specification into four progressive lessons that teach Python introduction while reinforcing AIDD principles from prior chapters. The chapter uses a **dual-path design**: Core Path (all students) progresses A1 → A2 (recognition → simple application), while Professional Path adds A2-B1 (independent application) extension.

**Key Design Decisions**:

1. **AIDD Teaching Pattern Applied**: Every lesson follows "What it is → Code idea → Think with Your AI → Why it matters for thinking" structure (NOT traditional "define → explain → memorize")
2. **CEFR Proficiency Mapping**: Each lesson is tagged with CEFR level (A1/A2/B1) using international competency standards, ensuring students understand what cognitive level is expected
3. **Cognitive Load Managed**: Max 2 new concepts per lesson (max 10 total concepts across 4 lessons respects Principle #12)
4. **AI Prompts Specified Exactly**: Each lesson includes 3-4 guiding prompts for Claude Code/Gemini CLI exploration (not generic "ask AI" suggestions)
5. **Dual Paths Clearly Marked**: 🟦 CORE PATH (all students) vs 🟪 PROFESSIONAL PATH (experienced developers only) with clear separation
6. **Prior Chapter Reinforcement**: Every lesson explicitly connects to Chapters 4, 5, 6, 7, 10
7. **Foundation for Chapter 14**: Every lesson validates students are ready for Data Types
8. **No Forward References**: Zero mentions of Chapters 14+ (variables, functions, classes, async, etc.)

---

## Lesson Breakdown (4 Lessons, ~2.5 hours total)

### Lesson 1: What is Python and Why AIDD Needs It (45 minutes)

**CEFR Level**: A1 (Recognition) — Students can identify and name Python, recognize why it matters

**Cognitive Load**: 2 new concepts
- Concept 1: What is Python (high-level, readable, interpreted language)
- Concept 2: Why Python for AI-native development (agentic workflows, automation, data)

**Prior Knowledge Required**:
- Chapter 1-4: AIDD mission and why specification-first thinking matters
- Chapter 5: Claude Code as thinking partner
- Chapter 6: Gemini CLI basics

**Duration**: 45 minutes (reading + code exploration)

**Learning Objectives** (students will be able to):
1. Identify what Python is: high-level, readable, interpreted programming language
2. Recognize why Python matters for AI-native development: central to agents, automation, data science
3. Connect Python's readability to clear specification writing (reinforcement from Chapter 4)

**Content Structure**:

**Section 1: What is Python?**
- Plain-language explanation: "Python is a high-level, readable, interpreted language"
- Characteristics: "You can read Python code like you read English"
- Analogy: "Think of Python like a conversation with your computer—clear instructions, straightforward responses"
- Context: Show Python's place in programming landscape (compiled vs. interpreted, high-level vs. low-level)

**Section 2: Code Idea — Visual Example**
- Show minimal Python code (visual only, NO execution yet):
```python
print("Hello, World!")
```
- Ask: "Notice how you can almost understand what this does without explanation?"
- Show comparison: Python vs. compiled language (C) side-by-side readability contrast
- No execution yet—just visual inspection

**Section 3: Why Python Matters for AI-Native Development**
- Connection to agentic AI: "Agents are programs that make decisions. Python's readability makes it easy to specify what agents should do."
- Connection to automation: "When you tell Claude Code to generate code, Python is readable enough to validate easily."
- Connection to Chapter 4 (specification-first): "Python code reads almost like a specification—this is crucial for AI partnership."
- Real-world anchors: "Data scientists, AI engineers, automation specialists all use Python"

**Section 4: Think with Your AI** — 3 Guiding Prompts for Claude Code/Gemini CLI
1. **Exploration prompt** (why it matters): "Why do you think Python is popular for AI and data science? What makes it different from other languages?"
2. **Connection prompt** (to prior chapters): "How does Python's readability connect to writing clear specifications (Chapter 4)? Why does this matter for working with AI agents?"
3. **Reasoning prompt** (thinking pattern): "If you were building an autonomous agent, why would you choose Python? What properties of the language would help you think clearly about agent behavior?"

**Section 5: Why It Matters for Thinking** — AIDD Reasoning Pattern
- "Python's readability means your CODE CAN BE A SPECIFICATION. You specify what should happen, and the code reflects that specification clearly."
- "This connects directly to Chapter 4: clear writing → clear thinking. Python enforces clear thinking."
- "When you ask Claude Code to generate Python, you can easily read and understand what it did—this is how validation works."

**Validation Point**:
Student can explain in 2-3 sentences: "What is Python and why does it matter for AI-native development?" (measured via reflection prompt)

**Dual Paths**:

🟦 **CORE PATH**: Focus on what Python is, visual readability comparison, connection to AIDD mission

🟪 **PROFESSIONAL PATH** (Extension): Add
- Historical context: Why Python became dominant in AI/data science (readability won out over performance)
- Agent thinking connection: "Agents are recursive reasoners—Python's readability helps you reason about complex agent behavior"
- Ecosystem awareness: "Python has 30+ years of libraries for AI, data, automation—this community support matters"

---

### Lesson 2: Installing Python & Setting Up Your Environment (30 minutes)

**CEFR Level**: A1 (Guided Procedure) — Students follow structured steps to achieve a specific outcome

**Cognitive Load**: 2 new concepts
- Concept 1: What Python installation means (downloading + setting up on your computer)
- Concept 2: Terminal/command-line verification (running commands to confirm Python works)

**Prior Knowledge Required**:
- Chapter 7: Terminal/Bash basics (opening terminal, running commands)
- Chapter 5-6: Accessing Claude Code and Gemini CLI

**Duration**: 30 minutes (installation varies by platform, 10-15 min actual install + 10-15 min verification + troubleshooting)

**Learning Objectives** (students will be able to):
1. Install Python 3.13+ on their system (Windows, macOS, or Linux)
2. Open a terminal and verify installation with `python --version`
3. Confirm Python 3.13+ is available and ready for Lesson 3

**Content Structure**:

**Section 1: What It Means to Install Python**
- "Installing Python means downloading the Python interpreter and placing it on your computer so you can run Python code"
- "Your computer is like a librarian—it needs Python software to understand and execute Python instructions"
- Where Python lives: "On Windows: `C:\Program Files\...`, on macOS: `/usr/local/...`, on Linux: `/usr/bin/...`"
- Why 3.13+ matters: "Modern version with latest improvements; consistent across all platforms"

**Section 2: Code Idea — What Installation Success Looks Like**
- Terminal output when installation succeeds:
```
$ python --version
Python 3.13.0
```
- Explain: "This command asks your computer 'Do you have Python?' and Python responds with its version"
- What failure looks like: "command not found" (shows Python isn't installed or PATH isn't set)

**Section 3: Platform-Specific Installation Steps**

**For macOS**:
- Option A: Use Homebrew (if installed): `brew install python@3.13`
- Option B: Download from python.org and run installer
- Step-by-step with screenshots/clear instructions
- Verify: `python3 --version` (note: on macOS, command is `python3` not `python`)

**For Windows**:
- Download from python.org → Run .msi installer
- CRITICAL: Check "Add Python to PATH" during installation
- Verify: Open Command Prompt, run `python --version`
- If not found: Add to PATH manually (with clear step-by-step)

**For Linux** (Ubuntu/Debian as example):
- `sudo apt update && sudo apt install python3.13`
- Verify: `python3 --version`
- Or use pyenv for multiple versions (mention but don't require)

**Section 4: Think with Your AI** — 3 Guiding Prompts for Claude Code/Gemini CLI
1. **Troubleshooting prompt**: "I tried to install Python on [my OS] and got this error: [paste error]. What does this mean and how do I fix it?"
2. **Verification prompt**: "My terminal shows Python 3.12 installed. Do I need to upgrade to 3.13? Why does the version matter?"
3. **Environment prompt**: "What does 'PATH' mean? Why did the Windows installer say to 'Add Python to PATH'?"

**Section 5: Why It Matters** — Foundation Reasoning
- "Before you write any Python code, your environment must be set up. An environment is like a workspace—everything depends on it being ready"
- "This is the first validation step: Verify your environment works BEFORE writing code. This is validation-first thinking (Chapter 4 reinforcement)"
- "When something goes wrong later, 'Is Python installed correctly?' is the first question to ask"

**Validation Point**:
Student successfully runs `python --version` (or `python3 --version` on macOS/Linux) and confirms output shows Python 3.13+

**Dual Paths**:

🟦 **CORE PATH**: Step-by-step installation for one platform (let student choose), focus on verification

🟪 **PROFESSIONAL PATH** (Extension): Add
- Mention virtual environments (venv): "For serious projects, you isolate Python environments. We'll use this in Chapter 17+. For now, know they exist."
- Explain why 3.13 matters: "Each Python version has improvements and security fixes. 3.13 was released October 2024 and has significant performance improvements."
- Show how to check Python version history: "If your system has 3.10, you can upgrade. Here's how."

---

### Lesson 3: Your First Program (45 minutes)

**CEFR Level**: A2 (Simple Application with Scaffolding) — Students can perform simple coding tasks with provided structure

**Cognitive Load**: 2 new concepts
- Concept 1: Running code (how Python executes instructions)
- Concept 2: Input/Output (how programs interact with users)

**Prior Knowledge Required**:
- Lesson 1: Understanding what Python is
- Lesson 2: Python is installed and verified
- Chapter 10: Prompting (asking AI good questions)

**Duration**: 45 minutes (writing + running + exploration + modification)

**Learning Objectives** (students will be able to):
1. Write their first Python program from scaffolded template (greeting script)
2. Execute the program and see correct output
3. Modify the program and observe how changes affect output
4. Ask Claude Code/Gemini questions about code instead of memorizing

**Content Structure**:

**Section 1: What It Means to Run Code**
- "When you run a Python program, you're telling Python: 'Execute these instructions from top to bottom, in order'"
- "Python reads your code, understands each line, and does what it says"
- Analogy: "Like giving your computer a recipe: 'Mix flour, then add eggs, then bake.' Python follows your recipe step by step."

**Section 2: Scaffolded Program Build** — Progressive Complexity

**Step 1: The Simplest Program**
```python
print("Hello, World!")
```
- "This program does ONE thing: prints text to the screen"
- Try it: Create a file `hello.py` (or `.py` is the filename extension for Python)
- Run it: `python hello.py`
- See output: `Hello, World!`
- Validation: "Did you see the text printed? You just ran a Python program!"

**Step 2: Ask the User for Input**
```python
name = input("What is your name? ")
```
- "This program does TWO things: asks the user a question and waits for their response"
- `input()` is a function that: shows a question, waits for the user to type something
- The user's response goes into `name` (we'll explain this is called a variable—no, wait, save that for Chapter 15!)
- Actually: "The user's response is captured. We'll use it next."

**Step 3: Combine Both — Your First Complete Program**
```python
name = input("What is your name? ")
print("Hello, " + name + "! Welcome to Python.")
```
- This program: asks for name, then greets them by name
- Line 1: Get the user's name
- Line 2: Print a greeting that includes their name
- Try it: Run this program, type your name when prompted
- See output: `Hello, Alice! Welcome to Python.` (where Alice is YOUR name)

**Section 3: Hands-On Execution** — Try It Yourself

Instructions:
1. Open a text editor (VS Code, Cursor, or any plain text editor)
2. Type the program (Step 3 above)
3. Save as `greeting.py`
4. Open a terminal, navigate to the file location
5. Run: `python greeting.py`
6. Type your name when prompted
7. See the personalized greeting

Expected output (example with name "Alex"):
```
What is your name? Alex
Hello, Alex! Welcome to Python.
```

**Section 4: Think with Your AI** — 4 Guiding Prompts for Claude Code/Gemini CLI

1. **Understanding prompt** (line-by-line): "Explain what this program does, line by line. What happens first? Then what?"
```python
name = input("What is your name? ")
print("Hello, " + name + "! Welcome to Python.")
```

2. **Concept prompt** (why the syntax works): "What does the `+` symbol do in `"Hello, " + name + "!"`? Why do we use `+` here? What would happen if we removed one of the `+` symbols?"

3. **Modification prompt** (experimentation): "How could we change the greeting? Show me two different ways to modify this program. What would we change?"

4. **Reasoning prompt** (why it matters): "Why is input/output important? Can you think of a real program you use that asks for input and gives output? How is it similar to this program?"

**Section 5: Why It Matters** — AIDD Reasoning
- "Input → Processing → Output is the pattern for ALL programs. This greeting program shows that pattern clearly."
- "You just wrote code that communicates with a human. That's the foundation of everything: programs are conversations with computers."
- "Now you've proven you can write, run, and modify code. That's DOING programming, not just reading about it."
- "Notice you didn't memorize syntax. You asked Claude Code for understanding. This is AI partnership—the Chapter 5-6 pattern in action."

**Validation Point**:
Student writes, executes, and modifies their first program. Sees correct output (personalized greeting with their name). Can answer: "What does this program do?" and "How would you change the greeting message?"

**Dual Paths**:

🟦 **CORE PATH**: Simple version, scaffolded steps, guided exploration, confidence-building

🟪 **PROFESSIONAL PATH** (Extension): Add challenge
- "Write your own program: Ask the user TWO questions (not just name), then print a response that includes both answers. Here's the pattern to follow: [give minimal scaffold, let them build]"
- Connect to Chapter 4: "Before you write, write a specification (plain English) of what your program should do. Then write the code."

---

### Lesson 4: Thinking Like an AI-First Developer (30 minutes) [PROFESSIONAL PATH ONLY]

**CEFR Level**: A2-B1 (Guided → Independent Application) — Students apply specification-first pattern to new problems

**Cognitive Load**: 2 new concepts (synthesis of prior lessons)
- Concept 1: Specification-first approach (write intent before code)
- Concept 2: Code validation (verify generated code matches your specification)

**Prior Knowledge Required**:
- Chapter 4: Nine Pillars (specification-first thinking)
- Chapter 10: Prompt engineering (asking AI good questions)
- Lesson 3: Understanding how programs work
- Professional background: Experience with coding or development (THIS LESSON IS PROFESSIONAL PATH ONLY)

**Duration**: 30 minutes (specification writing + AI interaction + validation + reasoning)

**Learning Objectives** (PROFESSIONAL PATH ONLY):
1. Apply specification-first thinking to Python coding (Chapter 4 reinforcement)
2. Write plain-language intent BEFORE asking AI to generate code
3. Validate AI-generated code against specification (validation-first from Chapter 4)
4. Explain why specification-first is more efficient than traditional coding

**Content Structure**:

**Section 1: Specification-First Applied to Code**
- Recap from Chapter 4: "Clear specification → Clear implementation"
- Applied to coding: "Before asking Claude Code to write Python, write what you want the program to do in plain English"
- Why this matters: "Specification is a contract. AI matches code to your spec. You validate against spec. This prevents wasted iterations."
- Compare two approaches:
  - **Approach A (Traditional)**: "Start typing code, figure it out as you go, modify until it works"
  - **Approach B (Specification-First)**: "Write what you want (specification), ask AI to generate code from spec, validate code matches spec, ask questions about implementation"
  - Evidence: "Approach B produces fewer mistakes, clearer code, and faster understanding"

**Section 2: Pattern — Specification → AI → Validate**

**Template**:
```
SPECIFICATION (plain language intent):
I want a program that:
1. [First thing the program should do]
2. [Second thing]
3. [Third thing - if needed]

AI PROMPT:
"Write a Python program that does the following:
[paste specification]"

GENERATED CODE:
[Claude/Gemini generates the code]

VALIDATION:
Does the generated code do all three things I specified?
- [ ] First thing: Yes / No / Partially
- [ ] Second thing: Yes / No / Partially
- [ ] Third thing: Yes / No / Partially
```

**Example**:
```
SPECIFICATION:
I want a program that:
1. Greets the user
2. Asks for their favorite color
3. Says something nice about that color

AI PROMPT:
"Write a Python program that greets the user, asks for their favorite color, and responds with something nice about that color."

GENERATED CODE:
print("Hello! Let me learn more about you.")
color = input("What is your favorite color? ")
print("Wow, " + color + " is a great choice!")

VALIDATION:
Does the code match my specification?
- [x] Greets the user: Yes (line 1)
- [x] Asks for color: Yes (line 2)
- [x] Says something nice: Yes (line 3)
Result: VALID - Code matches specification perfectly.
```

**Section 3: Think with Your AI** — 4 Prompts for Claude Code/Gemini CLI

1. **Writing specifications** (practice)
   - "I want a program that asks the user for their favorite food, then prints a message about that food. Write a specification (in plain English) for this program. Then write Python code that matches the specification."

2. **Validating generated code** (critical thinking)
   - "Here's my specification: [paste spec]. Here's code Claude Code generated: [paste code]. Does the code match my specification? What parts of the code address each requirement?"

3. **Refinement** (iteration)
   - "My program doesn't quite do what I specified. I said it should [requirement], but the code does [what it actually does]. How do I fix this?"

4. **Reasoning about efficiency** (methodology)
   - "Why is writing the specification first better than just typing code and fixing it as you go? What problems does clear specification-first prevent?"

**Section 4: Why It Matters for Thinking** — Professional Reasoning
- "In AI-native development, your specification is more valuable than your typing speed. You can type fast, but can you THINK clearly?"
- "Specification-first forces clarity: You must know exactly what you want before asking AI to generate it."
- "This is exactly how professional AI engineers work: specify intent → generate code → validate → iterate."
- "This scales: For a 100-line program, specification-first is nice. For a 10,000-line system, specification-first is mandatory."

**Validation Point**:
Student writes their own specification (plain language intent), asks Claude Code/Gemini to generate code, validates against specification, and explains whether code matches intent.

**Dual Paths**:

🟪 **PROFESSIONAL PATH ONLY**: This entire lesson is for experienced developers transitioning to AIDD

🟦 **CORE PATH**: Brief reference in Lesson 3 extension ("You can write specifications first, but that's advanced—we'll cover it in the Professional section if you're interested")

---

## Skills Proficiency Mapping (CEFR + Bloom's Taxonomy + DigComp)

**International Standards Applied**:
- **CEFR** (Common European Framework of Reference): 40+ years of language learning research, validated across 40+ languages
- **Bloom's Taxonomy** (2001 revision): Cognitive complexity levels (Remember → Understand → Apply → Analyze → Evaluate → Create)
- **DigComp 2.1** (EU digital competence framework): Areas of digital competence

| Lesson | Skill Taught | CEFR Level | Bloom's Level | Category | Measurable at This Level |
|--------|--------------|-----------|---------------|----------|-------------------------|
| 1 | Recognize Python and its relevance to AI development | A1 | Remember/Understand | Conceptual | Student identifies Python in list of languages; articulates why AI uses Python |
| 2 | Follow guided Python installation procedure; verify success | A1 | Understand/Apply | Technical | Student successfully runs `python --version`; confirms 3.13+ output |
| 3 | Write, run, and modify simple Python programs | A2 | Apply | Technical | Student creates greeting program; modifies output; runs without errors |
| 4 (Prof) | Apply specification-first approach to code generation and validation | A2-B1 | Apply/Analyze | Technical/Methodology | Student writes spec; evaluates AI-generated code; explains alignment/misalignment |

**Cognitive Load Validation** (Principle #12):
- ✅ Lesson 1: 2 concepts (Python definition, Why for AI)
- ✅ Lesson 2: 2 concepts (Installation, Verification)
- ✅ Lesson 3: 2 concepts (Running code, Input/Output)
- ✅ Lesson 4: 2 concepts (Specification-first, Validation) [Professional path only]
- ✅ Total new concepts: 5 (within A1-A2 threshold)
- ✅ Max code examples per lesson: 3
- ✅ Max AI prompts per lesson: 4
- ✅ Estimated total time: ~2.5 hours cumulative

---

## Content Flow & Dependencies

### Lesson Progression

**Lesson 1** (45 min) → Foundation Understanding
- Student understands WHAT Python is and WHY it matters
- No code execution yet (visual only)
- Connects to Chapter 4 (specification-first) and Chapter 5-6 (AI partnership)

↓ **Prerequisite for Lesson 2**: Understanding from Lesson 1

**Lesson 2** (30 min) → Environment Setup
- Student installs Python and verifies installation
- Teaches first validation checkpoint: "Is my environment ready?"
- Reinforces validation-first thinking

↓ **Prerequisite for Lesson 3**: Working Python environment

**Lesson 3** (45 min) → First Program
- Student writes, runs, and modifies their first program
- Applies input/output pattern
- Learns to ask AI questions about code (Chapter 10 reinforcement)

↓ **Prerequisite for Lesson 4**: Confidence with basic programs

**Lesson 4** (30 min, Professional path only) → Methodology
- Professional developers apply specification-first pattern to coding
- Bridges individual concept learning to professional practice
- Sets up for Chapter 14-onwards (specification-driven approach)

---

## Scaffolding Strategy

### Cognitive Complexity Progression

**Lesson 1: Recognition (A1)**
- Task: Identify Python and recognize its importance
- Scaffolding: Visual examples, comparison with other languages, direct connection to AIDD mission
- Cognitive demand: Low (reading, recognizing patterns)

**Lesson 2: Guided Procedure (A1)**
- Task: Follow step-by-step installation instructions
- Scaffolding: Platform-specific steps, clear screenshots, troubleshooting prompts for AI
- Cognitive demand: Low-to-medium (following procedures, problem-solving with AI)

**Lesson 3: Simple Application (A2)**
- Task: Write code from scaffolded template, modify and experiment
- Scaffolding: Template provided (copy-paste), explicit instruction for each step, exploration prompts for AI
- Cognitive demand: Medium (applying pattern, understanding cause-effect, asking good questions)

**Lesson 4: Guided Application to New Problem (A2-B1, Professional only)**
- Task: Apply specification-first pattern to new coding scenario
- Scaffolding: Template for specification + AI prompt, validation checklist, comparison of approaches
- Cognitive demand: Medium-to-high (analysis, evaluation, reasoning about methodology)

### Load Management Techniques

1. **One concept per section**: Each section introduces exactly one new idea (no information overload)
2. **Concrete examples before abstraction**: Show working code before explaining principles
3. **Practice before extension**: Students master basics (Lesson 3) before professional methodology (Lesson 4)
4. **AI as cognitive support**: When complexity rises, prompt students to ask AI for explanation (not memorize)
5. **Iterative refinement**: Lesson 3 shows modify-and-rerun pattern, building confidence for Lesson 4

---

## Integration Points

### Reinforcement of Prior Chapters

**Chapter 1-4 (AIDD Fundamentals)**:
- Lesson 1 explicitly connects Python's readability to specification-first thinking (Chapter 4)
- Lesson 4 applies nine pillars directly to code (Chapter 4 reinforcement)

**Chapter 5 (Claude Code)**:
- Lesson 1-4 use Claude Code as thinking partner throughout
- Lesson 3-4 model exact interaction pattern from Chapter 5

**Chapter 6 (Gemini CLI)**:
- Lesson 1-4 note that Gemini CLI can be used as alternative to Claude Code
- Both AI tools are validated options

**Chapter 7 (Bash Essentials)**:
- Lesson 2 uses terminal commands to verify installation
- Lesson 3 uses terminal to run Python programs

**Chapter 10 (Prompt Engineering)**:
- All lessons use prompting patterns from Chapter 10
- Lesson 3-4 specifically ask "good questions" about code (Chapter 10 reinforcement)

### Foundation for Chapter 14 (Data Types)

**Assumptions Chapter 14 Makes About Chapter 13**:
- Students can run Python and execute basic programs ✅ (Lesson 2-3)
- Students understand input/output concept ✅ (Lesson 3)
- Students are comfortable asking AI questions about code ✅ (Lesson 1-4)
- Students value specification-first approach ✅ (Lesson 4, reinforced in Lesson 3 extension)
- Students have Python 3.13+ installed and verified ✅ (Lesson 2)

**Connection to Chapter 14**:
- Chapter 14 introduces data types (integers, strings, floats, booleans)
- Chapter 13 Lesson 3 uses strings implicitly (text in quotes): "What is your name?" and "Hello, " + name
- Chapter 14 will say: "This text is called a STRING—let's understand types formally"
- Chapter 13 students will recognize the pattern from Lesson 3

---

## Validation Strategy

### How Students Prove Understanding

**Lesson 1**: Comprehension Check
- **Question**: "Explain in 2-3 sentences: What is Python and why do AI-native developers use it?"
- **Pass Criteria**: Answer includes definition (high-level, readable language) + connection to AIDD (AI, agents, or automation)
- **Eval Aligned**: Success Eval #5 (Concept Understanding: 75%+ can explain relevance)

**Lesson 2**: Environment Verification
- **Task**: Run `python --version` in terminal and show output
- **Pass Criteria**: Terminal displays "Python 3.13.x" or higher
- **Eval Aligned**: Success Eval #1 (Installation & Environment Success: 80%+ install successfully)

**Lesson 3**: First Program Execution + Modification
- **Task 1**: Create and run greeting program (given scaffolded template)
- **Pass Criteria**: Program runs without errors, prints personalized greeting with user's name
- **Task 2**: Modify the greeting message and run again
- **Pass Criteria**: Modified message appears in output; program still runs
- **Eval Aligned**: Success Eval #2 (First Program Success: 80%+ create and run) + Success Eval #3 (AI Partnership: 75%+ use AI to understand code)

**Lesson 4** (Professional path): Specification-First Application
- **Task**: Write specification → Ask AI to generate code → Validate against specification
- **Pass Criteria**: Student's validation checklist is complete; student explains how code matches (or doesn't match) specification
- **Eval Aligned**: Success Eval #4 (Specification-First Practice: 70%+ write plain-language specification before asking AI)

### Rubric for Reflection Prompts

**For Lesson 1 (Concept Understanding)**:
- 🟢 **Excellent** (A1): Student identifies Python is readable language AND connects to AIDD mission (agents, AI, specification)
- 🟡 **Good** (A1): Student identifies Python is readable language OR connects to AIDD mission (one of two)
- 🔴 **Needs Work** (Pre-A1): Student identifies Python but no clear explanation; no connection to AIDD

**For Lesson 3 (Code Execution + AI Partnership)**:
- 🟢 **Excellent** (A2): Program runs correctly with personalized greeting; student modified AND asked AI question
- 🟡 **Good** (A2): Program runs correctly; student either modified OR asked AI (one of two)
- 🔴 **Needs Work** (A1): Program has errors; student didn't run or verify

---

## No Forward References Validation

**Checked & Confirmed**:
- ✅ NO mention of variables (Chapter 15 topic)
- ✅ NO mention of data types explicitly (Chapter 14 teaches this; Chapter 13 uses strings implicitly without naming)
- ✅ NO mention of operators or keywords (Chapter 15 topic)
- ✅ NO mention of functions (Chapter 20 topic)
- ✅ NO mention of classes (Chapter 24 topic)
- ✅ NO mention of exception handling (Chapter 21 topic)
- ✅ NO mention of async/await (Chapter 28 topic)
- ✅ NO mention of decorators, generators, or advanced concepts (Chapters 22+)

**What We DO Use**:
- ✅ `print()` function (used but not explained as "function"—just shown as a command)
- ✅ `input()` function (used but not explained as "function"—just shown as a command)
- ✅ String values in quotes (used but not explained as "strings" or "data types"—just shown as text)
- ✅ `+` operator for text (used but not explained as "concatenation"—just shown as connecting text)

**Foreshadowing (Allowed)**:
- Lesson 3 uses `name` to hold user input, with note: "We'll learn more about this in Chapter 15"
- Lesson 3 uses `+` to combine text, with note: "You can combine text with `+`—we'll formalize this later"

---

## Dual-Path Implementation Strategy

### Path Selection Guidance (at chapter start)

Students self-select based on background:
- **🟦 CORE PATH**: "Choose this if you're new to coding or learning Python for the first time. We focus on confidence and hands-on practice."
- **🟪 PROFESSIONAL PATH**: "Choose this if you have development experience and want to understand how AIDD methodology applies to Python. Includes Lesson 4 and extensions within Lessons 1-3."

### Core Path (All Students)

**Lessons 1-3** (mandatory):
1. What is Python and Why AIDD Needs It
2. Installing Python & Setting Up
3. Your First Program

**Focus**: Understanding, hands-on confidence, connection to AIDD mission
**Estimated time**: ~2 hours
**Evals**: Success Evals #1-3, #5 (installation, first program, concept understanding, AI partnership)

### Professional Path (Extension)

**Lessons 1-4** (all lessons):
1. What is Python and Why AIDD Needs It (extended with agent thinking, ecosystem)
2. Installing Python (extended with virtual environments mention, version understanding)
3. Your First Program (extended with challenge: write your own program from spec)
4. Thinking Like an AI-First Developer (new lesson, specification-first applied to code)

**Focus**: Methodology, AI partnership pattern, specification-first reasoning
**Estimated time**: ~2.5 hours (additional 30 min for Lesson 4 + lesson extensions)
**Evals**: All 5 success evals (#1-5, including specification-first practice)

### Path Implementation

In lesson files:
```
🟦 CORE PATH:
[Content for all students]

🟪 PROFESSIONAL PATH (Extension):
[Additional depth, challenges, methodology]
```

Dual paths are INCLUSIVE, not exclusive:
- Core Path students can optionally explore Professional Path extensions
- Professional Path students learn all Core Path concepts (breadth + depth)
- Both paths use same code examples and AI prompts (methodological consistency)

---

## Acceptance Criteria (Plan Quality)

**Pedagogical Soundness**:
- [ ] All 4 lessons have clear CEFR proficiency levels (A1 or A2 or A2-B1)
- [ ] Each lesson has exactly 2 new concepts (max 10 total—Principle #12 compliance)
- [ ] Learning objectives are measurable and use appropriate Bloom's verbs
- [ ] Cognitive load validated: max 3-4 AI prompts per lesson, max 3 code examples per lesson

**AIDD Teaching Pattern**:
- [ ] Every lesson follows "What it is → Code idea → Think with Your AI → Why it matters"
- [ ] All "Think with Your AI" prompts are specific and exploration-oriented (not generic "ask AI what is X")
- [ ] AI prompts encourage reasoning, not memorization

**Dual-Path Structure**:
- [ ] 🟦 CORE PATH clearly marked (lessons 1-3 mandatory)
- [ ] 🟪 PROFESSIONAL PATH clearly marked (lesson 4 + extensions within 1-3)
- [ ] Both paths use consistent code examples and AI tools (just different depth)

**Prior Chapter Reinforcement**:
- [ ] Chapter 4 (specification-first): Lesson 1 and Lesson 4 explicitly reinforce
- [ ] Chapter 5 (Claude Code): Lessons 1-4 model exact interaction pattern
- [ ] Chapter 6 (Gemini CLI): Lessons 1-4 note as alternative option
- [ ] Chapter 7 (Bash): Lesson 2-3 use terminal commands appropriately
- [ ] Chapter 10 (Prompting): Lessons 1-4 use Chapter 10 patterns for AI interaction

**Foundation for Chapter 14**:
- [ ] Students will have Python installed and verified
- [ ] Students will understand input/output concept
- [ ] Students will be comfortable asking AI questions
- [ ] Students will value specification-first approach (Professional path especially)

**No Forward References**:
- [ ] Zero mentions of variables, data types, operators, functions, classes, exceptions, async
- [ ] Only uses concepts from this chapter + Chapters 1-12
- [ ] Implicit use of strings/concatenation is noted as "We'll formalize this later"

**Validation Points**:
- [ ] Lesson 1: Comprehension check (articulate Python definition + relevance)
- [ ] Lesson 2: Environment check (`python --version` output)
- [ ] Lesson 3: Program execution + modification
- [ ] Lesson 4: Specification validation against generated code

**Code Examples Quality**:
- [ ] All examples follow pattern: "What it does → Code → Try it → Think with AI → Why it matters"
- [ ] All examples are runnable and tested
- [ ] All examples respect scope boundaries (no advanced syntax)
- [ ] All code uses Python 3.13+ idiomatically

---

## Summary for Task Generation

This plan provides **complete pedagogical detail** for implementation. Each lesson has:
- Clear learning objectives
- CEFR proficiency level
- Cognitive load management validated
- 2-4 specific AI prompts (not generic)
- Code examples with purpose
- Validation points (how to test understanding)
- Prior chapter connections
- Foundation for next chapter

The lesson-writer subagent can proceed directly to implementation without clarification questions. The plan enforces AIDD teaching patterns, dual-path clarity, and specification-first methodology throughout.

---

## Next Phase: Tasks Generation

Run `/sp.tasks 013-introduction-to-python` to generate:
- Actionable task checklist for implementation
- Acceptance criteria for each lesson
- Detailed code example specifications
- Review/validation procedures
- Estimated effort per task

**Ready for implementation**: All pedagogical foundations established. Awaiting task-level breakdown and developer assignment.
