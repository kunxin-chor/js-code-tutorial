---TITLE---
Grade Letter

---DESCRIPTION---
Write a function called `gradeLetter` that takes a numeric score (0–100) and returns a single-letter grade based on these ranges:

- 90 and above → `"A"`
- 80 to 89 → `"B"`
- 70 to 79 → `"C"`
- 60 to 69 → `"D"`
- Below 60 → `"F"`

This question reviews **multi-way branching** with `if / else if / else`.

---INITIALCODE---
function gradeLetter(score) {
  // Your code here
}

---TESTCASES---
[
  { "func": "gradeLetter(95)", "expected": "A", "type": "return" },
  { "func": "gradeLetter(85)", "expected": "B", "type": "return" },
  { "func": "gradeLetter(72)", "expected": "C", "type": "return" },
  { "func": "gradeLetter(60)", "expected": "D", "type": "return" },
  { "func": "gradeLetter(45)", "expected": "F", "type": "return" }
]

---HINTS---
- Order your `if / else if` checks from highest range to lowest, so each later branch only handles values below the previous threshold.
- Don't forget that boundary values (like 90, 80, 70, 60) belong to the higher grade.

---EXPLANATION---
By checking the highest threshold first, each subsequent `else if` only needs a single upper-bound check.

```javascript
function gradeLetter(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
```

---SOLUTION---
function gradeLetter(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
