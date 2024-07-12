---QUESTION---
---TITLE---
Even or Odd

---DESCRIPTION---
Write a function, **evenOrOdd** which takes in one parameter which will be a number.

If the integer is even, return the string **"Even"**, else return the string **"Odd"**.

### Example

```javascript
let result = evenOrOdd(4);
console.log(result);  // Output: Even

result = evenOrOdd(7);
console.log(result);  // Output: Odd
```

---INITIALCODE---
function evenOrOdd(num) {
  // Your code here
}

---TESTCASES---
[
  { "func": "evenOrOdd(4)", "expected": "Even", "type": "return" },
  { "func": "evenOrOdd(7)", "expected": "Odd", "type": "return" },
  { "func": "evenOrOdd(0)", "expected": "Even", "type": "return" },
  { "func": "evenOrOdd(-3)", "expected": "Odd", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to determine if a number is even or odd. Consider these steps:

1. What mathematical property distinguishes even numbers from odd numbers?
2. How can you use this property in a conditional statement?
3. How will you return the appropriate string based on this condition?

---HINTS---
- Remember that even numbers are divisible by 2 with no remainder.
- The modulo operator (%) can be useful for checking divisibility.
- Don't forget to handle both positive and negative integers, as well as zero.

---SOLUTION---
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

---EXPLANATION---
This solution uses the modulo operator (%) to check if the number is divisible by 2:

1. If `num % 2` is 0, it means the number is evenly divisible by 2, so it's even.
2. Otherwise, the number is odd.

The modulo operator returns the remainder after division. For even numbers, this remainder is always 0 when divided by 2.

For more information on the modulo operator in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).