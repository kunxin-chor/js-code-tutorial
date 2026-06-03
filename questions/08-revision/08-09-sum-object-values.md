---TITLE---
Sum Object Values

---DESCRIPTION---
Write a function called `sumValues` that takes an object whose values are all numbers, and returns the sum of all the values.

Example:
- `sumValues({ a: 1, b: 2, c: 3 })` → `6`
- `sumValues({})` → `0`

This question reviews **objects**, **iterating with `for...in`** (or `Object.values`), and **loops**.

---INITIALCODE---
function sumValues(obj) {
  // Your code here
}

---TESTCASES---
[
  { "func": "sumValues({ a: 1, b: 2, c: 3 })", "expected": 6, "type": "return" },
  { "func": "sumValues({})", "expected": 0, "type": "return" },
  { "func": "sumValues({ x: 10, y: -3, z: 5 })", "expected": 12, "type": "return" }
]

---HINTS---
- `for (let key in obj) { ... }` iterates over each key.
- Use `obj[key]` to access the value for that key.

---EXPLANATION---
You can use `for...in` to walk through the keys of an object, then access values with bracket notation.

```javascript
function sumValues(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}
```

---SOLUTION---
function sumValues(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}
