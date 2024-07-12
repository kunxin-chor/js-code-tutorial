---QUESTION---
---TITLE---
If/Else Statement Practice

---DESCRIPTION---
Write if/else statements for each function so that they will return "Bad!" when the condition is true, and "Good!" when the condition is false. 

Note:
- Only change the sections with `???`.

Hint: 
- Use the following symbols where appropriate: +, -, /, *, !, >, <, <=, >=, ==, != 

---INITIALCODE---
let x = 11;
let y = 9;
let firstName = "Danny";
let temperature = 33;
let isCrowded = true;
let haveSeats = false;
let haveDiscount = true;

function condition1() {
  // Write an if/else statement that returns "Bad!" when x - y > 0, and "Good!" otherwise
  ???
}

function condition2() {
  // Write an if/else statement that returns "Bad!" when x - temperature <= 0, and "Good!" otherwise
  ???
}

function condition3() {
  // Write an if/else statement that returns "Bad!" when x + y == 20, and "Good!" otherwise
  ???
}

function condition4() {
  // Write an if/else statement that returns "Bad!" when haveDiscount is true, and "Good!" otherwise
  ???
}

function condition5() {
  // Write an if/else statement that returns "Bad!" when !isCrowded equals haveSeats, and "Good!" otherwise
  ???
}

function condition6() {
  // Write an if/else statement that returns "Bad!" when temperature is 33, and "Good!" otherwise
  ???
}

function condition7() {
  // Write an if/else statement that returns "Bad!" when temperature - y >= 12, and "Good!" otherwise
  ???
}

---TESTCASES---
[
  { "func": "condition1()", "expected": "Bad!", "type": "return" },
  { "func": "condition2()", "expected": "Bad!", "type": "return" },
  { "func": "condition3()", "expected": "Bad!", "type": "return" },
  { "func": "condition4()", "expected": "Bad!", "type": "return" },
  { "func": "condition5()", "expected": "Bad!", "type": "return" },
  { "func": "condition6()", "expected": "Bad!", "type": "return" },
  { "func": "condition7()", "expected": "Bad!", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to structure if/else statements and how to use various JavaScript operators. Consider these points:

1. What is the basic structure of an if/else statement?
2. How do you use the given condition in the if statement?
3. How do you return different values based on whether the condition is true or false?

Think about each condition separately and how you can structure an if/else statement to return "Bad!" when the condition is true and "Good!" when it's false.

---HINTS---
- The basic structure of an if/else statement is:
  ```javascript
  if (condition) {
    // code to run if condition is true
  } else {
    // code to run if condition is false
  }
  ```
- Remember to use return statements inside your if and else blocks.
- Pay attention to the specific condition given for each function.
- For boolean variables like haveDiscount, you don't need to use a comparison operator in the condition.

---SOLUTION---
let x = 11;
let y = 9;
let firstName = "Danny";
let temperature = 33;
let isCrowded = true;
let haveSeats = false;
let haveDiscount = true;

function condition1() {
  if (x - y > 0) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition2() {
  if (x - temperature <= 0) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition3() {
  if (x + y == 20) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition4() {
  if (haveDiscount) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition5() {
  if (!isCrowded == haveSeats) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition6() {
  if (temperature == 33) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

function condition7() {
  if (temperature - y >= 12) {
    return "Bad!";
  } else {
    return "Good!";
  }
}

---EXPLANATION---
In this solution, each function contains an if/else statement that checks the given condition. If the condition is true, it returns "Bad!". If the condition is false, it returns "Good!".

1. condition1 checks if x - y is greater than 0.
2. condition2 checks if x - temperature is less than or equal to 0.
3. condition3 checks if x + y is equal to 20.
4. condition4 checks if haveDiscount is true.
5. condition5 checks if !isCrowded is equal to haveSeats.
6. condition6 checks if temperature is equal to 33.
7. condition7 checks if temperature - y is greater than or equal to 12.

These if/else statements demonstrate how to use conditional logic to return different values based on whether a condition is true or false.

For more information on if...else statements in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).