---QUESTION---
---TITLE---
Test Grader

---DESCRIPTION---
Write a function, **testGrader**, which takes in one **integer argument**, representing the score the user has achieved in a test. The function will **return** the letter grade.

Return the achieved grade A+, A, B, C, D, F depending on the chart below:

| Grade | Marks | 
|---|---|
| A+  | >=90 |
| A  | 80 - 89 |
| B  | 70 - 79 |
| C  | 60 - 69 |
| D  | 50 - 59 |
| F  | < 50 |

---INITIALCODE---
function testGrader(score) {
  // Your code here
}

---TESTCASES---
[
  { "func": "testGrader(91)", "expected": "A+", "type": "return" },
  { "func": "testGrader(60)", "expected": "C", "type": "return" },
  { "func": "testGrader(0)", "expected": "F", "type": "return" },
  { "func": "testGrader(85)", "expected": "A", "type": "return" },
  { "func": "testGrader(75)", "expected": "B", "type": "return" },
  { "func": "testGrader(55)", "expected": "D", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to implement a grading system with multiple thresholds. Consider these steps:

1. How can you structure your conditions to cover all the grade ranges?
2. What's the most efficient way to check these conditions?
3. How will you return the appropriate grade for each score range?

Remember, you need to check the score against multiple thresholds: 90, 80, 70, 60, and 50.

---HINTS---
- The `if...else if...else` structure can be useful when you have multiple conditions to check.
- Start with the highest grade and work your way down to ensure correct grading.
- Be careful with the boundaries of each grade range. For example, 80 should be an A, not a B.
- Don't forget to handle scores below 50 with an F grade.

---SOLUTION---
function testGrader(score) {
  if (score >= 90) {
    return "A+";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

---EXPLANATION---
This solution uses an `if...else if...else` structure to handle all the grade ranges:

1. It starts by checking for the highest grade (A+) and works its way down.
2. Each condition checks if the score is greater than or equal to the lower bound of that grade range.
3. If none of the conditions are met, it means the score is below 50, so it returns "F".

The order of the conditions is crucial here. By checking from highest to lowest, we ensure that each score falls into the correct grade range.

For more information on `if...else` statements in JavaScript, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).