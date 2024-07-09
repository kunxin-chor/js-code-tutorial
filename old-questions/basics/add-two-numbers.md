---QUESTION---
---TITLE---
Add Two Numbers

---DESCRIPTION---
Write a function that adds two numbers.

This function should:
- Take two parameters
- Return the sum of these parameters

Remember to consider edge cases such as:
- Negative numbers
- Zero
- Large numbers

### Examples

Here are some examples of how the function should work:
1. `add(2, 3)` should return `5`
2. `add(-1, 1)` should return `0`
3. `add(0, 0)` should return `0`

---INITIALCODE---
function add(a, b) {
  // Your code here
}

---TESTCASES---
[
  { "func": "add(2, 3)", "expected": 5, "type": "return" },
  { "func": "add(-1, 1)", "expected": 0, "type": "return" },
  { "func": "add(0, 0)", "expected": 0, "type": "return" }
]

---EXPLANATION---
The `add` function is a fundamental operation in programming. Here's what it should do:

1. Accept two numbers as parameters.
2. Calculate their sum using the `+` operator.
3. Return the result.

This function can be used as a building block for more complex calculations.

### Note on Edge Cases

When implementing this function, consider how it handles:
- Very large numbers (potential overflow)
- Floating point precision issues

---SOLUTION---
function add(a, b) {
  return a + b;
}