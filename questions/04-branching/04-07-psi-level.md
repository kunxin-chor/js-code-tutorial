---QUESTION---
---TITLE---
PSI Levels

---DESCRIPTION---
Write a function that when given a `PSI` level, dtermine the air quality using the rules below:
- If it is equal or above 100, print **"unhealthy"**
- If it is equal or above 50 but below 100, print **"moderate"**
- Otherwise, if the PSI is less than 50, print **"healthy"**

### Example

```
const level = 120;
const result = checkPSI(level);
console.log(result); // should get "unhealthy"
```

---INITIALCODE---

function checkPSI(psi) {
  // Your code here
}

---TESTCASES---
[
  { "func": "checkPSI(120)", "expected": "unhealthy", "type": "return" },
  { "func": "checkPSI(75)", "expected": "moderate", "type": "return" },
  { "func": "checkPSI(30)", "expected": "healthy", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to handle user input and implement multiple condition checks. Consider these steps:

1. How can you get user input in JavaScript?
2. How do you convert a string input to a floating-point number?
3. What kind of conditional structure would allow you to handle these three separate cases?
4. How will you print the appropriate string for each case?

Remember, you need to check the PSI level against two thresholds: 100 and 50.

---HINTS---
- Use `parseFloat()` to convert the input string to a floating-point number.
- The `if...else if...else` structure can be useful when you have more than two conditions to check.
- Be careful with the order of your comparisons. Start with the highest threshold.

---SOLUTION---
function checkPSI(psi) {
  if (psi >= 100) {
    return "unhealthy";
  } else if (psi >= 50) {
    return "moderate";
  } else {
    return "healthy";
  }
}

---EXPLANATION---
The solution code uses an `if...else if...else` structure to handle the three cases:
   - If PSI is 100 or above, it returns "unhealthy".
   - Else, if PSI is 50 or above (but less than 100, because of the previous condition), it returns "moderate".
   - If neither of these conditions are true, it means PSI is below 50, so it returns "healthy".

Note the order of the conditions: we check for the highest threshold first, then the next highest. This order is important to correctly categorize all PSI levels.