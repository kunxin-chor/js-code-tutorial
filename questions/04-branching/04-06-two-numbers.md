---QUESTION---
---TITLE---
Two Numbers

---DESCRIPTION---
Write a function, **largerOrSmaller**, that takes **two** integer parameters. 

- If the first integer is larger, return "Larger".
- If the second integer is larger, return "Smaller".
- Otherwise, return "Same".

### Examples

```javascript
let result1 = largerOrSmaller(14, 50);
console.log(result1); // Output: Smaller

let result2 = largerOrSmaller(50, 14);
console.log(result2); // Output: Larger

let result3 = largerOrSmaller(14, 14);
console.log(result3); // Output: Same
```

---INITIALCODE---
function largerOrSmaller(num1, num2) {
  // Your code here
}

---TESTCASES---
[
  { "func": "largerOrSmaller(14, 50)", "expected": "Smaller", "type": "return" },
  { "func": "largerOrSmaller(50, 14)", "expected": "Larger", "type": "return" },
  { "func": "largerOrSmaller(14, 14)", "expected": "Same", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to compare two numbers and return a string based on their relationship. Consider these steps:

1. How can you compare two numbers to determine which is larger?
2. What kind of conditional structure would allow you to handle these three separate cases?
3. How will you return the appropriate string for each case?
4. How can you handle the case when both numbers are equal?

Remember, you need to return "Larger" if the first number is larger, "Smaller" if the second number is larger, and "Same" if they are equal.

---HINTS---
- The `if...else if...else` structure can be useful when you have more than two conditions to check.
- Be careful with the order of your comparisons. The problem asks about the first number relative to the second.
- Don't forget to handle the case where the numbers are equal.
- Pay attention to the exact spelling and capitalization of the return strings.

---SOLUTION---
function largerOrSmaller(num1, num2) {
  if (num1 > num2) {
    return "Larger";
  } else if (num1 < num2) {
    return "Smaller";
  } else {
    return "Same";
  }
}

---EXPLANATION---
This solution uses an `if...else if...else` structure to handle the three possible cases:

1. If `num1` is greater than `num2`, it returns "Larger".
2. Else, if `num1` is less than `num2`, it returns "Smaller".
3. If neither of these conditions are true, it means the numbers must be equal, so it returns "Same".

The `>` and `<` operators are used to compare the two numbers. For more information on comparison operators in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).

Note that the order of comparisons matches the problem description: we first check if the first number is larger, then if it's smaller, and finally conclude that they must be the same if neither condition is true.