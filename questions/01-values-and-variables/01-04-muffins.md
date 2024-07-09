---QUESTION---
---TITLE---
Calculating Total Cost of Muffins

---DESCRIPTION---
In this exercise, you'll practice working with dollars and cents, and performing calculations in JavaScript.

A muffin from the bakery costs a certain number of dollars and cents. Mary bought several muffins. Your task is to calculate the total amount Mary must pay.

You need to:
1. Create a variable `d` and assign it the dollar cost of one muffin
2. Create a variable `c` and assign it the cent cost of one muffin (as a whole number, e.g., 50 for 50 cents)
3. Create a variable `n` and assign it the number of muffins Mary bought
4. Create a variable `total` and assign it the total cost in dollars (remember to convert cents to dollars)
5. Use `console.log` to display the values of `d`, `c`, `n`, and `total`

Choose your own values for `d`, `c`, and `n`, but make sure they are reasonable (e.g., a muffin probably doesn't cost $100).

This exercise will help you understand:
- How to work with dollars and cents in JavaScript
- How to perform calculations involving money
- How to convert between different units (cents to dollars)

---INITIALCODE---
// Your code here


// Do not modify the code below this line
console.log(d);
console.log(c);
console.log(n);
console.log(total);

---TESTCASES---
[
  { "func": "console.log(typeof d === 'number' && d > 0)", "expected": "true", "type": "console" },
  { "func": "console.log(typeof c === 'number' && c >= 0 && c < 100 && Math.floor(c) === c)", "expected": "true", "type": "console" },
  { "func": "console.log(typeof n === 'number' && n > 0 && Math.floor(n) === n)", "expected": "true", "type": "console" },
  { "func": "console.log(total === (d + c/100) * n)", "expected": "true", "type": "console" }
]

---EXPLANATION---
This problem introduces you to working with money calculations in JavaScript. Here's what you need to do:

1. Declare a variable `d` and assign it the dollar part of the muffin cost (e.g., 2 for $2.50).
2. Declare a variable `c` and assign it the cent part of the muffin cost as a whole number (e.g., 50 for $2.50).
3. Declare a variable `n` and assign it the number of muffins Mary bought.
4. Declare a variable `total` and calculate the total cost:
   - First, convert cents to dollars by dividing `c` by 100
   - Add this to `d` to get the full price of one muffin
   - Multiply this by `n` to get the total cost

This exercise helps you practice:
- Working with dollars and cents separately
- Converting cents to dollars
- Performing calculations with money

Remember, when working with money, it's important to be precise. Using separate variables for dollars and cents helps avoid rounding errors that can occur with floating-point numbers.

---SOLUTION---
const d = 2;  // $2
const c = 50; // 50 cents
const n = 5;  // 5 muffins
const total = (d + c/100) * n;

// Do not modify the code below this line
console.log(d);
console.log(c);
console.log(n);
console.log(total);