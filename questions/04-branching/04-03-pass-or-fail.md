---QUESTION---
---TITLE---
Pass or Fail

---DESCRIPTION---
Write a function, **grade** which has one parameter, `score`. You can assume that `score` will always be a number.

If the `score` is 50 or higher, return the string **"Passed"**, else return the string **"Failed"**.

### Example

```javascript
let result = grade(20);
console.log(result); // Output: Failed
```

---INITIALCODE---
function grade(score) {
  // Your code here
}

---TESTCASES---
[
  { "func": "grade(20)", "expected": "Failed", "type": "return" },
  { "func": "grade(50)", "expected": "Passed", "type": "return" },
  { "func": "grade(75)", "expected": "Passed", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to think about how to use conditional statements in JavaScript. Consider these steps:

1. What type of conditional statement would be appropriate for this situation?
2. How can you check if a number is greater than or equal to another number?
3. What should the function return in each case?

Remember, the goal is to return "Passed" for scores 50 and above, and "Failed" for scores below 50.

---HINTS---
- The `if...else` statement is useful for binary conditions like this.
- Don't forget to use the `return` keyword to output the result from your function.
- Be careful with the exact spelling and capitalization of "Passed" and "Failed".

---SOLUTION---
function grade(score) {
  if (score >= 50) {
    return "Passed";
  } else {
    return "Failed";
  }
}

---EXPLANATION---
This solution uses an `if...else` statement to check the condition. If the score is greater than or equal to 50, it returns "Passed". Otherwise, it returns "Failed".

The `>=` operator is used to check if the score is greater than or equal to 50. This operator returns `true` if the left operand is greater than or equal to the right operand, and `false` otherwise.

For more information on comparison operators in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).