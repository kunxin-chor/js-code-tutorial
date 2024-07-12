---QUESTION---
---TITLE---
Division

---DESCRIPTION---
Write a function, named **divide**, that takes in two integer arguments.

The function should return the result of the first integer divided by the second. The result should be a float **NUMBER** with 2 decimal points.

You should read the following documentation if you need help:
- [toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

**DO NOT PRINT OUT THE RESULT**

---INITIALCODE---
function divide(a, b) {
  // Your code here
}

---HINTS---
- Use the division operator `/` to perform the division.
- To round a number to 2 decimal places, you can use the `toFixed(2)` method.
- Remember to convert the result back to a number, as `toFixed()` returns a string, using the `Number` function, like so: `Number(result.toFixed(2))`.

---TESTCASES---
[
  { "func": "divide(10, 5)", "expected": 2.00, "type": "return" },
  { "func": "divide(10, 3)", "expected": 3.33, "type": "return" },
  { "func": "divide(53, 4)", "expected": 13.25, "type": "return" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function divide(a, b) {
  return Number((a / b).toFixed(2));
}
```

1. `function divide(a, b) {`: This declares a function named `divide` that takes two parameters, `a` and `b`.

2. `a / b`: This performs the division of `a` by `b`.

3. `(a / b).toFixed(2)`: The `toFixed(2)` method is called on the result of the division. This rounds the number to 2 decimal places and returns a string.

4. `Number(...)`: This converts the string back into a number. We need this because `toFixed()` returns a string, but we want to return a number.

5. `return`: This statement returns the final result.

This function demonstrates several important JavaScript concepts:
- Arithmetic operations (division)
- Method chaining (calling `toFixed()` on the result of `a / b`)
- Type conversion (using `Number()` to convert a string to a number)
- Rounding numbers to a specific number of decimal places

Remember that JavaScript uses floating-point arithmetic, which can sometimes lead to small rounding errors. For more precise calculations, especially involving money, you might need to use a library designed for precise decimal arithmetic.

---SOLUTION---
function divide(a, b) {
  return Number((a / b).toFixed(2));
}