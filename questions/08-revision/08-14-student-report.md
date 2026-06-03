---TITLE---
Mini App: Student Report Card

---DESCRIPTION---
You are building a small student-report system. Each student is an object like:

```javascript
{
  name: "Alice",
  scores: { math: 90, science: 80, english: 70 }
}
```

Implement the following three functions:

1. **`average(student)`** — returns the average of all scores in `student.scores`, rounded to **1 decimal place** as a number.
2. **`status(student)`** — returns `"Pass"` if the student's average is **50 or higher**, otherwise `"Fail"`.
3. **`reportCard(student)`** — returns a formatted string in this exact format:

   ```
   <name> | Average: <average> | <status>
   ```

   Example: `"Alice | Average: 80 | Pass"`

This mini-app reviews **objects**, **nested objects**, **iterating object values**, **functions**, **branching**, and **strings**.

---INITIALCODE---
function average(student) {
  // Your code here
}

function status(student) {
  // Your code here
}

function reportCard(student) {
  // Your code here
}

---TESTCASES---
[
  { "func": "average({ name: 'Alice', scores: { math: 90, science: 80, english: 70 } })", "expected": 80, "type": "return" },
  { "func": "average({ name: 'Bob', scores: { math: 40, science: 50, english: 30 } })", "expected": 40, "type": "return" },
  { "func": "average({ name: 'Cara', scores: { math: 75, science: 82 } })", "expected": 78.5, "type": "return" },
  { "func": "status({ name: 'Alice', scores: { math: 90, science: 80, english: 70 } })", "expected": "Pass", "type": "return" },
  { "func": "status({ name: 'Bob', scores: { math: 40, science: 50, english: 30 } })", "expected": "Fail", "type": "return" },
  { "func": "status({ name: 'Edge', scores: { math: 50 } })", "expected": "Pass", "type": "return" },
  { "func": "reportCard({ name: 'Alice', scores: { math: 90, science: 80, english: 70 } })", "expected": "Alice | Average: 80 | Pass", "type": "return" },
  { "func": "reportCard({ name: 'Bob', scores: { math: 40, science: 50, english: 30 } })", "expected": "Bob | Average: 40 | Fail", "type": "return" }
]

---HINTS---
- For `average`, iterate over the score values with `for...in` (or `Object.values`), sum them, then divide by the count of scores.
- Use `Number(value.toFixed(1))` so the average is a number, not a string. Note: `(80).toFixed(1)` is `"80.0"`, but `Number("80.0")` is `80`, which matches the expected `80`.
- Build `reportCard` on top of `average` and `status`. Use a template literal with `${...}`.

---EXPLANATION---
We layer three small functions: a numeric calculation, a decision based on it, and a formatted string that uses both.

```javascript
function average(student) {
  let total = 0;
  let count = 0;
  for (let subject in student.scores) {
    total += student.scores[subject];
    count++;
  }
  const avg = total / count;
  return Number(avg.toFixed(1));
}

function status(student) {
  return average(student) >= 50 ? "Pass" : "Fail";
}

function reportCard(student) {
  return `${student.name} | Average: ${average(student)} | ${status(student)}`;
}
```

`Number((80).toFixed(1))` evaluates to `80` (not `80.0`) because `Number` drops trailing zeros, so the test cases that expect a whole number still pass.

---SOLUTION---
function average(student) {
  let total = 0;
  let count = 0;
  for (let subject in student.scores) {
    total += student.scores[subject];
    count++;
  }
  const avg = total / count;
  return Number(avg.toFixed(1));
}

function status(student) {
  return average(student) >= 50 ? "Pass" : "Fail";
}

function reportCard(student) {
  return `${student.name} | Average: ${average(student)} | ${status(student)}`;
}
