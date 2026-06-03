---TITLE---
Rectangle Area and Perimeter

---DESCRIPTION---
Write a function called `rectangleStats` that takes two parameters, `width` and `height`, and returns an array containing two values: the area and the perimeter of the rectangle, in that order.

Example:
- Input: `rectangleStats(4, 5)`
- Output: `[20, 18]`

This question reviews **variables**, **arithmetic operators**, **functions**, and **arrays**.

---INITIALCODE---
function rectangleStats(width, height) {
  // Your code here
}

---TESTCASES---
[
  { "func": "rectangleStats(4, 5)", "expected": [20, 18], "type": "return" },
  { "func": "rectangleStats(10, 2)", "expected": [20, 24], "type": "return" },
  { "func": "rectangleStats(7, 7)", "expected": [49, 28], "type": "return" }
]

---HINTS---
- The area of a rectangle is `width * height`.
- The perimeter is `2 * (width + height)`.
- Return both values inside an array literal `[area, perimeter]`.

---EXPLANATION---
This problem combines basic arithmetic with returning multiple values from a function. Since JavaScript functions can only return one thing, we wrap two values inside an array.

```javascript
function rectangleStats(width, height) {
  const area = width * height;
  const perimeter = 2 * (width + height);
  return [area, perimeter];
}
```

---SOLUTION---
function rectangleStats(width, height) {
  const area = width * height;
  const perimeter = 2 * (width + height);
  return [area, perimeter];
}
