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

---WALKTHROUGH---

The generic structure of a function is:
```javascript
function name(parameters) {
  // body
  return value;
}
```

A *function* is a reusable chunk of code that performs a specific task. It consists of these three components:
1. *The function name:* The name is used in JavaScript to identify the function.
2. *The function body:* The body is the code that defines what the function does.
3. *The function parameters:* The parameters are the values that the function expects to be passed in order to perform its task.
4. *The return value:* The return value is the result the function returns.

So, to answer this question, identify:
- The function name
- The function body
- The function parameters
- The return value

While maintaing the structure of a generic function, answer the question.

---TESTCASES---
[
  { "func": "add(2, 3)", "expected": 5, "type": "return" },
  { "func": "add(-1, 1)", "expected": 0, "type": "return" },
  { "func": "add(0, 0)", "expected": 0, "type": "return" }
]

---EXPLANATION---
Let's breakdown the syntax of the function:
* `function`: This keyword is used to declare a function.
* `add`: This is the name of the function.
* `(a, b)`: These are the parameters of the function.
* `{`: This is the start of the function body.
* `return a + b;`: This is the return value of the function.
* `}`: This is the end of the function body.


### Note on Edge Cases

When implementing this function, consider how it handles:
- Very large numbers (potential overflow)
- Floating point precision issues

---SOLUTION---
function add(a, b) {
  return a + b;
}