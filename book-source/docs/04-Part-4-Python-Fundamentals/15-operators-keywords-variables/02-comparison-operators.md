---
title: "Comparison Operators — Making Decisions"
chapter: 15
lesson: 2
duration_minutes: 50

# HIDDEN SKILLS METADATA (Institutional Integration Layer)
# Not visible to students; enables competency assessment and differentiation
skills:
  - name: "Comparison Logic with Type Awareness"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand + Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can write comparisons like `5 > 3`, `x == y`, predict True/False results, and explain why comparing `5 == 5.0` gives True (value equality, not type equality)"

  - name: "Boolean Results and Type Validation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can verify that comparisons return bool type using `type()`, understands True/False as values (not strings), and uses comparisons in realistic scenarios"

  - name: "Preparing for Conditional Logic"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain why comparisons are foundational for Chapter 17's if statements and give examples of conditions in real programs (age checks, password validation)"

learning_objectives:
  - objective: "Explain what each of the six comparison operators (==, !=, >, <, >=, <=) does in plain language and when to use each"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Verbal or written explanation; identifying which operator solves a given comparison problem"

  - objective: "Apply comparison operators correctly to predict and verify True/False results using type hints and validation"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Write comparisons that evaluate correctly; use type() to verify bool results; solve real-world comparison problems"

  - objective: "Understand the difference between value equality and type equality, and explain why Python compares values not types in == operations"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Predict and explain results of cross-type comparisons (5 == 5.0, '5' == 5); understand why type() comparison is different from value comparison"

cognitive_load:
  new_concepts: 5
  assessment: "5 new concepts (equality/inequality operators, magnitude comparison, combined operators, boolean type, type vs value equality) within A2 limit of 7 ✓"

differentiation:
  extension_for_advanced: "Explore chained comparisons: `10 < x < 20` is equivalent to `10 < x and x < 20`. Test this with different values. Ask AI why Python allows this elegant syntax. Compare to languages that don't support chaining."
  remedial_for_struggling: "Focus on just == and != first. Create simple variables: `age: int = 15; voting_age: int = 18`. Practice: `age == voting_age` (False), `age != voting_age` (True). Run it. Change the numbers. Build confidence before learning magnitude comparisons."

# Generation metadata
generated_by: "lesson-writer v1.0"
source_spec: "specs/part-4-chapter-15/spec.md"
source_plan: "specs/part-4-chapter-15/plan.md"
created: "2025-11-08"
last_modified: "2025-11-08"
git_author: "Claude Code"
workflow: "/sp.implement"
version: "1.0.0"
---

# Comparison Operators — Making Decisions

## What Are Comparison Operators?

Remember in Lesson 1, you learned arithmetic operators that **transform data** — they take two numbers and produce a new number. Comparison operators are different. They take two values and ask a **question**: "Is this true or false?"

Think of comparisons as questions you ask about data:
- "Is this age old enough?" → 16 >= 18 → False
- "Is this password the right one?" → user_password == correct_password → True or False
- "Is this temperature higher than 30?" → temp > 30 → True or False

Comparisons always return **bool** (True or False), never numbers or text. This makes them perfect for the next chapter (Chapter 17) where you'll use comparisons to make decisions with `if` statements. For now, you're just learning to **create** comparison questions and see their answers.

Here's the key insight: **comparisons bridge stored data and decision-making**. They let your program evaluate conditions and decide what to do next.

## The Six Comparison Operators

Python has six comparison operators. Each asks a slightly different question:

| Operator | Name | What It Asks | Example | Result |
|----------|------|--------------|---------|--------|
| `==` | Equal to | Are they the same value? | `5 == 5` | True |
| `!=` | Not equal to | Are they different values? | `5 != 3` | True |
| `>` | Greater than | Is the left bigger? | `10 > 3` | True |
| `<` | Less than | Is the left smaller? | `10 < 3` | False |
| `>=` | Greater than or equal | Is left bigger or equal? | `10 >= 10` | True |
| `<=` | Less than or equal | Is left smaller or equal? | `3 <= 10` | True |

Notice two things:
1. **Each operator returns bool** (True or False), never a number
2. **Order matters** — `10 > 3` is True, but `3 > 10` is False

## Code Example 1: All Six Comparison Operators

Here's a program demonstrating all six operators working on the same pair of values:

```python
# Comparison operators: asking true/false questions
x: int = 10
y: int = 5

# Equality and inequality
equal: bool = x == y              # False - are they equal?
not_equal: bool = x != y          # True - are they different?

# Magnitude: greater than and less than
greater_than: bool = x > y        # True - is x bigger?
less_than: bool = x < y           # False - is x smaller?

# Magnitude with equality: greater or equal, less or equal
greater_equal: bool = x >= y      # True - is x bigger or equal?
less_equal: bool = x <= y         # False - is x smaller or equal?

# Verify that ALL comparisons return bool
print(f"x == y: {equal}, type: {type(equal)}")        # False, type: <class 'bool'>
print(f"x != y: {not_equal}, type: {type(not_equal)}")    # True, type: <class 'bool'>
print(f"x > y: {greater_than}, type: {type(greater_than)}")    # True, type: <class 'bool'>
print(f"x < y: {less_than}, type: {type(less_than)}")    # False, type: <class 'bool'>
print(f"x >= y: {greater_equal}, type: {type(greater_equal)}")  # True, type: <class 'bool'>
print(f"x <= y: {less_equal}, type: {type(less_equal)}")    # False, type: <class 'bool'>
```

**Specification: Demonstrate all six comparison operators with type verification**

**AI Prompt Used:**
"Write Python code that demonstrates all 6 comparison operators (==, !=, >, <, >=, <=) on two integers (x=10, y=5). Include type hints for all variables and use type() to verify that each comparison returns bool. Explain what each operator asks."

**Generated Code Output:**
The code above shows the specification and validated implementation.

**Validation Steps:**
1. ✓ All six operators present and correct
2. ✓ Type hints included for all variables
3. ✓ All comparisons return bool type
4. ✓ Results printed with type verification using type()
5. ✓ Each operator returns expected True/False value

**Key Insight**: The `type()` function confirms that **all comparisons return bool**, whether they evaluate to True or False.

## Code Example 2: Value Equality vs. Type Equality

Here's one of the trickiest concepts in comparisons: Python's `==` operator compares **values**, not types. This means `5 == 5.0` is True (same value), even though `int` and `float` are different types.

```python
# Value equality: Do the values represent the same amount?
int_five: int = 5
float_five: float = 5.0

value_equal: bool = int_five == float_five        # True (values are same)
print(f"{int_five} == {float_five}: {value_equal}")    # 5 == 5.0: True

# But type equality is different: Are they the same type?
type_equal: bool = type(int_five) == type(float_five)  # False (different types)
print(f"type({int_five}) == type({float_five}): {type_equal}")    # False

# IMPORTANT: String "5" is NOT equal to integer 5
str_five: str = "5"
int_str_equal: bool = int_five == str_five            # False (different types AND values)
print(f"\n{int_five} == '{str_five}': {int_str_equal}")    # 5 == '5': False

# Why? Because == compares the VALUES, and int 5 is not the same as string "5"
# To understand why, ask yourself: Is the number 5 the same as the text "5"? No!
```

**Why this matters:**

When you use `==`, Python asks: "Do these values represent the same thing?" Not: "Are they the exact same type?"

This is correct behavior most of the time, but it causes a common pitfall: **comparing strings to numbers always returns False**.

```python
# Comparing a number entered as text (from user input)
user_input: str = "18"          # User types "18"
voting_age: int = 18            # Legal voting age

can_vote: bool = user_input == voting_age        # False! (string vs int)
print(f"'{user_input}' == {voting_age}: {can_vote}")    # '18' == 18: False

# This is why converting user input to int is important (more in Chapter 16)
user_age_as_int: int = int(user_input)           # Convert "18" to 18
can_vote_correct: bool = user_age_as_int == voting_age  # True
print(f"{user_age_as_int} == {voting_age}: {can_vote_correct}")    # 18 == 18: True
```

**Key Insight**: Always verify the **types** of values you're comparing, not just the appearance. `"5" == 5` is False, and that's correct.

## Code Example 3: Comparisons with Real Data

Now let's use comparisons to solve real problems:

```python
# Real scenario 1: Checking age eligibility
user_age: int = 16
voting_age: int = 18
driving_age: int = 16

can_vote: bool = user_age >= voting_age           # False
can_drive: bool = user_age >= driving_age        # True

print(f"Age: {user_age}")
print(f"Can vote? {can_vote}")
print(f"Can drive? {can_drive}")

# Real scenario 2: Checking password strength (minimum length)
password: str = "mypass123"
min_length: int = 8
max_length: int = 20

is_long_enough: bool = len(password) >= min_length      # True
not_too_long: bool = len(password) <= max_length        # True

print(f"\nPassword: {password}")
print(f"Length: {len(password)} characters")
print(f"Meets minimum length ({min_length})? {is_long_enough}")
print(f"Within maximum length ({max_length})? {not_too_long}")

# Real scenario 3: Checking if a score is in a valid range
score: int = 85
passing_score: int = 70
perfect_score: int = 100

is_passing: bool = score >= passing_score        # True
is_perfect: bool = score == perfect_score        # False
is_valid: bool = (score >= 0) and (score <= perfect_score)  # True (preview of Chapter 16's 'and' operator)

print(f"\nScore: {score}")
print(f"Passing ({passing_score}+)? {is_passing}")
print(f"Perfect? {is_perfect}")
print(f"In valid range (0-{perfect_score})? {is_valid}")
```

**Specification: Demonstrate comparisons in realistic scenarios with type hints and boolean validation**

**AI Prompt Used:**
"Write Python code that uses comparison operators in three realistic scenarios: age eligibility (16 vs voting/driving ages), password strength (length validation), and score validation (passing/perfect checks). Use type hints, include the len() function, and verify all results are bool type."

**Generated Code Output:**
The code above shows the specification and validated implementation.

**Validation Steps:**
1. ✓ Realistic scenarios (age, password, score)
2. ✓ Type hints included for all variables
3. ✓ Uses len() function with comparisons
4. ✓ All comparisons return bool type
5. ✓ Results correctly predict True/False based on logic

**Key Insight**: Comparisons work with any values — numbers, strings, the results of functions like `len()` — as long as the comparison makes sense for that type.

## Practice: Your Turn

Let's apply what you've learned. Try these exercises in your Python environment:

**Exercise 1: Basic Comparisons**

Create two variables and test all six comparison operators:

```python
a: int = 12
b: int = 8

# Write these comparisons and predict the result before running
result1: bool = a == b      # Predict: False or True?
result2: bool = a != b      # Predict: False or True?
result3: bool = a > b       # Predict: False or True?
result4: bool = a < b       # Predict: False or True?
result5: bool = a >= b      # Predict: False or True?
result6: bool = a <= b      # Predict: False or True?

# Print results
print(f"a == b: {result1}")
print(f"a != b: {result2}")
print(f"a > b: {result3}")
print(f"a < b: {result4}")
print(f"a >= b: {result5}")
print(f"a <= b: {result6}")
```

Were your predictions correct?

**Exercise 2: Type Awareness with Comparisons**

This exercise builds your type-checking mindset:

```python
# Test value equality vs type differences
print("Value equality (values are the same?):")
print(f"7 == 7.0: {7 == 7.0}")      # Predict before running
print(f"0 == 0.0: {0 == 0.0}")      # Predict before running
print(f"100 == 100.0: {100 == 100.0}")  # Predict before running

print("\nType equality (types are the same?):")
print(f"type(7) == type(7.0): {type(7) == type(7.0)}")      # False
print(f"type(0) == type(0.0): {type(0) == type(0.0)}")      # False

print("\nDifferent types entirely:")
print(f"5 == '5': {5 == '5'}")      # Always False
print(f"3.0 == '3.0': {3.0 == '3.0'}")  # Always False
```

What patterns do you notice?

**Exercise 3: Real-World Comparison**

Create a real decision-making scenario:

```python
# Your video rental company: Determine eligibility for different movie ratings
customer_age: int = 14

g_rated: bool = True              # Anyone can watch
pg_rated: bool = customer_age >= 0   # Anyone can watch with parent
pg13_rated: bool = customer_age >= 13    # 13+ can watch
r_rated: bool = customer_age >= 17     # 17+ can watch

print(f"Customer age: {customer_age}")
print(f"Can watch G-rated? {g_rated}")
print(f"Can watch PG-rated? {pg_rated}")
print(f"Can watch PG-13? {pg13_rated}")
print(f"Can watch R-rated? {r_rated}")

# Which movies is your customer NOT allowed to watch?
cannot_watch_r: bool = not r_rated  # This uses 'not' from Chapter 16, but try it!
print(f"\nCannot watch R-rated? {cannot_watch_r}")
```

## Common Pitfalls and How to Avoid Them

**Pitfall 1: Confusing `=` (assignment) with `==` (comparison)**

This is the most common beginner mistake:

```python
x: int = 5

# ❌ Wrong: Using = instead of == for comparison
if x = 5:                    # SyntaxError! This tries to assign, not compare
    print("x is 5")

# ✓ Correct: Using == for comparison
if x == 5:                   # Compares x to 5
    print("x is 5")
```

Remember: `=` changes a value (assignment). `==` asks a question (comparison).

**Pitfall 2: Forgetting that strings and numbers are never equal**

```python
user_input: str = input("Enter your age: ")    # User types "18"
voting_age: int = 18

# ❌ Wrong: Comparing string to int always False
can_vote: bool = user_input == voting_age      # False, even if user types "18"!

# ✓ Correct: Convert string to int first
user_age: int = int(user_input)                # Convert "18" to 18
can_vote_correct: bool = user_age == voting_age    # True
```

**Pitfall 3: Expecting comparison results to be strings**

```python
result: bool = 10 > 5      # Result is True (bool), not "True" (string)
print(type(result))        # <class 'bool'>, not <class 'str'>
```

If you need the word "True" or "False" as text, convert it: `str(result)`.

**Pitfall 4: Testing for multiple conditions without logic operators**

This is previewing Chapter 16, but it's a common pitfall students face:

```python
# ❌ Wrong: This DOESN'T check if x is in range
x: int = 15
if x >= 10, x <= 20:       # SyntaxError! Commas don't work
    print("x is in range")

# ✓ Correct: Use 'and' operator (Chapter 16)
if x >= 10 and x <= 20:    # Both conditions must be true
    print("x is in range")
```

---

## Try With AI

In this section, you'll explore comparison operators with an AI partner. This is where you deepen your understanding by asking questions, discovering edge cases, and seeing how comparisons connect to real-world decision-making.

Your AI companion (Claude Code, Gemini CLI, or ChatGPT) is expert at explaining comparison behavior and helping you understand the logic. Your job is to **ask good questions** and **test the answers**.

### Setup

Open your preferred AI tool:
- **Claude Code** (if installed): `claude-code`
- **Gemini CLI** (if installed): `gemini`
- **ChatGPT**: Visit [chat.openai.com](https://chat.openai.com) in your browser
- **Or your preferred AI companion tool** from earlier lessons

Have Python ready in another window so you can test AI responses immediately.

### Prompt Set (4 Progressive Prompts)

#### Prompt 1: Concept Exploration

**Tell your AI:**

```
I want to understand comparison operators.

- What do they do? (What kind of question do they ask?)
- Why does Python return True or False?
- How is == different from =? This confuses me because they look similar.

I see = in variables and == in... something else. Help me understand the difference.
```

**Expected outcome:** You learn that comparison operators return bool values. You clearly understand the critical distinction between `=` (assignment: "set this variable to a value") and `==` (comparison: "are these values equal?"). You understand that comparisons ask yes/no questions about data.

---

#### Prompt 2: Application to Real Problem

**Tell your AI:**

```
Write Python code that checks if a user can buy a movie ticket.

Requirements:
- movie_age_rating = 13 (the movie requires age 13+)
- user_age = 12

Write a comparison that checks if the user_age is old enough for the movie.
Should it return True or False? Why?

Include type hints and verify the result type with type().
```

**Expected outcome:** You apply comparison operators to a realistic problem. You predict whether the user meets the age requirement. You understand that `user_age >= movie_age_rating` correctly tests eligibility. You see that the result is bool, not a string or number.

**What to validate:**
1. Run the code the AI provides
2. Change the user_age to 13 and 14 — does the result change as expected?
3. Ask follow-up: "What if the movie was rated R (17+)? How would the comparison change?"

---

#### Prompt 3: Edge Case Discovery — Type Equality Surprises

**Tell your AI:**

```
I noticed something confusing. Try these comparisons:
- 5 == 5.0           (int equals float?)
- "5" == 5           (string equals int?)
- True == 1          (boolean equals int?)
- False == 0         (boolean equals int?)

Run each comparison. Which ones return True? Which return False? Why?

What's going on with type equality vs value equality?
```

**Expected outcome:** You discover that Python compares **values** in `==` comparisons. You learn that:
- `5 == 5.0` is True because the values are the same (even though int and float are different types)
- `"5" == 5` is False because string and int are different (Python is strict about type mixing)
- `True == 1` and `False == 0` reveal that bool is a subtype of int (advanced insight)

You understand that this behavior is **correct** — it prevents mistakes from accidental type mixing.

---

#### Prompt 4: Synthesis — Why Learn Comparisons BEFORE If Statements?

**Tell your AI:**

```
I see that comparisons return True or False.

Help me understand: Why teach comparisons in Chapter 15, BEFORE teaching if statements in Chapter 17?

Why not just teach: "if x > 5: do something" and skip the separate comparison lesson?

What's the advantage of learning comparisons as standalone True/False values first?
Connect this to the chapter sequence in a Python learning book.
```

**Expected outcome:** You understand that comparisons are **foundational**. They're not just "code inside if statements" — they're **standalone tools** that return True/False values. You see how Chapter 15 (operators producing True/False) logically prepares for Chapter 17 (using True/False in decisions). You appreciate the learning progression: understand the tool → understand the result → understand how to use the result in decision-making.

**Key insight:** This is learning design. Breaking concepts into layers (comparisons first, then conditional logic) prevents cognitive overload and builds understanding depth.

---

### Safety & Verification Note

When testing AI-generated code:

- **✓ Do**: Run code in your Python environment first before using it
- **✓ Do**: Ask "What happens if I change this value?" to deepen understanding
- **✓ Do**: Check result types with `type()` — this is verification practice
- **✓ Do**: Ask follow-up questions when results surprise you
- **⚠️ Be aware**: Some comparisons might feel wrong (like `5 == 5.0` being True), but they're correct — this is how Python works by design
- **✓ Do**: When confused, ask AI: "Why does Python do this?" rather than assuming it's wrong

Remember: Errors are **not failures**. They're feedback helping you learn. When you get unexpected results, that's Python teaching you how it works.

---
