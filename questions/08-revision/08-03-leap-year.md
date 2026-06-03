---TITLE---
Leap Year Checker

---DESCRIPTION---
Write a function called `isLeapYear` that takes a year as a parameter and returns `true` if it is a leap year, otherwise `false`.

A year is a leap year if:
- It is divisible by 4, **AND**
- It is **not** divisible by 100, **OR**
- It is divisible by 400.

Examples:
- `isLeapYear(2000)` → `true` (divisible by 400)
- `isLeapYear(1900)` → `false` (divisible by 100 but not 400)
- `isLeapYear(2024)` → `true` (divisible by 4, not by 100)
- `isLeapYear(2023)` → `false`

This question reviews **branching**, **logical operators**, and the **modulo operator**.

---INITIALCODE---
function isLeapYear(year) {
  // Your code here
}

---TESTCASES---
[
  { "func": "isLeapYear(2000)", "expected": true, "type": "return" },
  { "func": "isLeapYear(1900)", "expected": false, "type": "return" },
  { "func": "isLeapYear(2024)", "expected": true, "type": "return" },
  { "func": "isLeapYear(2023)", "expected": false, "type": "return" },
  { "func": "isLeapYear(2400)", "expected": true, "type": "return" }
]

---HINTS---
- Use the modulo operator `%` to test divisibility. `year % 4 === 0` means divisible by 4.
- Combine the rules with `&&` (AND) and `||` (OR).
- One clean expression: `(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0`.

---EXPLANATION---
The leap year rule has two cases that make a year a leap year:
1. Divisible by 4 but **not** by 100, or
2. Divisible by 400.

We can express this directly as a single boolean expression and return it.

```javascript
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
```

---SOLUTION---
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
