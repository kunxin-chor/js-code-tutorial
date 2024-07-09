---QUESTION---
---TITLE---
Calculating the Area of a Circle

---DESCRIPTION---
In this exercise, you'll practice using mathematical operations and constants in JavaScript to calculate the area of a circle.

The area of a circle is calculated using the formula: area = π * radius * radius

Your task is to:
1. Create a variable `pi` and assign it the value 3.14
2. Create a variable `radius` and assign it the value 23
3. Create a variable `areaOfCircle` and assign it the calculated area of the circle
4. Use `console.log` to display the value of `areaOfCircle`

This exercise will help you understand:
- How to use mathematical constants in JavaScript
- How to perform calculations using variables
- How to use the multiplication operator

---INITIALCODE---
// Your code here


// Do not modify the code below this line
console.log(areaOfCircle);

---TESTCASES---
[
  { "func": "", "expected": "1661.06", "type": "console" }
]

---EXPLANATION---
This problem introduces you to using mathematical constants and formulas in JavaScript. Here's what you need to do:

1. Declare a variable `pi` and assign it the value 3.14 (a common approximation of π).
2. Declare a variable `radius` and assign it the value 23.
3. Declare a variable `areaOfCircle` and calculate the area using the formula: π * radius * radius.
4. The `console.log` statement at the end will display the value of `areaOfCircle`.

This exercise helps you practice:
- Using mathematical constants
- Applying mathematical formulas in code
- Performing multiplication with variables

Note: In real-world applications, you might use `Math.PI` for a more precise value of π, but for this exercise, we're using the approximation 3.14.

The test case rounds the result to two decimal places to account for potential floating-point precision issues.

---SOLUTION---
const pi = 3.14;
const radius = 23;
const areaOfCircle = pi * radius * radius;

// Do not modify the code below this line
console.log(areaOfCircle);