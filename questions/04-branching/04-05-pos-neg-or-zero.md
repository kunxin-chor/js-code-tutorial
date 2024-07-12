---QUESTION---
---TITLE---
Is It Positive?

---DESCRIPTION---
Write a function, **posOrNeg**, that takes an integer **parameter**.

If the integer is positive, return the string **"+"**.
If the integer is negative, return the string **"-"**.
If the number is 0, return the string "0".

### Examples

```javascript
let result1 = posOrNeg(12);
console.log(result1); // Output: +

let result2 = posOrNeg(-12);
console.log(result2); // Output: -

let result3 = posOrNeg(0);
console.log(result3); // Output: 0
```

---INITIALCODE---
function posOrNeg(num) {
  // Your code here
}

---TESTCASES---
[
  { "func": "posOrNeg(12)", "expected": "+", "type": "return" },
  { "func": "posOrNeg(-12)", "expected": "-", "type": "return" },
  { "func": "posOrNeg(0)", "expected": "0", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to consider how to handle three different cases: positive numbers, negative numbers, and zero. Think about these steps:

1. How can you check if a number is greater than, less than, or equal to zero?
2. What kind of conditional structure would allow you to handle these three separate cases?
3. How will you return the appropriate string for each case?

Remember, you need to return "+" for positive numbers, "-" for negative numbers, and "0" for zero.

---HINTS---
- The `if...else if...else` structure can be useful when you have more than two conditions to check.
- Be careful not to confuse the number 0 with the string "0" in your comparisons.
- Remember that any number greater than 0 is positive, and any number less than 0 is negative.

---SOLUTION---
function posOrNeg(num) {
  if (num > 0) {
    return "+";
  } else if (num < 0) {
    return "-";
  } else {
    return "0";
  }
}

---EXPLANATION---
This solution uses an `if...else if...else` structure to handle the three possible cases:

1. If the number is greater than 0, it returns "+".
2. Else, if the number is less than 0, it returns "-".
3. If neither of these conditions are true, it means the number must be 0, so it returns "0".

The `>` and `<` operators are used to compare the number with 0. For more information on comparison operators in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).