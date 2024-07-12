---QUESTION---
---TITLE---
Comparison Operators

---DESCRIPTION---
In the functions `condition1`, `condition2` and `condition3`, replace `?` with comparison operators so that each function will return true.

---INITIALCODE---
let x = 5;
let y = 33;

function condition1() {
  return x ? 5;
}

function condition2() {
  return y ? 4;
}

function condition3() {
  return x ? y;
}

---TESTCASES---
[
  { "func": "condition1()", "expected": true, "type": "return" },
  { "func": "condition2()", "expected": true, "type": "return" },
  { "func": "condition3()", "expected": true, "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to understand how comparison operators work in JavaScript. Consider these points:

1. What does each comparison operator do?
2. How can you modify each comparison to make it true, given the values of x and y?
3. Remember, you can change the operator or the value being compared, but not the variables x and y.

Think about the relationship between x and y, and how you can use that to create true statements.

---HINTS---
- For condition1, consider what x is equal to and how you can make a true statement about it.
- For condition2, think about y's value and how you can make a true statement comparing it to another number.
- For condition3, remember that == checks for equality. How can you make x and y equal?

---SOLUTION---
let x = 5;
let y = 33;

function condition1() {
  return x >= 5;
}

function condition2() {
  return y > 4;
}

function condition3() {
  return x != y;
}

---EXPLANATION---
In this solution:

1. We changed `x > 5` to `x >= 5` because x is equal to 5, not greater than 5.
2. We changed `y < 4` to `y > 4` because y (33) is greater than 4, not less than 4.
3. We changed `x == y` to `x != y` because x (5) is not equal to y (33).

These changes make each condition evaluate to true.

For more information on comparison operators in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).