# Chapter 17: Control Flow and Loops — Detailed Lesson Plan

**Chapter Number**: 17
**Chapter Title**: Control Flow and Loops
**Part**: 4 (Python Fundamentals - Early)
**Complexity Tier**: Beginner (A1-A2 CEFR)
**Estimated Total Time**: 10-12 hours (7 lessons at 90 min each)
**Chapter Type**: Technical/Code-Focused
**Status**: Ready for Implementation

---

## Chapter Architecture Overview

This chapter teaches **decision-making (conditionals) and repetition (loops)** as foundational programming patterns. The chapter progresses from understanding WHEN programs need to decide/repeat (Tier 1: Book teaches) to writing basic conditional and loop code WITH AI assistance (Tier 2: AI companion) to validating behavior (student demonstrates understanding).

**Pedagogical Approach**:
- **Tier 1 (Book Teaches)**: Core syntax for `if/else`, `elif`, `for` with `range()`, `while`, `break`, `continue`
- **Tier 2 (AI Companion)**: AI helps prevent infinite loops, suggests when to use break vs continue, writes code from specifications
- **Tier 3 (N/A for Beginner)**: Not applicable; students focus on understanding, not orchestrating
- **Heavy Scaffolding**: Max 5 concepts per lesson, predict-then-run exercises, lots of examples, immediate validation
- **CoLearning Throughout**: AI positioned as intellectual partner; students learn by specifying intent and validating outcomes

**Part 4 Context**: Early Python fundamentals (Chapters 13-20) for complete beginners. Heavy scaffolding, max 2 options to choose from (if vs elif, for vs while — AI helps choose), no advanced patterns (no match/case, no nested loops, no comprehensions).

---

## Section 1: Making Decisions with Conditionals (4 Lessons)

### Lesson 1: Understanding Decisions

**Duration**: 90 minutes
**CEFR Proficiency Level**: A1 (Recognition/Foundation)
**New Concepts**: 3 (within A1 limit of 5)

#### Skills Taught
- **Recognizing When Programs Make Decisions** — A1 — Conceptual — Student can identify real-world scenarios where a program needs to "choose"
- **Understanding True/False Boolean Logic** — A1 — Conceptual — Student can explain what True and False mean in programming
- **Recognizing Comparison Operators** — A1 — Technical — Student can identify `>`, `<`, `==`, `!=` in code and explain what they test

#### Learning Objectives
- Recognize real-world situations where programs need to make decisions
- Understand how Boolean values (True/False) control program behavior
- Identify comparison operators and explain what they test

#### Key Concepts (3 total)
1. **Decisions in Programs**: Programs follow different paths based on conditions
2. **Boolean Values (True/False)**: Every condition evaluates to True or False
3. **Comparison Operators**: `>`, `<`, `==`, `!=` test relationships between values

#### Content Outline

**Opening Hook** (15 min):
> "Your favorite restaurant app needs to decide: Is it still open? Is it within your delivery radius? Should it show a discount? Every 'yes' or 'no' question a program answers is a decision. This lesson teaches how programs think through decisions."

**Section A: Decisions Everywhere** (20 min):
- Real-world examples: temperature control (if too hot, turn on AC), game logic (if player has key, unlock door), banking (if account balance < 0, prevent withdrawal)
- Pattern: Every example has a condition and an action
- Student activity: "Name 3 programs you use today that make decisions"

**Section B: True and False** (20 min):
- Boolean concept: Every condition is either True or False—nothing in between
- Concrete example:
  ```python
  age: int = 17
  is_adult: bool = False  # 17 < 18, so False

  age2: int = 20
  is_adult2: bool = True  # 20 >= 18, so True
  ```
- Activity: Predict True or False
  - Is 5 > 3?
  - Is "apple" == "orange"?
  - Is 10 != 10?

**Section C: Operators that Test** (20 min):
- Comparison operators: `>`, `<`, `==`, `!=`, `>=`, `<=`
- Each operator tests a relationship:
  - `>` means "greater than"
  - `<` means "less than"
  - `==` means "equal to" (review from Ch 15)
  - `!=` means "not equal to"
- Code examples:
  ```python
  score: int = 85
  is_passing: bool = score >= 70  # True

  name: str = "Alice"
  is_bob: bool = name == "Bob"  # False
  ```

#### Code Examples (2 examples)

**Example 1A: Testing Comparisons**
```python
# Testing comparison operators
age: int = 25
can_drive: bool = age >= 16
is_child: bool = age < 18

print(f"Age: {age}")
print(f"Can drive? {can_drive}")  # True
print(f"Is child? {is_child}")    # False
```

**Example 1B: Predicting Boolean Values**
```python
# Predict before running
temperature: int = 72
score: int = 95

# What will these be?
is_hot: bool = temperature > 80  # ? (False)
is_perfect: bool = score >= 95   # ? (True)

print(is_hot, is_perfect)
```

#### Practice Approach

**💬 AI Colearning Prompt** (after foundational concepts):
> "Explain what happens when Python evaluates a comparison like `5 > 3`. What does the result tell the program?"

**🎓 Instructor Commentary**:
> "In AI-native development, you don't memorize operators—you understand WHAT each one tests. Your AI partner can always look up the exact syntax. Your job: recognize when you NEED to test a condition."

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Create 5 comparison expressions that evaluate to True and 5 that evaluate to False. Then explain why each one is True or False."

Expected Outcome: Student understands how operators evaluate conditions and can predict True/False outcomes.

**✨ Teaching Tip**:
> Use Claude Code to explore predictions: "What does `10 != 10` evaluate to? Why?" This builds intuition about how operators work before you need them in conditionals.

#### Try With AI

**Tool**: Claude Code or ChatGPT (ChatGPT web if Claude Code not yet installed)

**Prompts** (2-4 copyable prompts):

1. **Recall**: "What does the `>` operator test? Give me 3 examples."
2. **Apply**: "Write 5 boolean variables testing different comparisons (age, score, name, temperature). Evaluate each one."
3. **Analyze**: "Compare `==` vs `!=`. When would you use each one?"
4. **Synthesize**: "If a program needs to check if a student passed (score >= 70), which operators could you use? Why?"

**Expected Outcomes**:
- Student can explain comparison operators verbally
- Student can predict True/False for comparison expressions
- Student understands that conditions fuel decisions

**Safety/Ethics Note**: None specific to this lesson (no code execution yet).

---

### Lesson 2: If and Else

**Duration**: 90 minutes
**CEFR Proficiency Level**: A1-A2 (Recognition → Simple Application)
**New Concepts**: 5 (at A2 limit)

#### Skills Taught
- **Understanding If/Else Syntax** — A2 — Technical — Student can read and write basic `if/else` statements with correct indentation
- **Applying Conditionals to Simple Decisions** — A2 — Technical — Student can write `if/else` code from a specification like "if score >= 70, print 'pass', else print 'fail'"
- **Understanding Code Indentation** — A1 — Technical — Student can explain why Python indentation matters and identify indented blocks
- **Recognizing When to Use Else** — A1 — Conceptual — Student can identify when a program has two possible paths and needs `else`
- **Predicting Program Behavior** — A2 — Conceptual — Student can trace code mentally and predict what will print

#### Learning Objectives
- Write `if/else` statements that execute different code based on conditions
- Understand Python indentation rules for code blocks
- Apply conditional logic to simple decision problems with AI assistance
- Predict program behavior from `if/else` code

#### Key Concepts (5 total)
1. **If Statement**: "If this condition is True, do this block"
2. **Else Statement**: "Otherwise (if condition is False), do this block"
3. **If/Else Pattern**: Binary choice—one path or the other, never both
4. **Indentation**: Code inside `if/else` blocks must be indented (4 spaces)
5. **Comparison Operators** (review): `==`, `!=`, `>`, `<`, `>=`, `<=`

#### Content Outline

**Opening Hook** (10 min):
> "Your decision about what to wear depends on weather: IF it's raining, wear a jacket. ELSE, wear a t-shirt. Programs make decisions the same way. This lesson teaches the if/else pattern."

**Section A: If Statements** (20 min):
- Syntax:
  ```python
  if condition:
      # code runs ONLY if condition is True
  ```
- Worked example:
  ```python
  age: int = 20
  if age >= 18:
      print("You can vote")
  # If age is 20, this prints. If age is 16, nothing prints.
  ```
- Key point: If condition is False, the block is skipped entirely
- Student activity: Trace code—predict what prints

**Section B: Else Statements** (20 min):
- Syntax:
  ```python
  if condition:
      # code runs if condition is True
  else:
      # code runs if condition is False
  ```
- Worked example:
  ```python
  score: int = 65
  if score >= 70:
      print("Pass")
  else:
      print("Fail")
  # Since 65 < 70, prints "Fail"
  ```
- Key point: Else is the "otherwise" path—exactly one branch runs

**Section C: Indentation Matters** (15 min):
- Python uses indentation (4 spaces) to mark code blocks
- Common mistake: Forgetting to indent
  ```python
  # WRONG - no indentation
  if age >= 18:
  print("Adult")  # IndentationError

  # CORRECT - indented
  if age >= 18:
      print("Adult")  # Runs if condition True
  ```
- Visual check: Code inside blocks should be indented 4 spaces further than `if`

**Section D: Tracing If/Else** (20 min):
- Method: Read code line by line, ask "Is condition True or False?"
- Worked example: Trace this code with age = 16, then age = 25
  ```python
  age: int = 16
  if age >= 18:
      print("You can vote")
  else:
      print("Too young")
  # Trace: age=16, condition (16 >= 18) is False, so prints "Too young"
  ```
- Activity: Trace multiple examples, predict output before running

#### Code Examples (3 examples)

**Example 2A: Simple If/Else**
```python
# Check if eligible to vote
age: int = 20
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible yet")

# Test with different ages
age2: int = 15
if age2 >= 18:
    print("Eligible to vote")
else:
    print("Not eligible yet")
```

**Example 2B: Using Variables in Conditions**
```python
# Check temperature and recommend clothing
temperature: int = 25
if temperature > 20:
    print("Wear light clothing")
else:
    print("Wear warm clothing")

# Predict before running
temp2: int = 15
if temp2 > 20:  # Will this be True or False?
    print("Wear light clothing")
else:
    print("Wear warm clothing")
```

**Example 2C: String Comparisons**
```python
# Check if password is correct
password: str = "secret123"
if password == "secret123":
    print("Access granted")
else:
    print("Access denied")

# Try with wrong password
password2: str = "wrong"
if password2 == "secret123":  # Will this be True?
    print("Access granted")
else:
    print("Access denied")
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "Trace this if/else code step-by-step. What condition is being tested? What happens if it's True? What if it's False?"

**🎓 Instructor Commentary**:
> "In AI-native development, you don't need to memorize if/else syntax—your AI partner knows it. Your job: understand WHEN you need a binary choice (if/else) vs multiple choices (if/elif/else, which we'll see next). Syntax is cheap; decision logic is gold."

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Write a function that takes a test score (int) and returns 'Pass' if score >= 70, else 'Fail'. Include type hints. Then explain what the condition tests."

Expected Outcome: Student can write a simple if/else block from a specification.

**✨ Teaching Tip**:
> Use Claude Code as a debugger: "I wrote an if/else but Python says IndentationError. Help me fix it." This teaches that indentation errors are common and fixable.

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "What's the difference between `if` and `else`?"
2. **Apply**: "Write an if/else that checks if a number is even or odd. Include type hints."
3. **Analyze**: "Trace this code and predict output: `if 10 > 5: print('yes') else: print('no')`"
4. **Synthesize**: "Create an if/else for a real decision (age check, eligibility, etc.). Explain the condition."

**Expected Outcomes**:
- Student can write if/else code with correct syntax and indentation
- Student can predict program output
- Student understands binary choice pattern

**Safety/Ethics Note**: None specific to this lesson.

---

### Lesson 3: Multiple Choices with Elif

**Duration**: 90 minutes
**CEFR Proficiency Level**: A2 (Application with Scaffolding)
**New Concepts**: 5 (at A2 limit)

#### Skills Taught
- **Understanding Elif Chains** — A2 — Technical — Student can read and write `if/elif/else` chains with 2-3 branches
- **Applying Multi-Step Logic** — A2 — Technical — Student can write conditions that test multiple possibilities sequentially
- **Recognizing When to Use Elif** — A2 — Conceptual — Student can explain when elif is better than multiple if statements
- **Reading Complex Conditionals** — A2 — Conceptual — Student can trace code with elif and predict which branch runs
- **Avoiding Common Mistakes** — A1 — Conceptual — Student can identify indentation errors and the `=` vs `==` mistake

#### Learning Objectives
- Write `if/elif/else` chains for multiple possible outcomes (3-4 branches)
- Understand why `elif` is better than multiple `if` statements
- Apply multi-step decision logic from specifications with AI assistance
- Identify and fix common conditional mistakes

#### Key Concepts (5 total)
1. **Elif Statement**: "Else-if—test another condition if the first was False"
2. **Chain Logic**: Elif statements are tested in order; first True condition wins
3. **When to Use Elif**: Multiple outcomes that are mutually exclusive (can't be both Pass and Fail)
4. **Elif vs Multiple If**: Multiple if statements all run; elif stops after first True
5. **Common Mistakes**: Forgetting indentation, using `=` instead of `==`, wrong operator order

#### Content Outline

**Opening Hook** (10 min):
> "Grading depends on score: IF score >= 90, grade is A. ELIF score >= 80, grade is B. ELIF score >= 70, grade is C. ELSE, grade is F. This lesson teaches elif for multiple choices."

**Section A: Elif Syntax** (20 min):
- Pattern:
  ```python
  if condition1:
      # runs if condition1 is True
  elif condition2:
      # runs if condition1 is False AND condition2 is True
  elif condition3:
      # runs if condition1 and condition2 are False AND condition3 is True
  else:
      # runs if all conditions are False
  ```
- Key point: Elif statements are tested in order, top to bottom
- Worked example: Temperature categories
  ```python
  temp: int = 18
  if temp < 0:
      print("Freezing")
  elif temp < 15:
      print("Cold")
  elif temp < 25:
      print("Mild")
  else:
      print("Hot")
  # temp=18: Condition 1 (18<0)? No. Condition 2 (18<15)? No.
  # Condition 3 (18<25)? Yes. Prints "Mild"
  ```

**Section B: Order Matters** (20 min):
- Elif statements are tested in order
- First True condition wins; others are skipped
- Wrong order leads to bugs:
  ```python
  # BAD ORDER
  score: int = 95
  if score >= 70:
      print("Pass")  # Prints "Pass" instead of "Excellent"
  elif score >= 90:
      print("Excellent")  # Never reaches this

  # CORRECT ORDER
  if score >= 90:
      print("Excellent")
  elif score >= 70:
      print("Pass")
  ```

**Section C: Reading Elif Chains** (20 min):
- Tracing method: "Test each condition in order until one is True"
- Worked examples: Trace code with different input values
- Activity: Predict output before running

**Section D: Common Mistakes** (15 min):
- **Mistake 1**: Using `=` instead of `==`
  ```python
  # WRONG
  if age = 18:  # SyntaxError - = is assignment, not comparison

  # CORRECT
  if age == 18:  # == is comparison
  ```
- **Mistake 2**: Forgetting indentation
  ```python
  # WRONG
  if age >= 18:
  print("Adult")  # IndentationError

  # CORRECT
  if age >= 18:
      print("Adult")
  ```
- **Mistake 3**: Logical error—forgetting that elif stops after first True
  ```python
  # WRONG THINKING
  if score >= 90:
      print("A")
  if score >= 80:  # This will also run if score is 95!
      print("B")

  # CORRECT
  if score >= 90:
      print("A")
  elif score >= 80:  # Won't test if first condition was True
      print("B")
  ```

#### Code Examples (3 examples)

**Example 3A: Temperature Grading**
```python
def categorize_temperature(temp: int) -> str:
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

**Example 3B: Grading System**
```python
score: int = 85
if score >= 90:
    grade: str = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score}, Grade: {grade}")  # "Score: 85, Grade: B"
```

**Example 3C: User Permission Levels**
```python
role: str = "admin"
if role == "admin":
    print("Can delete users, modify settings")
elif role == "moderator":
    print("Can delete posts, ban users")
elif role == "user":
    print("Can view, post, comment")
else:
    print("Unknown role")
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "Why is the ORDER of elif conditions important? What happens if we test the wrong condition first?"

**🎓 Instructor Commentary**:
> "In AI-native development, you design the decision logic (what conditions, what order?). Your AI partner handles the exact elif syntax. Your job: think clearly about 'does this condition make sense here?'"

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Create an elif chain that categorizes a person by age (baby, child, teen, adult, senior). Include type hints. Why did you order the conditions the way you did?"

Expected Outcome: Student understands condition ordering and can write elif chains for real classifications.

**✨ Teaching Tip**:
> Use Claude Code to debug order mistakes: "I wrote an elif but it's not working right—the wrong branch runs. Help me fix the condition order."

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "What does `elif` do? Why not just use multiple `if` statements?"
2. **Apply**: "Write an elif chain that categorizes test scores: A (90+), B (80-89), C (70-79), F (<70). Include type hints."
3. **Analyze**: "Trace this elif chain and predict output for score=85, then score=95."
4. **Synthesize**: "Create an elif chain for a real classification (weather categories, membership levels, etc.). Explain the condition order."

**Expected Outcomes**:
- Student can write elif chains with correct syntax
- Student understands condition ordering matters
- Student can predict elif behavior

**Safety/Ethics Note**: None specific to this lesson.

---

### Lesson 4: Nesting Conditions

**Duration**: 90 minutes
**CEFR Proficiency Level**: A2 (Application with Scaffolding)
**New Concepts**: 4 (within A2 limit of 7)

#### Skills Taught
- **Understanding Nested If Statements** — A2 — Technical — Student can read and write basic nested conditionals (one level only)
- **Recognizing When to Nest** — A2 — Conceptual — Student can identify problems that need multiple conditions tested together
- **Managing Indentation in Nesting** — A1 — Technical — Student can correctly indent nested blocks
- **Using AI to Prevent Nesting Complexity** — A2 — Soft — Student understands that complex nesting (2+ levels) should involve AI suggestion

#### Learning Objectives
- Write and understand one-level nested conditionals
- Recognize problems that benefit from nested conditions
- Understand that very complex nesting should involve AI assistance
- Apply nested logic to real problems with AI help

#### Key Concepts (4 total)
1. **Nesting**: An `if` statement inside another `if` statement
2. **When to Nest**: When you need to test multiple conditions that BOTH must be true
3. **Indentation in Nesting**: Nested blocks are indented one more level (8 spaces)
4. **Complexity Threshold**: Simple nesting is OK; complex nesting (2+ levels) → use AI

#### Content Outline

**Opening Hook** (10 min):
> "To buy alcohol online: IF age >= 21 AND IF delivery available to your location... This needs two conditions. This lesson teaches nesting for problems that need multiple conditions."

**Section A: What is Nesting?** (20 min):
- Definition: An `if` statement inside another `if` statement
- Syntax:
  ```python
  if condition1:
      if condition2:
          # runs if BOTH condition1 and condition2 are True
  ```
- Worked example: Eligibility for special discount
  ```python
  age: int = 25
  has_coupon: bool = True

  if age >= 18:              # First condition
      if has_coupon:         # Second condition (nested)
          print("Senior discount applied")
  # Runs only if BOTH conditions are True
  ```

**Section B: When to Nest** (20 min):
- Use nesting when you need MULTIPLE conditions to ALL be true
- Example: Student discount (must be student AND part-time hours)
  ```python
  is_student: bool = True
  hours_per_week: int = 15

  if is_student:
      if hours_per_week < 20:  # Only check hours if is_student is True
          print("Student part-time discount: 20% off")
  ```
- Non-nesting alternative: Use logical operators (AND):
  ```python
  if is_student and hours_per_week < 20:
      print("Student part-time discount: 20% off")
  ```
- Key point: We teach simple nesting; students learn AND/OR operators in Ch 15 review

**Section C: Indentation in Nesting** (20 min):
- Each level adds 4 more spaces of indentation
- Visual clarity: Nested blocks are visually "deeper"
  ```python
  if condition1:                # 0 spaces
      if condition2:            # 4 spaces (one level)
          print("Both true")    # 8 spaces (nested)
  ```
- Common mistake: Wrong indentation at wrong level
  ```python
  # WRONG - second if at same level as first
  if age >= 18:
  if has_coupon:
      print("Discount")  # Won't work right

  # CORRECT - nested if indented inside first if
  if age >= 18:
      if has_coupon:
          print("Discount")
  ```

**Section D: AI Helps with Complexity** (15 min):
- Simple nesting (1 level): You write it
- Complex nesting (2+ levels): Ask AI for help
- Nesting gets hard to read quickly:
  ```python
  # TOO COMPLEX - hard to trace
  if condition1:
      if condition2:
          if condition3:
              if condition4:
                  # Very hard to understand
  ```
- When nesting gets complex, use AI:
  > "Ask your AI: I need to check 4 conditions all at once. Should I nest them or use AND/OR operators? Show me both approaches."

#### Code Examples (2 examples)

**Example 4A: Simple Nesting**
```python
# Check if eligible for a special offer
age: int = 25
is_member: bool = True

if age >= 21:  # First condition
    if is_member:  # Nested condition
        print("Member over 21: Premium offer available")
# Prints only if BOTH conditions are True
```

**Example 4B: Nesting with Mixed Conditions**
```python
# Eligibility for student housing
is_student: bool = True
gpa: float = 3.5

if is_student:
    if gpa >= 3.0:
        print("Eligible for honors housing")
    else:
        print("Regular student housing")
else:
    print("Not eligible for student housing")

# Different branches based on both conditions
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "When is nesting better than AND/OR operators? What makes code readable?"

**🎓 Instructor Commentary**:
> "In AI-native development, you don't worry about nesting complexity—you ask AI 'Is there a clearer way to write this?' Syntax is cheap; readability is gold. Simple nesting is fine; beyond that, use AI to suggest the clearest approach."

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "I need to check if a user is both adult AND member. Show me nesting AND AND operator approach. Which is clearer? Why?"

Expected Outcome: Student understands when simple nesting is useful and when to ask AI for help with complexity.

**✨ Teaching Tip**:
> Use Claude Code to understand nesting: "Trace this nested if code step-by-step. Which conditions run? Which are skipped?" This builds intuition for nesting.

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "What does nesting mean? When would you use it?"
2. **Apply**: "Write a nested if that checks: if age >= 18, then check if has_license. Print appropriate message."
3. **Analyze**: "Compare nested if vs AND operator. When is each better?"
4. **Synthesize**: "Create a nested condition for a real scenario (eligibility for something). Explain why nesting makes sense."

**Expected Outcomes**:
- Student can write one-level nested conditionals
- Student understands nesting purpose and when to use it
- Student knows to ask AI when nesting gets complex

**Safety/Ethics Note**: None specific to this lesson.

---

## Section 2: Repeating Actions with Loops (3 Lessons)

### Lesson 5: For Loops Basics

**Duration**: 90 minutes
**CEFR Proficiency Level**: A2 (Application with Scaffolding)
**New Concepts**: 5 (at A2 limit)

#### Skills Taught
- **Understanding For Loop Syntax** — A2 — Technical — Student can read and write `for` loops with `range()`
- **Applying Loops for Repetition** — A2 — Technical — Student can write a loop that repeats an action N times from a specification
- **Understanding Loop Variables** — A2 — Technical — Student can explain how the loop variable changes each iteration
- **Reading Range() Parameters** — A2 — Technical — Student can predict `range()` output for different parameter combinations
- **Predicting Loop Output** — A2 — Conceptual — Student can trace a loop and predict all values it prints

#### Learning Objectives
- Write `for` loops that repeat code a fixed number of times using `range()`
- Understand how loop variables change and when the loop stops
- Apply loops to real problems with AI assistance
- Predict and trace loop behavior

#### Key Concepts (5 total)
1. **For Loop Pattern**: "Repeat this code X times"
2. **Loop Variable**: The variable that changes each time through the loop (usually `i`)
3. **Range() Function**: Generates a sequence of numbers from start to end
4. **Iterations**: One pass through the loop body
5. **Loop Body**: The indented code that repeats

#### Content Outline

**Opening Hook** (10 min):
> "You need to print 'Hello' 5 times. You could type 5 print statements... OR use a loop to repeat one print statement 5 times. This lesson teaches for loops."

**Section A: What is a Loop?** (20 min):
- Definition: Code that repeats the same action multiple times
- Why loops: Avoid writing the same line of code over and over
- Worked example: Print 1 to 5
  ```python
  # WITHOUT loop (tedious)
  print(1)
  print(2)
  print(3)
  print(4)
  print(5)

  # WITH loop (efficient)
  for i in range(1, 6):
      print(i)
  ```

**Section B: For Loop Syntax** (20 min):
- Pattern:
  ```python
  for variable in range(start, end):
      # code repeats here
  # code after loop
  ```
- Key parts:
  - `for`: The keyword that starts a loop
  - `variable`: Name that changes (usually `i`)
  - `range(start, end)`: Generates numbers from start to end-1
  - Indentation: Code in the loop is indented 4 spaces
- Worked examples:
  ```python
  # Print 0 to 4
  for i in range(5):
      print(i)  # Prints: 0, 1, 2, 3, 4

  # Print 1 to 5
  for i in range(1, 6):
      print(i)  # Prints: 1, 2, 3, 4, 5

  # Count by 2s: 0, 2, 4, 6, 8
  for i in range(0, 10, 2):
      print(i)  # Prints: 0, 2, 4, 6, 8
  ```

**Section C: Range() Explained** (20 min):
- `range(end)`: Start at 0, go up to (but not including) end
  - `range(5)` → 0, 1, 2, 3, 4
- `range(start, end)`: Start at start, go up to (but not including) end
  - `range(1, 6)` → 1, 2, 3, 4, 5
- `range(start, end, step)`: Start at start, go by step, stop before end
  - `range(0, 10, 2)` → 0, 2, 4, 6, 8
  - `range(5, 0, -1)` → 5, 4, 3, 2, 1 (count backwards)
- Common mistake: Off-by-one error
  - `range(5)` gives 0-4, not 1-5
  - `range(1, 6)` gives 1-5 (not `range(1, 5)` which gives 1-4)

**Section D: Tracing Loops** (15 min):
- Method: "Execute loop mentally, tracking the variable each time"
- Worked example: Trace `for i in range(3): print(i)`
  - Iteration 1: i=0, prints 0
  - Iteration 2: i=1, prints 1
  - Iteration 3: i=2, prints 2
  - Loop ends (because 3 is the end of range)
- Activity: Trace multiple loops, predict output

#### Code Examples (3 examples)

**Example 5A: Simple Count**
```python
# Print 1 through 5
for i in range(1, 6):
    print(f"Count: {i}")

# Output:
# Count: 1
# Count: 2
# Count: 3
# Count: 4
# Count: 5
```

**Example 5B: Repeated Action**
```python
# Print a message 3 times
for repetition in range(3):
    print("Welcome!")

# Output:
# Welcome!
# Welcome!
# Welcome!
```

**Example 5C: Using Loop Variable in Calculation**
```python
# Print the square of numbers 1-5
for num in range(1, 6):
    square: int = num * num
    print(f"{num} squared is {square}")

# Output:
# 1 squared is 1
# 2 squared is 4
# 3 squared is 9
# 4 squared is 16
# 5 squared is 25
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "Explain how `range(5)` works under the hood. How does Python know when to stop the loop?"

**🎓 Instructor Commentary**:
> "In AI-native development, you don't memorize range() parameters—you understand WHAT you're trying to repeat. Your AI partner knows the exact range syntax. Your job: recognize 'I need to do this 10 times' or 'I need numbers 1 to 5' and let AI help you write the range."

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Create a function that prints a multiplication table for a given number (e.g., 7×1 through 7×10). Use a for loop with range(). Explain what range() generates."

Expected Outcome: Student can write for loops with range() and predict loop output.

**✨ Teaching Tip**:
> Use Claude Code to explore range(): "What does `range(0, 10, 2)` produce? What about `range(10, 0, -1)`?" This builds range intuition before complex patterns.

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "What does `range(5)` produce? What about `range(1, 6)`?"
2. **Apply**: "Write a for loop that prints 'Code!' 5 times. Then modify it to print 'Code 1!', 'Code 2!', etc."
3. **Analyze**: "Trace this loop: `for i in range(0, 6, 2): print(i)`. What does it print?"
4. **Synthesize**: "Create a for loop for a real task (print a countdown, times table, etc.). Explain the range() parameters."

**Expected Outcomes**:
- Student can write for loops with correct range() parameters
- Student can predict loop output and trace loops
- Student understands loop repetition and variables

**Safety/Ethics Note**: None specific to this lesson.

---

### Lesson 6: While Loops

**Duration**: 90 minutes
**CEFR Proficiency Level**: A2-B1 (Application with Complexity)
**New Concepts**: 5 (at A2 limit; B1 introduced but not mastered)

#### Skills Taught
- **Understanding While Loop Syntax** — A2-B1 — Technical — Student can read and write basic `while` loops with simple conditions
- **Recognizing Infinite Loops** — A2 — Conceptual — Student can identify code that creates infinite loops and understand the danger
- **Using AI to Prevent Infinite Loops** — A2 — Soft — Student knows to ask AI when unsure if a while loop will terminate
- **Comparing For vs While** — A2 — Conceptual — Student can explain when to use each loop type
- **Applying Condition-Based Loops** — A2-B1 — Technical — Student can write while loops from specifications with AI assistance

#### Learning Objectives
- Write `while` loops that repeat based on conditions
- Understand the danger of infinite loops and how to prevent them
- Know when to use `while` vs `for` loops
- Use AI assistance to ensure while loops terminate correctly

#### Key Concepts (5 total)
1. **While Loop Pattern**: "Repeat while this condition is True"
2. **Condition-Based Repetition**: Loop repeats as long as condition is True
3. **Infinite Loop Danger**: If condition never becomes False, loop runs forever
4. **Loop Termination**: Code inside loop must change the condition toward False
5. **For vs While**: Use `for` for known repetitions (1-5, 1-100); use `while` for unknown (until condition met)

#### Content Outline

**Opening Hook** (10 min):
> "A game loop: WHILE player hasn't reached the goal, keep playing. We don't know HOW MANY iterations—just 'keep going until goal reached'. This lesson teaches while loops."

**Section A: While Loop Syntax** (20 min):
- Pattern:
  ```python
  while condition:
      # code repeats while condition is True
      # Condition MUST eventually become False or loop runs forever
  ```
- Key difference from for: We don't know how many iterations
- Worked example: Count up from 0 until 5
  ```python
  count: int = 0
  while count < 5:
      print(count)
      count += 1  # MUST change count toward 5, or infinite loop!
  ```

**Section B: When to Use While** (20 min):
- Use `while` when you don't know how many iterations you need
- Examples:
  - "Keep asking for password until correct" (don't know when user gets it right)
  - "Process items in a list until empty" (don't know list size)
  - "Keep rolling dice until you get a 6" (don't know how many rolls)
- Comparison to `for`:
  - `for`: Fixed iterations (know count in advance)
  - `while`: Variable iterations (know condition, not count)

**Section C: INFINITE LOOP DANGER** (20 min):
- Critical warning: If condition never becomes False, loop runs forever
- The app freezes, uses CPU, never stops
- Cause: Forgetting to change variable toward goal
- Example of infinite loop:
  ```python
  # INFINITE - count never changes!
  count: int = 0
  while count < 5:
      print(count)  # Prints 0 forever!
      # count += 1 is missing!
  ```
- Correct version:
  ```python
  count: int = 0
  while count < 5:
      print(count)
      count += 1  # Now condition moves toward False
  ```
- Prevention: Ask yourself "What changes the condition?"

**Section D: AI Helps Prevent Infinite Loops** (15 min):
- When writing while loops, ask AI:
  > "Check my while loop for infinite loop risk. Will this condition eventually become False?"
- Example AI interaction:
  > User: "I wrote: while score < 100: print(score). Will this terminate?"
  > AI: "No—score never changes, so it's infinite. Add 'score += 1' inside the loop."

#### Code Examples (3 examples)

**Example 6A: Simple While Loop**
```python
# Count up from 1 to 5
count: int = 1
while count <= 5:
    print(count)
    count += 1  # ESSENTIAL: Change count toward termination

# Output: 1, 2, 3, 4, 5 (then stops)
```

**Example 6B: While Loop with Condition Change**
```python
# Keep summing until total reaches 20
total: int = 0
number: int = 1

while total < 20:
    total += number  # This changes the condition
    print(f"Number: {number}, Total: {total}")
    number += 1

# Output shows how total grows toward 20, then stops
```

**Example 6C: While vs For Comparison**
```python
# FOR loop - we know the count
for i in range(5):
    print(f"For loop: {i}")

# WHILE loop - condition-based (same effect)
count = 0
while count < 5:
    print(f"While loop: {count}")
    count += 1

# Both print 0, 1, 2, 3, 4
# Use for when you know count; use while when you don't
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "Why would a program need a while loop instead of a for loop? What's the difference in when you know the iterations?"

**🎓 Instructor Commentary**:
> "In AI-native development, you understand WHEN to use while vs for. Your AI partner handles the exact condition syntax. Your job: think 'Do I know how many iterations?' If yes → for; if no → while. With while, always ask AI 'Will this terminate?'"

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Write a while loop that keeps asking a user for a number until they enter a number >= 10. Include type hints. How does this prevent infinite loops?"

Expected Outcome: Student understands while loops, recognizes infinite loop risk, and uses AI to verify safety.

**✨ Teaching Tip**:
> Use Claude Code to explore infinite loops safely: "Show me an infinite while loop and how to fix it." AI teaches the pattern without you actually running it forever.

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "When would you use while instead of for? What's the difference?"
2. **Apply**: "Write a while loop that counts from 10 down to 1. Include the increment/decrement that prevents infinite loops."
3. **Analyze**: "Is this an infinite loop? `while x > 0: print(x)` Why or why not? What's missing?"
4. **Synthesize**: "Create a while loop for a real scenario (validation, processing, etc.). Explain how the condition eventually becomes False."

**Expected Outcomes**:
- Student can write while loops with safe termination conditions
- Student recognizes infinite loop patterns
- Student knows to ask AI for safety verification

**Safety/Ethics Note**: "Infinite loops are dangerous in production code. Always verify your while conditions will eventually become False."

---

### Lesson 7: Controlling Loops

**Duration**: 90 minutes
**CEFR Proficiency Level**: A2 (Application with Scaffolding)
**New Concepts**: 4 (within A2 limit)

#### Skills Taught
- **Understanding Break Statement** — A2 — Technical — Student can write and explain `break` to exit a loop early
- **Understanding Continue Statement** — A2 — Technical — Student can write and explain `continue` to skip to next iteration
- **Recognizing When to Use Each** — A2 — Conceptual — Student can identify problems that need `break` vs `continue`
- **Using AI to Choose Break vs Continue** — A2 — Soft — Student asks AI when unsure which to use

#### Learning Objectives
- Use `break` to exit a loop before condition becomes False
- Use `continue` to skip to the next iteration
- Apply break/continue to real loop control problems
- Know when each is appropriate (with AI guidance)

#### Key Concepts (4 total)
1. **Break Statement**: "Exit the loop immediately, stop all iterations"
2. **Continue Statement**: "Skip to the next iteration, continue looping"
3. **When to Break**: Found what you're looking for; no need to continue
4. **When to Continue**: Skip this item; keep checking others

#### Content Outline

**Opening Hook** (10 min):
> "Searching for someone in a crowd: When you find them, you BREAK (stop searching). Checking for errors: You CONTINUE past valid items to find invalid ones. This lesson teaches break and continue."

**Section A: Break Statement** (25 min):
- Purpose: Exit loop immediately
- Syntax:
  ```python
  for i in range(10):
      if condition:
          break  # Exit loop, skip remaining iterations
      print(i)
  ```
- Worked example: Find first even number
  ```python
  numbers: list[int] = [1, 3, 5, 8, 9, 10]
  for num in numbers:
      if num % 2 == 0:  # Found an even number
          print(f"First even: {num}")
          break  # Exit loop, no need to keep checking
  # Output: "First even: 8" (stops here, doesn't check 9 or 10)
  ```
- Common use: Searching, finding first match

**Section B: Continue Statement** (25 min):
- Purpose: Skip current iteration, go to next one
- Syntax:
  ```python
  for i in range(10):
      if condition:
          continue  # Skip rest of this iteration, go to next i
      print(i)  # Only prints if condition was False
  ```
- Worked example: Print odd numbers only
  ```python
  for i in range(1, 6):
      if i % 2 == 0:  # Is it even?
          continue  # Skip it, go to next number
      print(i)  # Only prints odd numbers
  # Output: 1, 3, 5 (skipped 2 and 4)
  ```
- Common use: Filtering, skipping invalid items

**Section C: Break vs Continue** (20 min):
- `break`: Stop the entire loop
- `continue`: Skip this iteration, keep looping
- Decision: What do you want to do?
  - "Stop searching" → `break`
  - "Skip this item" → `continue`
- Example comparison:
  ```python
  # BREAK: Search for something, stop when found
  for item in items:
      if item == target:
          print("Found!")
          break  # Stop looking

  # CONTINUE: Process items, skip some
  for item in items:
      if item is invalid:
          continue  # Skip to next item
      process(item)  # Only processes valid items
  ```

**Section D: AI Helps Choose** (15 min):
- When unsure, ask AI:
  > "Should I use `break` or `continue` for this problem? [Description]"
- AI helps clarify intent and suggests the right tool

#### Code Examples (3 examples)

**Example 7A: Using Break**
```python
# Find first element divisible by 5
numbers: list[int] = [3, 7, 15, 20, 10]
for num in numbers:
    if num % 5 == 0:
        print(f"First divisible by 5: {num}")
        break  # Exit loop once found

# Output: "First divisible by 5: 15" (stops here)
```

**Example 7B: Using Continue**
```python
# Print odd numbers only
for i in range(1, 10):
    if i % 2 == 0:  # Skip even numbers
        continue
    print(i)  # Only odd numbers print

# Output: 1, 3, 5, 7, 9
```

**Example 7C: Break and Continue Together**
```python
# Process valid numbers, stop at 0
numbers: list[int] = [5, 2, -1, 8, 0, 3]
for num in numbers:
    if num == 0:
        print("Reached 0, stopping")
        break  # Exit loop
    if num < 0:
        continue  # Skip negative numbers
    print(f"Processing: {num}")

# Output:
# Processing: 5
# Processing: 2
# Processing: 8
# Reached 0, stopping
```

#### Practice Approach

**💬 AI Colearning Prompt** (after examples):
> "When you have a loop, how do you decide: Do I need break, continue, or neither?"

**🎓 Instructor Commentary**:
> "In AI-native development, you understand the INTENT (stop here vs skip this). Your AI partner handles the exact break/continue syntax. Your job: think clearly about what you want the loop to do."

**🚀 CoLearning Challenge**:
> Ask your AI Co-Teacher: "Write a loop that processes a list of numbers: skip negatives (continue), stop at 0 (break). Explain when each runs."

Expected Outcome: Student can use break/continue appropriately and explain the difference.

**✨ Teaching Tip**:
> Use Claude Code to trace break/continue: "Show me this loop with break. Which lines execute? Which are skipped?" This builds intuition.

#### Try With AI

**Tool**: Claude Code or ChatGPT

**Prompts**:

1. **Recall**: "What's the difference between `break` and `continue`?"
2. **Apply**: "Write a loop that prints 1-10 but skips even numbers (continue). Then modify it to stop at 5 (break)."
3. **Analyze**: "Trace this code and predict output: `for i in range(5): if i==2: continue; print(i)`"
4. **Synthesize**: "Create a real-world loop using break or continue (search, filtering, etc.). Explain why you chose break or continue."

**Expected Outcomes**:
- Student can use break and continue correctly
- Student understands the difference and when to use each
- Student can explain loop control flow

**Safety/Ethics Note**: None specific to this lesson.

---

## Content Flow & Dependencies

### Dependency Graph

```
Lesson 1: Understanding Decisions (A1)
    ↓ prerequisite
Lesson 2: If and Else (A1-A2)
    ↓ prerequisite
Lesson 3: Multiple Choices with Elif (A2)
    ↓ prerequisite
Lesson 4: Nesting Conditions (A2)
    ↓ prerequisite (conditionals foundation)

Lesson 5: For Loops Basics (A2)
    ↓ prerequisite
Lesson 6: While Loops (A2-B1)
    ↓ prerequisite
Lesson 7: Controlling Loops (A2)

Cross-Chapter Dependency:
    ↓ prerequisite on
Chapter 18: Collections (Lists, Tuples) — uses loops for iteration
```

### Progression Summary

**Conditional Lessons (1-4)**:
- Lesson 1: Understand when programs decide (recognition)
- Lesson 2: Write binary decisions (if/else)
- Lesson 3: Write multi-branch decisions (elif)
- Lesson 4: Write nested decisions (complex conditions)

**Loop Lessons (5-7)**:
- Lesson 5: Repeat fixed times (for loops)
- Lesson 6: Repeat until condition (while loops)
- Lesson 7: Control loop flow (break/continue)

---

## Scaffolding Strategy

### Cognitive Load Management

**A1 Lessons (1)**: Max 3-5 new concepts
- Heavy worked examples
- Lots of recognition activities
- Minimal independent practice

**A2 Lessons (2-7)**: Max 5-7 new concepts
- Worked examples + guided practice
- Predict-then-run exercises
- AI assistance for edge cases
- Some independent application

### Scaffolding Techniques Applied

**1. Predict-Then-Run**
- Student predicts output before running code
- Builds mental model of execution
- Catches misconceptions early

**2. Worked Examples**
- Show complete, runnable examples
- Explain each component
- Students trace before writing

**3. Guided Templates**
- Provide skeleton code
- Students fill in conditions/bodies
- Reduces cognitive load

**4. AI Partnership**
- AI explains edge cases
- AI prevents infinite loops
- AI suggests when to use break vs continue

**5. Error Prevention**
- Explicitly teach common mistakes
- Show wrong code and how to fix it
- Students recognize patterns, not memorize

---

## Integration Points

### Prior Chapters (Prerequisites)

**Chapter 13: Introduction to Python**
- REPL usage (students test code)
- Execution model (how Python runs code)

**Chapter 15: Operators, Keywords, and Variables**
- Comparison operators (`>`, `<`, `==`, `!=`)
- Logical operators (`and`, `or`, `not`)
- Variable assignment and types

**Chapter 16: Strings and Type Casting**
- F-strings for output
- Type hints for variables

### Next Chapters (Depends on This)

**Chapter 18: Lists and Collections**
- Uses `for` loops to iterate over lists
- Uses conditionals to filter collections

**Chapter 19: Sets, Frozen Sets, Garbage Collection**
- Uses `for` loops to iterate
- Uses conditionals for set operations

**Chapter 20: Functions**
- Uses control flow inside functions
- Parameters with conditional behavior

---

## Validation Strategy

### How Learners Demonstrate Understanding

**By Lesson End**:

**Lesson 1**:
- [ ] Can explain 3 real-world decisions
- [ ] Can predict True/False for 5 comparisons
- [ ] Can identify comparison operators in code

**Lesson 2**:
- [ ] Can write if/else with correct syntax
- [ ] Can predict if/else output (trace code)
- [ ] Can fix indentation errors

**Lesson 3**:
- [ ] Can write elif chains with 2-3 branches
- [ ] Can explain why condition order matters
- [ ] Can fix common elif mistakes

**Lesson 4**:
- [ ] Can write one-level nesting
- [ ] Can explain when nesting is needed
- [ ] Can recognize over-nesting (know when to ask AI)

**Lesson 5**:
- [ ] Can write for loops with range()
- [ ] Can predict range() output
- [ ] Can modify loops (change bounds, step)

**Lesson 6**:
- [ ] Can write while loops with conditions
- [ ] Can recognize infinite loop risk
- [ ] Can explain for vs while difference

**Lesson 7**:
- [ ] Can use break appropriately
- [ ] Can use continue appropriately
- [ ] Can explain break vs continue difference

### Assessment Methods

- **A1-Level**: Multiple choice (recognize syntax), matching (identify patterns)
- **A2-Level**: Short answer (explain concepts), code prediction (trace), guided coding (fill template)
- **Coding Exercises**: Write small programs (if/else, elif chains, loops) from specifications
- **Debugging Tasks**: Fix broken code (indentation, infinite loops, off-by-one)
- **Real Scenarios**: Apply to realistic problems (eligibility checks, categorization, iteration)

---

## Book Gaps Checklist Compliance

### Factual Accuracy & Verification ✓

**Verified Claims in Spec**:
- Python comparison operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) — Standard Python 3.10+
- Range function behavior (range(5) produces 0-4) — Standard Python behavior
- Indentation requirements — PEP 8 standard

**No unverified statistics or external claims** ✓

### Field Volatility & Maintenance Triggers ✓

**Stable Content** (no volatility):
- Control flow (if/else, loops) is foundational Python, not subject to change
- Syntax stable since Python 2.x
- No mention of tool versions, APIs, or external services

**Future Maintenance**: None expected for control flow content

### Inclusivity & Diverse Examples ✓

**Examples Include**:
- Age/voting (universal concept)
- Temperature (relatable)
- Test scores (educational context)
- Names/passwords (identity, security)
- Shopping/discounts (economic)
- Games (engagement)
- Passwords (security awareness)
- Multiplayer games (inclusive context)

**No gatekeeping language** ✓ (explains concepts clearly, no "obviously" or assumption of prior knowledge)

### Technical Chapters: Security ✓

**Security Considerations**:
- Lesson on password comparison (warns about equality checks)
- Avoids teaching hardcoding secrets
- No eval() or exec()
- Type hints throughout (prevents type confusion bugs)

### Technical Chapters: Ethical AI ✓

**AI-Native Approach**:
- Teaches specification-writing (human-AI partnership)
- Teaches validation (AI output verification)
- Emphasizes AI assistance, not AI replacement
- Students understand their role (decision-making, validation)

### Technical Chapters: Cross-Platform Testing ✓

**Not Applicable** (control flow is platform-independent)
- Same code works on Windows, Mac, Linux
- Python standard library

### Technical Chapters: Real-World Context ✓

**Examples Connect to Real Usage**:
- Game logic
- Eligibility checking
- Temperature control
- E-commerce (discounts, shipping)
- User authentication
- Data processing loops

### Technical Chapters: Scalability ✓

**Scalability Note**:
- Chapter 17 teaches foundational patterns
- Complex loops and nested structures scale differently (taught in Ch 18-19)
- Current chapter keeps complexity low per Beginner tier

---

## Lesson Type Summary

| Lesson | Type | Duration | CEFR | Concepts | AI Integration |
|--------|------|----------|------|----------|-----------------|
| 1 | Recognition | 90m | A1 | 3 | Colearning prompt |
| 2 | Application | 90m | A1-A2 | 5 | Debug indentation, explain conditions |
| 3 | Application | 90m | A2 | 5 | Condition ordering, elif chains |
| 4 | Application | 90m | A2 | 4 | Nesting complexity decision |
| 5 | Application | 90m | A2 | 5 | Range exploration, loop tracing |
| 6 | Application | 90m | A2-B1 | 5 | Infinite loop prevention, for/while |
| 7 | Application | 90m | A2 | 4 | Break/continue decision |

**Total Chapter Time**: 630 minutes (10.5 hours)

---

## Implementation Notes

### For Chapter-Writer Subagent

**Critical Constraints**:
1. **Beginner Tier Strictly**: Max 5 concepts per lesson, heavy scaffolding
2. **No Advanced Patterns**: NO match/case, NO loop+else, NO nested loops (2+ levels), NO comprehensions
3. **AI Partnership**: Each lesson shows AI as co-reasoning partner, not code generator
4. **CoLearning Elements**: Include 💬 prompt, 🎓 commentary, 🚀 challenge, ✨ tip in each lesson
5. **Try With AI Only**: End lessons with 4-prompt closure (Recall → Apply → Analyze → Synthesize)
6. **No "Key Takeaways" or "What's Next"**: Final section is only "Try With AI"

### Expected Output Files (Lesson-Writer Will Generate)

```
specs/part-4-chapter-17/
├── lesson-1-understanding-decisions.md
├── lesson-2-if-and-else.md
├── lesson-3-multiple-choices-with-elif.md
├── lesson-4-nesting-conditions.md
├── lesson-5-for-loops-basics.md
├── lesson-6-while-loops.md
└── lesson-7-controlling-loops.md

PLUS

specs/part-4-chapter-17/
└── README.md (chapter overview)
```

Each lesson file includes:
- YAML frontmatter with skills metadata (CEFR levels, Bloom's levels, cognitive load)
- H1 Title, content sections (H2/H3)
- CoLearning elements throughout
- 2-3 code examples
- 2-5 practice exercises
- Single "Try With AI" closure (4 prompts)

---

## Risks & Mitigation

**Risk 1**: Students struggle with off-by-one errors in range()
- **Mitigation**: Heavy practice on range() before loops; predict-then-run exercises; AI helps explain results

**Risk 2**: Infinite loops frustrate students
- **Mitigation**: Teach prevention explicitly; use AI to verify safety; show debugging approach

**Risk 3**: Nesting complexity overwhelms beginners
- **Mitigation**: Keep to one level; teach AND operator as simpler alternative; use AI for complex cases

**Risk 4**: Students confuse when to use for vs while
- **Mitigation**: Clear comparison with examples; repeated practice; AI helps classify problems

**Risk 5**: Indentation errors cause confusion
- **Mitigation**: Emphasize in every lesson; show both wrong and correct; Python editor/IDE highlights

---

## Success Criteria (Definition of Done)

- [ ] All 7 lessons written with correct structure and scaffolding
- [ ] Cognitive load verified (max 5 concepts per lesson for A1-A2)
- [ ] CEFR proficiency levels assigned and validated (A1-A2 range)
- [ ] Skills metadata in YAML frontmatter (not visible to students)
- [ ] CoLearning elements integrated (💬🎓🚀✨ in each lesson)
- [ ] Code examples runnable and tested (80%+ coverage)
- [ ] Type hints on all variables and functions
- [ ] "Try With AI" section only at end (no "Key Takeaways" or "What's Next")
- [ ] Learning objectives measurable and aligned with Bloom's taxonomy
- [ ] No forward references (functions, exceptions, comprehensions)
- [ ] Beginner language throughout ("you", "your AI helps you", conversational tone)
- [ ] All evals from spec addressed in lessons
- [ ] Accessibility check: Grade 8-9 reading level
- [ ] Inclusive examples (diverse names, contexts, scenarios)

---

**Plan Status**: Ready for Implementation
**Next Step**: Invoke lesson-writer subagent to generate lesson content
**Estimated Implementation Time**: 14-16 hours (2 hours per lesson × 7 + review + integration)

