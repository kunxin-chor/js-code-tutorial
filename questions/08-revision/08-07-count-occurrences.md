---TITLE---
Count Occurrences

---DESCRIPTION---
Write a function called `countOccurrences` that takes two parameters: an array `arr` and a value `target`. It should return the number of times `target` appears in the array.

Example:
- `countOccurrences([1, 2, 3, 2, 4, 2], 2)` → `3`
- `countOccurrences(["a", "b", "c"], "z")` → `0`

This question reviews **arrays**, **loops**, **branching**, and **strict equality**.

---INITIALCODE---
function countOccurrences(arr, target) {
  // Your code here
}

---BLACKLIST---
[filter]

---TESTCASES---
[
  { "func": "countOccurrences([1, 2, 3, 2, 4, 2], 2)", "expected": 3, "type": "return" },
  { "func": "countOccurrences(['a', 'b', 'c'], 'z')", "expected": 0, "type": "return" },
  { "func": "countOccurrences([true, false, true, true], true)", "expected": 3, "type": "return" },
  { "func": "countOccurrences([], 5)", "expected": 0, "type": "return" }
]

---HINTS---
- Keep a counter starting at 0.
- Loop and use `===` to compare each element to the target.

---EXPLANATION---
A counter pattern: increment whenever a condition is met inside the loop.

```javascript
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
```

---SOLUTION---
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
