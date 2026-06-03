---TITLE---
Sum of Even Numbers

---DESCRIPTION---
Write a function called `sumEven` that takes an array of numbers and returns the sum of only the **even** numbers in the array.

Example:
- `sumEven([1, 2, 3, 4, 5, 6])` → `12` (because 2 + 4 + 6)
- `sumEven([1, 3, 5])` → `0`

This question reviews **arrays**, **loops**, **branching**, and the **modulo operator**.

---INITIALCODE---
function sumEven(arr) {
  // Your code here
}

---BLACKLIST---
[reduce, filter]

---TESTCASES---
[
  { "func": "sumEven([1, 2, 3, 4, 5, 6])", "expected": 12, "type": "return" },
  { "func": "sumEven([1, 3, 5])", "expected": 0, "type": "return" },
  { "func": "sumEven([2, 4, 6, 8])", "expected": 20, "type": "return" },
  { "func": "sumEven([])", "expected": 0, "type": "return" }
]

---HINTS---
- Initialize a `sum` variable to `0`.
- Loop through every element. A number is even if `n % 2 === 0`.
- Add only even numbers to the sum.

---EXPLANATION---
Combine a `for` loop with an `if` check inside.

```javascript
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
```

---SOLUTION---
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
