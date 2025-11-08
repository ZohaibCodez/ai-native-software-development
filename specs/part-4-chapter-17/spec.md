# Chapter Specification: Control Flow and Loops

**Chapter Number**: 17
**Chapter Title**: Control Flow and Loops
**Part**: 4 (Python Fundamentals - Early)
**Feature Branch**: `017-ch17-controlflow-loops`
**Created**: 2025-11-08
**Updated**: 2025-11-08 (Revised for beginner complexity)
**Status**: Draft
**Complexity Tier**: Beginner (A1-A2 CEFR)

## Success Evals *(mandatory - defined FIRST)*

### How We Measure Learning Success

**Comprehension Eval (Understanding):**
- **EVAL-001**: 75%+ of readers can explain when to use `if/elif/else` vs `match/case` (concept quiz)
- **EVAL-002**: 80%+ of readers can predict loop behavior from code examples (code reading test)
- **EVAL-003**: 70%+ of readers can identify infinite loops and off-by-one errors (debugging exercise)

**Skill Acquisition Eval (Application):**
- **EVAL-004**: 75%+ of readers can write conditional logic from natural language specification (coding exercise)
- **EVAL-005**: 70%+ of readers can implement loops with correct break/continue usage (hands-on task)
- **EVAL-006**: 65%+ of readers can refactor nested conditionals using match/case (refactoring exercise)

**Accessibility Eval:**
- **EVAL-007**: Chapter content reads at Grade 8-9 level (Flesch-Kincaid)
- **EVAL-008**: Code examples have type hints and clear variable names (automated check)

**Engagement Eval:**
- **EVAL-009**: 70%+ chapter completion rate (analytics)
- **EVAL-010**: 80%+ of "Try With AI" prompts attempted (activity tracking)

**Business Goal Connection**: These evals measure whether readers can **apply conditional logic and loops** to real problems—the foundational skill for all programming. If readers pass these evals, they can build decision-making systems and automate repetitive tasks with AI assistance.

---

## Topic Summary *(mandatory)*

Chapter 17 introduces **control flow** (making decisions with conditionals) and **loops** (repeating actions efficiently). Building on operators and variables from Chapters 15-16, readers learn how programs make choices (`if/elif/else`, `match/case`) and automate repetition (`for`, `while`).

This chapter prepares readers for data structures (Ch 18-19) by teaching how to process collections systematically. Readers practice writing specifications for conditional logic, letting AI generate implementation, and validating behavior—the AI-native workflow for decision-making systems.

**Part 4 Context**: Early Python fundamentals - **Beginner tier (A1-A2 CEFR)**. Heavy scaffolding, max 2 options to choose from, max 5 concepts per lesson, AI handles complexity while students build understanding through guided exploration.

---

## Prerequisites *(mandatory)*

**Required Chapters**:
- **Chapter 13**: Introduction to Python (REPL, execution model, basic syntax)
- **Chapter 14**: Data Types (int, float, bool, str)
- **Chapter 15**: Operators, Keywords, and Variables (arithmetic, comparison, logical operators)
- **Chapter 16**: Strings and Type Casting (string manipulation, type conversion)

**Assumed Skills**:
- Can read and write Python variables with type hints
- Understands comparison operators (`==`, `!=`, `>`, `<`, `>=`, `<=`)
- Understands logical operators (`and`, `or`, `not`)
- Can use f-strings for output

---

## Learning Objectives *(mandatory, aligned with evals)*

By the end of this chapter, readers will be able to:

1. **LO-001** (CEFR A1 - Recognition): Recognize and explain when programs need to make decisions (if/else) vs repeat actions (loops) (aligns with EVAL-001)

2. **LO-002** (CEFR A1-A2 - Application with Scaffolding): Write simple conditional logic (`if/else`, basic `elif`) from clear specifications with AI assistance (aligns with EVAL-004)

3. **LO-003** (CEFR A1-A2 - Application with Scaffolding): Write `for` loops to repeat actions a fixed number of times using `range()` (aligns with EVAL-005)

4. **LO-004** (CEFR A2 - Application): Write `while` loops for condition-based repetition with AI helping to prevent infinite loops (aligns with EVAL-003, EVAL-005)

5. **LO-005** (CEFR A2 - Recognition): Understand `break` and `continue` for controlling loop behavior (basic usage, AI handles complex cases) (aligns with EVAL-002)

---

## Content Outline *(mandatory)*

### Section 1: Making Decisions with Conditionals

**Concepts Covered** (5 max per lesson - Beginner):
- `if` statements (single condition - "if this is true, do this")
- `if/else` statements (either/or choices)
- `if/elif/else` chains (multiple possibilities)
- Boolean expressions (True/False conditions)
- Comparison operators review (==, !=, >, <, >=, <=)
- Basic nested conditionals (one level only)

**Teaching Approach**:
- **Tier 1 (Book Teaches Directly)**: `if`, `if/else`, `elif` syntax and when to use each
- **Tier 2 (AI Companion)**: Helps write conditionals from plain English, suggests improvements
- **Heavy Scaffolding**: Step-by-step breakdown, lots of examples, immediate practice
- **CoLearning Elements**: 💬 "Ask your AI: When should I use elif vs multiple if statements?", 🎓 "You learn the concept, AI handles the edge cases", 🚀 "Tell your AI what decision to make, it helps write the code"

**Lesson Breakdown** (4 lessons - slower pace):
- **Lesson 1**: Understanding Decisions (3 concepts: what are conditions, True/False, when programs need to decide)
- **Lesson 2**: If and Else (5 concepts: if syntax, else syntax, comparison operators, indentation rules, testing conditions)
- **Lesson 3**: Multiple Choices with Elif (5 concepts: elif syntax, when to use elif, chaining conditions, reading elif chains, common mistakes)
- **Lesson 4**: Nesting Conditions (4 concepts: what is nesting, one-level nested if, when to use nesting, AI helps with complex nesting)

---

### Section 2: Repeating Actions with Loops

**Concepts Covered** (5 max per lesson - Beginner):
- `for` loops with `range()` - "repeat this X times"
- Loop variables - what they are and how they change
- `while` loops - "keep going until condition is false"
- Avoiding infinite loops - when while loops never stop
- `break` - stopping a loop early
- `continue` - skipping to next iteration
- Basic iteration over strings (simple examples only)

**Teaching Approach**:
- **Tier 1 (Book Teaches Directly)**: `for` with `range()`, `while` with simple conditions
- **Tier 2 (AI Companion)**: AI helps prevent infinite loops, suggests when to use break/continue
- **Heavy Scaffolding**: Many examples, predict-then-run exercises, AI validates understanding
- **CoLearning Elements**: 💬 "Ask your AI: Why does this loop run 5 times?", 🎓 "Loops automate repetition - you understand WHAT to repeat, AI helps with HOW", ✨ "Tell your AI what to repeat, it helps write the loop"

**Lesson Breakdown** (3 lessons - slower pace):
- **Lesson 5**: For Loops Basics (5 concepts: what are loops, for syntax, range() basics, loop variable, reading loop output)
- **Lesson 6**: While Loops (5 concepts: while syntax, condition-based loops, infinite loop danger, AI helps prevent infinite loops, for vs while - when to use each)
- **Lesson 7**: Controlling Loops (4 concepts: break keyword, continue keyword, when to use each, AI helps decide which to use)

---

### Section 3: Common Mistakes & Hands-On Practice

**Common Mistakes Covered** (Beginner-appropriate):
- **Mistake 1**: Forgetting indentation in if/else blocks
- **Mistake 2**: Using `=` instead of `==` in conditions
- **Mistake 3**: Infinite loops (forgetting to update while condition)
- **Mistake 4**: Off-by-one errors in range() (range(10) gives 0-9, not 1-10)
- **Mistake 5**: Not understanding when loop body executes

**Hands-On AI Exercise**:
- **Exercise Title**: "Temperature Advisor - Build with Your AI Partner"
- **Task**: Work WITH your AI to build a program that:
  1. Asks for temperature
  2. Gives clothing advice based on temperature (if/elif/else)
  3. Repeats for 3 days using a loop
- **Step-by-Step AI Collaboration**:
  - You explain what you want in plain English
  - AI helps write the code
  - You test it together
  - AI explains what each part does
  - You modify it with AI's help
- **Skills Practiced**: Explaining intent → AI generates code → You understand and validate → Iterate together

---

## Code Examples *(mandatory, 3-8 examples)*

### Example 1: Simple Conditional (A2 Complexity)

**Purpose**: Demonstrate basic if/else decision-making
**Concept**: Binary choice based on comparison operator
**AI Prompt to Generate**:
```
Write a Python function `check_eligibility` that takes an age (int) and returns
"Eligible to vote" if age >= 18, else "Not eligible". Use type hints and f-strings.
```

**Expected Output** (spec → AI generates):
```python
def check_eligibility(age: int) -> str:
    if age >= 18:
        return "Eligible to vote"
    else:
        return "Not eligible"

# Test
print(check_eligibility(20))  # "Eligible to vote"
print(check_eligibility(16))  # "Not eligible"
```

**Validation**: Test with boundary values (17, 18, 19)

---

### Example 2: Multiple Conditions with Elif (A2-B1 Complexity)

**Purpose**: Show if/elif/else chain for multiple outcomes
**Concept**: Sequential condition checking
**AI Prompt to Generate**:
```
Write a Python function `categorize_temperature` that takes a temperature (float)
in Celsius and returns:
- "Freezing" if temp < 0
- "Cold" if 0 <= temp < 15
- "Mild" if 15 <= temp < 25
- "Hot" if temp >= 25
Use type hints and elif.
```

**Expected Output**:
```python
def categorize_temperature(temp: float) -> str:
    if temp < 0:
        return "Freezing"
    elif temp < 15:
        return "Cold"
    elif temp < 25:
        return "Mild"
    else:
        return "Hot"

# Test
print(categorize_temperature(-5))   # "Freezing"
print(categorize_temperature(10))   # "Cold"
print(categorize_temperature(20))   # "Mild"
print(categorize_temperature(30))   # "Hot"
```

**Validation**: Test boundary values (0, 15, 25)

---

### Example 3: Match/Case Pattern Matching (B1 Complexity)

**Purpose**: Introduce modern pattern matching (Python 3.10+)
**Concept**: Cleaner alternative to long if/elif chains
**AI Prompt to Generate**:
```
Refactor this if/elif/else chain to use match/case:
Given a command string, execute: "start" → "Starting...",
"stop" → "Stopping...", "restart" → "Restarting...",
default → "Unknown command". Use type hints.
```

**Expected Output**:
```python
def execute_command(command: str) -> str:
    match command:
        case "start":
            return "Starting..."
        case "stop":
            return "Stopping..."
        case "restart":
            return "Restarting..."
        case _:
            return "Unknown command"

# Test
print(execute_command("start"))    # "Starting..."
print(execute_command("restart"))  # "Restarting..."
print(execute_command("invalid"))  # "Unknown command"
```

**Validation**: Compare readability vs if/elif/else, test wildcard case

---

### Example 4: For Loop with Range (A2 Complexity)

**Purpose**: Demonstrate fixed iteration loop
**Concept**: Looping a known number of times
**AI Prompt to Generate**:
```
Write a Python function `print_countdown` that takes a number (int) and
prints a countdown from that number to 1, then prints "Liftoff!".
Use a for loop with range().
```

**Expected Output**:
```python
def print_countdown(n: int) -> None:
    for i in range(n, 0, -1):
        print(i)
    print("Liftoff!")

# Test
print_countdown(5)
# Output: 5, 4, 3, 2, 1, Liftoff!
```

**Validation**: Test with different starting numbers, explain range() parameters

---

### Example 5: While Loop with Condition (A2-B1 Complexity)

**Purpose**: Show condition-based iteration
**Concept**: Loop until condition becomes false
**AI Prompt to Generate**:
```
Write a Python function `sum_until_limit` that takes a limit (int) and
returns the sum of numbers 1, 2, 3, ... until the sum reaches or exceeds
the limit. Use a while loop.
```

**Expected Output**:
```python
def sum_until_limit(limit: int) -> int:
    total: int = 0
    current: int = 1

    while total < limit:
        total += current
        current += 1

    return total

# Test
print(sum_until_limit(10))  # 10 (1+2+3+4 = 10)
print(sum_until_limit(20))  # 21 (1+2+3+4+5+6 = 21)
```

**Validation**: Test edge cases, discuss infinite loop prevention

---

### Example 6: Break and Continue (B1 Complexity)

**Purpose**: Demonstrate loop control flow
**Concept**: Exiting early (break) vs skipping (continue)
**AI Prompt to Generate**:
```
Write a Python function `find_first_even` that takes a list of integers
and returns the first even number found. Use a for loop with break.
If no even number found, return None.
```

**Expected Output**:
```python
def find_first_even(numbers: list[int]) -> int | None:
    for num in numbers:
        if num % 2 == 0:
            return num
    return None

# Test
print(find_first_even([1, 3, 5, 8, 9]))  # 8
print(find_first_even([1, 3, 5]))        # None
```

**Validation**: Compare with continue for "skip odd numbers" variant

---

### Example 7: Loop + Else Clause (B1 Complexity)

**Purpose**: Show less-common but useful loop+else pattern
**Concept**: Else runs if loop completes without break
**AI Prompt to Generate**:
```
Write a Python function `contains_negative` that takes a list of integers
and returns True if any negative number exists, else False.
Use for...else pattern.
```

**Expected Output**:
```python
def contains_negative(numbers: list[int]) -> bool:
    for num in numbers:
        if num < 0:
            return True
    else:
        return False

# Test
print(contains_negative([1, 2, -3, 4]))  # True
print(contains_negative([1, 2, 3]))      # False
```

**Validation**: Explain when else executes vs doesn't

---

### Example 8: Nested Loops (B1 Complexity)

**Purpose**: Demonstrate loops within loops
**Concept**: Iterating multi-dimensional patterns
**AI Prompt to Generate**:
```
Write a Python function `multiplication_table` that takes a size (int) and
prints a multiplication table from 1 to size. Use nested for loops.
```

**Expected Output**:
```python
def multiplication_table(size: int) -> None:
    for i in range(1, size + 1):
        for j in range(1, size + 1):
            print(f"{i * j:4}", end="")
        print()  # New line after each row

# Test
multiplication_table(5)
# Output:
#    1   2   3   4   5
#    2   4   6   8  10
#    3   6   9  12  15
#    4   8  12  16  20
#    5  10  15  20  25
```

**Validation**: Discuss performance implications, when to avoid nesting

---

## Acceptance Criteria *(mandatory)*

### Content Quality Checklist

- [ ] **EVAL-001 to EVAL-010**: All success evals have corresponding content coverage
- [ ] **LO-001 to LO-005**: All learning objectives addressed in lessons
- [ ] **Cognitive Load**: Max 7 concepts per lesson (Principle 12)
- [ ] **Python 3.14+ Standards**: Type hints mandatory, f-strings only, match/case included
- [ ] **No Forward References**: No mention of functions (Ch 20), exceptions (Ch 21), comprehensions (Ch 18-19)

### CoLearning Pedagogy Checklist

- [ ] **💬 AI Colearning Prompt**: Present in every lesson after foundational concepts
- [ ] **🎓 Instructor Commentary**: "Syntax cheap, semantics gold" theme throughout
- [ ] **🚀 CoLearning Challenge**: Specification-driven exercises in each lesson
- [ ] **✨ Teaching Tip**: AI tool literacy tips (Claude Code/Gemini CLI usage)
- [ ] **Conversational Tone**: "You, your, we" language (NOT documentation style)
- [ ] **"Try With AI" Closure**: ONLY closure element, 4 prompts (Recall → Apply → Analyze → Synthesize)

### Code Example Validation

- [ ] **All 8 Examples**: Runnable, tested, include AI prompts that generated them
- [ ] **Type Hints**: All variables and functions have explicit types
- [ ] **Security**: No eval(), exec(), hardcoded secrets
- [ ] **Complexity Appropriate**: A2-B1 CEFR range, builds progressively

### Lesson Structure Validation

- [ ] **7 Lessons Total**: 4 for conditionals, 3 for loops (beginner-paced structure)
- [ ] **Heavy Scaffolding**: Max 5 concepts per lesson, lots of examples, immediate validation
- [ ] **AI Partnership Throughout**: Book teaches foundation, AI helps with application
- [ ] **Prerequisites Clear**: Explicit references to Ch 13-16
- [ ] **No Lesson Summaries**: Lessons end with "Try With AI" only
- [ ] **Beginner Language**: "Your AI helps you...", "Let's explore...", no documentation tone

---

## Complexity Tier Confirmation *(mandatory)*

**Tier**: **Beginner** (Early Part 4, Chapters 12-20)
**CEFR Range**: A1-A2
**Max Concepts/Lesson**: 5 (heavy scaffolding)
**Lesson Count**: 7 lessons recommended (4 conditionals + 3 loops)
**Part-Appropriate Language**: "Your AI helps you...", "Let's explore with AI...", "AI handles the complexity while you learn..."

**Tier Characteristics Applied**:
- **Max 2 options** (if vs elif, for vs while - AI helps choose)
- **Heavy scaffolding** (step-by-step, lots of examples, predict-then-run)
- **AI handles edge cases** (students focus on core concepts)
- **One concept at a time** (deep not broad)
- **Immediate validation** (run code after each concept)
- **No advanced patterns** (no match/case, no loop+else, no nested loops - defer to later chapters)

---

## Assumptions *(optional, for transparency)*

1. **Python Version**: Readers have Python 3.10+ (for match/case). Earlier versions covered in appendix.
2. **AI Tools Available**: Readers have Claude Code or Gemini CLI installed (Part 2 setup).
3. **Type Hints Familiarity**: Readers comfortable with type hints from Ch 14-16.
4. **REPL Access**: Readers can test code interactively (Ch 13 prerequisite).

---

## Dependencies *(optional)*

**Required Before This Chapter**:
- Chapter 15: Operators (comparison, logical) - needed for conditions
- Chapter 16: Strings (f-strings) - needed for output examples

**Prepares For Next Chapters**:
- Chapter 18: Lists, Tuples, Dictionary - loops iterate over collections
- Chapter 19: Set, Frozen Set, GC - advanced iteration patterns
- Chapter 20: Modules and Functions - control flow within functions

---

## Notes *(optional)*

### Pedagogical Decisions

1. **Beginner-First Approach**: This is early Python learning. Focus on confidence-building, not completeness. Students learn core patterns deeply; AI handles variations.

2. **No Advanced Patterns**: NO match/case (defer to Ch 24-25 OOP), NO loop+else (confusing for beginners), NO nested loops (defer to Ch 18-19 with data structures), NO list comprehensions (Ch 18-19).

3. **Heavy AI Scaffolding**: AI prevents infinite loops, helps debug indentation, suggests when to use break vs continue. Students focus on UNDERSTANDING, AI handles EDGE CASES.

4. **One Concept, Many Examples**: Rather than many concepts with one example, teach fewer concepts with LOTS of examples and practice. Repetition builds confidence.

5. **Immediate Validation**: Every concept followed by "run this code" moment. Predict → Run → Observe → Understand loop throughout.

### Scope Boundaries

**In Scope** (Beginner Only):
- Basic `if/else` (binary choice)
- `if/elif/else` (multiple choices, max 3-4 branches)
- Simple nested if (one level only, with AI help)
- `for` loops with `range()` (fixed repetition)
- `while` loops (condition-based, with infinite loop prevention)
- `break` and `continue` (basic usage, AI explains when)
- Iteration over strings (simple examples only, preparing for Ch 18)

**Out of Scope** (Future Chapters):
- **Match/case** → Ch 24-25 (OOP context, pattern matching)
- **Loop+else** → Ch 24-25 (advanced control flow)
- **Nested loops** → Ch 18-19 (with lists and data structures)
- **List comprehensions** → Ch 18-19 (Pythonic iteration)
- **Functions** → Ch 20 (control flow within functions)
- **Exception handling** → Ch 21 (try/except in conditionals)
- **Generators/iterators** → Ch 28 (advanced topics)
- **Complex nesting** → Later chapters with AI orchestration

---

**Specification Status**: ✅ Ready for Clarification Phase (`/sp.clarify`)
**Next Steps**: Run `/sp.clarify` to identify underspecified areas, then proceed to `/sp.plan`
