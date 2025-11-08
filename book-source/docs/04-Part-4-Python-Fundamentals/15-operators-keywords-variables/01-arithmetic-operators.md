---
title: "Arithmetic Operators — Doing Math with Python"
chapter: 15
lesson: 1
duration_minutes: 50

# HIDDEN SKILLS METADATA (Institutional Integration Layer)
# Not visible to students; enables competency assessment and differentiation
skills:
  - name: "Arithmetic Operations with Type Safety"
    proficiency_level: "A1-A2"
    category: "Technical"
    bloom_level: "Understand + Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can write arithmetic expressions with type hints and use type() to verify result types; perform all 7 arithmetic operations without referencing examples"

  - name: "Understanding Type Hint Feedback from Operations"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can explain why int / int gives float and why int // int gives int using type validation; predict result types before running code"

  - name: "AI-Driven Exploration of Edge Cases"
    proficiency_level: "A2"
    category: "Soft"
    bloom_level: "Apply"
    digcomp_area: "Communication & Collaboration"
    measurable_at_this_level: "Student can formulate questions about operator behavior like 'What happens if I divide by zero?' and validate AI responses through code testing"

learning_objectives:
  - objective: "Explain what each of the seven arithmetic operators (+, -, *, /, //, %, **) does in plain language"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Verbal or written explanation of each operator's purpose and typical use"

  - objective: "Apply arithmetic operators correctly to perform calculations using type hints and validation"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Write expressions with all 7 operators, use type() to verify results, identify correct operations"

  - objective: "Understand how operand types influence result types (int vs float, division behavior)"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Predict and verify result types; explain why / produces float and // produces integer"

cognitive_load:
  new_concepts: 5
  assessment: "5 new concepts (addition, subtraction, multiplication/division/floor-division, modulus, exponentiation) grouped as 'arithmetic family' within A1-A2 limit of 5-7 ✓"

differentiation:
  extension_for_advanced: "Explore operator precedence with complex expressions: `result = 2 + 3 * 4 - (10 / 2)`. Predict the result, then verify with code. Ask AI why multiplication and division happen before addition and subtraction. Research PEMDAS/BODMAS order of operations."
  remedial_for_struggling: "Start with just addition: `x: int = 5; y: int = 3; result: int = x + y; print(result)`. Run it, see the output. Change the numbers. Practice with subtraction. Build confidence with one operator before moving to the next."

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

# Arithmetic Operators — Doing Math with Python

## What Are Arithmetic Operators?

Think of operators as **verbs** in Python. Just like verbs describe actions in English ("run," "jump," "calculate"), operators describe mathematical actions on data. An arithmetic operator performs a calculation on numbers.

In Chapter 14, you learned how to store numbers in variables using type hints. Now it's time to **do things** with those numbers. You'll learn seven operators that let you add, subtract, multiply, divide, find remainders, and raise numbers to powers.

Here's the key insight: **operators are the bridge between stored data and computed results**. When you write `10 + 3`, you're asking Python to compute `13`. That computation is what makes programs useful—they don't just store data, they **transform** it.

## The Seven Arithmetic Operators

Python has seven arithmetic operators that work on numeric types. Let's meet them:

| Operator | Name | What It Does | Example | Result |
|----------|------|--------------|---------|--------|
| `+` | Addition | Adds two numbers | `10 + 3` | `13` |
| `-` | Subtraction | Subtracts one number from another | `10 - 3` | `7` |
| `*` | Multiplication | Multiplies two numbers | `10 * 3` | `30` |
| `/` | Division | Divides one number by another (always float) | `10 / 3` | `3.333...` |
| `//` | Floor Division | Divides and rounds down to nearest integer | `10 // 3` | `3` |
| `%` | Modulus | Finds the remainder after division | `10 % 3` | `1` |
| `**` | Exponentiation | Raises a number to a power | `10 ** 2` | `100` |

Each operator takes two numbers (called **operands**) and produces a result. The result is always a number, but notice something important in the table: the `/` operator always produces a float, even if both operands are integers. We'll explore why in the next section.

## Code Example 1: All Seven Operators

Here's a program that demonstrates all seven arithmetic operators working together:

```python
# Arithmetic operators: doing math with Python
x: int = 10
y: int = 3

# Perform all 7 arithmetic operations
add_result: int = x + y          # 13 - addition
sub_result: int = x - y          # 7 - subtraction
mul_result: int = x * y          # 30 - multiplication
div_result: float = x / y        # 3.333... - division (always float)
floor_result: int = x // y       # 3 - floor division (integer result)
mod_result: int = x % y          # 1 - modulus (remainder)
exp_result: int = x ** 2         # 100 - exponentiation

# Display each result with its type
print(f"Addition: {add_result}, type: {type(add_result)}")
print(f"Subtraction: {sub_result}, type: {type(sub_result)}")
print(f"Multiplication: {mul_result}, type: {type(mul_result)}")
print(f"Division: {div_result}, type: {type(div_result)}")
print(f"Floor Division: {floor_result}, type: {type(floor_result)}")
print(f"Modulus: {mod_result}, type: {type(mod_result)}")
print(f"Exponentiation: {exp_result}, type: {type(exp_result)}")
```

**Specification: Demonstrate all seven arithmetic operators with type verification**

**AI Prompt Used:**
"Write Python code that performs all 7 arithmetic operations on two integers (x=10, y=3). Include type hints for all variables and use type() to verify the result type for each operation. Explain why division gives a different type than floor division."

**Generated Code Output:**
The code above shows the specification and validated implementation.

**Validation Steps:**
1. ✓ All seven operators present and correct
2. ✓ Type hints included for all variables
3. ✓ Division (/) produces float result
4. ✓ Floor division (//) produces int result
5. ✓ Results printed with type verification using type()

## Code Example 2: Understanding Division Behavior

One of the most important insights in this lesson is understanding why Python has **two different division operators** (`/` and `//`). Let's explore this carefully:

```python
# Why division and floor division are different
num1: int = 10
num2: int = 3

# Regular division - ALWAYS returns float
regular_div: float = num1 / num2    # 3.3333... (always float)
print(f"{num1} / {num2} = {regular_div}")
print(f"Type: {type(regular_div)}")  # <class 'float'>

# Floor division - returns integer
floor_div: int = num1 // num2       # 3 (integer result)
print(f"{num1} // {num2} = {floor_div}")
print(f"Type: {type(floor_div)}")    # <class 'int'>

# Edge case: what if both operands are floats?
f1: float = 10.5
f2: float = 3.0

floor_div_float: float = f1 // f2   # 3.0 (still float, not int!)
print(f"\n{f1} // {f2} = {floor_div_float}")
print(f"Type: {type(floor_div_float)}")  # <class 'float'>
```

**Key Insight**: Division `/` always returns a float, even if the operands are integers. Floor division `//` returns an integer when both operands are integers, but returns a float if either operand is a float.

**When do you use each?**

- **Use `/` when you need the exact decimal result**: Calculating an average (`total / count`), dividing money between people, computing percentages
- **Use `//` when you need a whole number result and want to discard the remainder**: Grouping items (10 apples split into groups of 3 = 3 groups), counting complete rounds

## Code Example 3: Order of Operations

In math, you learn that multiplication and division happen before addition and subtraction (PEMDAS/BODMAS). Python follows the same rules:

```python
# Order of operations matters
result1: int = 2 + 3 * 4         # 14, NOT 20
print(f"2 + 3 * 4 = {result1}")  # Multiply 3*4 first (12), then add 2

# Use parentheses to change the order
result2: int = (2 + 3) * 4       # 20
print(f"(2 + 3) * 4 = {result2}")  # Add 2+3 first (5), then multiply by 4

# Real-world example: calculating price with tax
base_price: float = 100.0
tax_rate: float = 0.08
shipping_fee: float = 10.0

# Without parentheses: multiply first, then add
total_with_tax_and_fee: float = base_price * (1 + tax_rate) + shipping_fee
print(f"\nPrice with 8% tax and $10 shipping: ${total_with_tax_and_fee}")  # $118.00

# Compare with wrong order:
total_wrong: float = base_price * 1 + tax_rate + shipping_fee
print(f"Without parentheses: ${total_wrong}")  # $111.08 (incorrect)
```

**When to use parentheses**: Always use parentheses to make your intent clear, even if Python would calculate correctly without them. Future readers (and AI assistants) will understand your code faster.

## Practice: Your Turn

Let's apply what you've learned. Try these exercises in your Python environment:

**Exercise 1: Basic Arithmetic**

Create variables for the temperature in Celsius and Fahrenheit, then calculate the conversion using arithmetic operators:

```python
# Convert Celsius to Fahrenheit: F = (C × 9/5) + 32
celsius: int = 20
fahrenheit: float = (celsius * 9 / 5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
```

Run this code. What is the result? What type is `fahrenheit`? Why float instead of int?

**Exercise 2: Working with Modulus**

The modulus operator `%` is often overlooked, but it's incredibly useful. Try this:

```python
# Check if a number is even (divisible by 2)
number: int = 17
remainder: int = number % 2

if remainder == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
```

Run this with different numbers (18, 25, 100, 13). What pattern do you notice about the remainder?

**Exercise 3: Type Awareness**

This exercise builds your validation-first mindset:

```python
# Prediction: What types will these results have?
a: int = 8
b: int = 2

result1 = a + b         # Predict the type before looking
result2 = a / b         # Predict the type before looking
result3 = a // b        # Predict the type before looking
result4 = a * b         # Predict the type before looking

# Now verify your predictions
print(f"a + b = {result1}, type: {type(result1)}")
print(f"a / b = {result2}, type: {type(result2)}")
print(f"a // b = {result3}, type: {type(result3)}")
print(f"a * b = {result4}, type: {type(result4)}")

# Were your predictions correct? Ask AI why if any surprised you.
```

## Common Pitfalls and How to Avoid Them

**Pitfall 1: Expecting `/` to return an integer**

Many beginners expect `10 / 3` to return `3` (integer), but it returns `3.333...` (float). If you need an integer result, use `//` instead.

**Pitfall 2: Forgetting about order of operations**

Writing `2 + 3 * 4` is not the same as `(2 + 3) * 4`. Python uses the same order of operations as math (PEMDAS). Use parentheses to be explicit.

**Pitfall 3: Mixing int and float without realizing**

When you perform arithmetic on mixed types (int and float), the result is float:

```python
int_value: int = 5
float_value: float = 2.0
result: float = int_value / float_value  # Result is float, not int
```

**Pitfall 4: Misusing modulus**

Modulus `%` is NOT for percentages. It returns the **remainder** after division:

```python
# ❌ Wrong: This gives the remainder, not 20% of 100
percentage: int = 100 % 20  # Gives 0 (remainder of 100 ÷ 20)

# ✓ Correct: To get 20% of 100, multiply by the decimal
percentage_correct: float = 100 * 0.20  # Gives 20.0
```

---

## Try With AI

In this final section, you'll explore arithmetic operators with an AI partner. This is where you build your **specification skills** — learning to ask productive questions about operator behavior, then validating the answers by running code.

Your AI companion (Claude Code, Gemini CLI, or ChatGPT) is expert at explaining operator behavior, edge cases, and helping you understand why Python works the way it does. Your job is to **ask good questions** and **test the answers**.

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
I want to understand why Python has both / and // operators.
- What does / do?
- What does // do?
- When would I use one instead of the other?
```

**Expected outcome:** You learn that `/` always returns float (exact division), while `//` returns integer (floor division that discards the decimal). You understand the use cases: `/` for precise calculations, `//` for counting in groups.

---

#### Prompt 2: Application to Real Problem

**Tell your AI:**

```
Write Python code that:
- Takes two integers: price = 50, tax_rate = 0.08
- Calculates total_price = price * (1 + tax_rate)
- Uses type hints for all variables
- Verifies result type with type()

Show me the code. Is total_price a float or int? Why?
```

**Expected outcome:** You apply arithmetic operators to a real problem (calculating price with tax). You observe that multiplying int by float gives float. You understand **why** result types change based on operand types.

**What to validate:**
1. Run the code the AI provides
2. Check that total_price is indeed a float
3. Ask follow-up: "What if I used integer math instead (without 0.08)? Would the type change?"

---

#### Prompt 3: Edge Case Discovery

**Tell your AI:**

```
I'm experimenting with arithmetic operations. What happens if I try:
- 10 / 0
- 10.5 % 3
- 2 ** 100
- 0.1 + 0.2

Show me the results. Which ones cause errors? Which are surprising?
```

**Expected outcome:** You discover:
- Division by zero causes `ZeroDivisionError` (normal error, not a Python failure)
- Modulus works with floats (you can find remainder of 10.5 ÷ 3)
- Exponentiation can produce very large numbers (2^100 is massive)
- Floating point precision surprises students (0.1 + 0.2 ≠ 0.3 exactly)

**What to validate:**
1. Run each operation yourself
2. See the error or result
3. Ask follow-up: "Is ZeroDivisionError something to fear, or just a normal error to handle?"

---

#### Prompt 4: Synthesis and Connection to Chapter 14

**Tell your AI:**

```
I learned in Chapter 14 that Python has different data types (int, float, str, bool).
Now I see that operators interact with these types in interesting ways.

Help me understand:
- Why does int / int give float?
- What happens when I add int + float?
- Should I always use type() after operations to verify what I got?

Connect this to type hints from Chapter 14. How do type hints help me predict what operators will do?
```

**Expected outcome:** You synthesize understanding: operators **transform data types**. Type hints from Chapter 14 now serve a new purpose — they help you **predict** what an operation will produce. You recognize that validation with `type()` is a professional practice: don't assume, verify.

**Key insight:** Type hints are specifications. `result: float = 10 / 3` says "I expect this to be float." When you validate with `type(result)`, you're testing your specification against reality.

---

### Safety & Verification Note

When testing AI-generated code:

- **✓ Do**: Run code in your Python environment first before using it
- **✓ Do**: Ask "What happens if I change this value?" to deepen understanding
- **✓ Do**: Check result types with `type()` — this is verification practice
- **⚠️ Be aware**: Division by zero and very large exponents can cause errors, but these are learning opportunities, not dangers
- **✓ Do**: Ask follow-up questions to AI when results surprise you

Remember: Errors are **not failures**. They're feedback from Python helping you learn. When your code produces a `ZeroDivisionError`, that's Python saying, "Division by zero isn't defined in math—let's talk about what you meant to do."

---
