---TITLE---
Find Maximum

---DESCRIPTION---
Write a function called `findMax` that takes an array of numbers and returns the largest number in the array. You may assume the array has at least one element.

Example:
- `findMax([3, 9, 1, 7, 5])` → `9`
- `findMax([-5, -1, -10])` → `-1`

This question reviews **arrays**, **loops**, and **branching**.

---INITIALCODE---
function findMax(arr) {
  // Your code here
}

---BLACKLIST---
[Math.max, sort]

---TESTCASES---
[
  { "func": "findMax([3, 9, 1, 7, 5])", "expected": 9, "type": "return" },
  { "func": "findMax([-5, -1, -10])", "expected": -1, "type": "return" },
  { "func": "findMax([42])", "expected": 42, "type": "return" },
  { "func": "findMax([1, 2, 3, 4, 5])", "expected": 5, "type": "return" }
]

---HINTS---
- Start by assuming the first element is the largest: `let max = arr[0];`.
- Loop through the rest and update `max` whenever you find a larger value.

---EXPLANATION---
This is the classic "running max" pattern: track the best value seen so far and update it whenever something better appears.

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

---SOLUTION---
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
