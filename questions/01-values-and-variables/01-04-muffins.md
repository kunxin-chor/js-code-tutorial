---QUESTION---
---TITLE---
Calculating Total Cost of Muffins

---DESCRIPTION---
In this exercise, you'll practice working with dollars and cents, and performing calculations in JavaScript.

A muffin from the bakery costs `d` dollars and  `c` cents. Mary bought `n` muffins. Your task is to calculate the total amount Mary must pay. If each muffin costs $2.75 and Mary bought 7 muffins, calculate how much many dollars and how many cents Mary must pay.

You need to:
1. Create a variable `d` and assign it the dollar cost of one muffin
2. Create a variable `c` and assign it the cent cost of one muffin (as a whole number, e.g., 50 for 50 cents)
3. Create a variable `n` and assign it the number of muffins Mary bought
4. Create a variable `totalDollars` and assign it the total cost in dollars 
5. Create a variable `totalCents` and assign it the total cost in cents
6. **Do not use `console.log`** any time at all!


This exercise will help you understand:
- How to work with dollars and cents in JavaScript
- How to perform calculations involving money
- How to convert between different units (cents to dollars)

---INITIALCODE---
// Your code here


// Do not change the code here:
console.log(totalDollars, totalCents);

---TESTCASES---
[
  { "func": "console.log(d, c, n, totalDollars, totalCents)", "expected": "2 75 7 19 25", "type": "console" }
]

---EXPLANATION---
In this problem, we need to calculate the total cost of muffins that Mary bought. Each muffin has a cost in dollars and cents, and Mary bought a certain number of muffins. Here's a step-by-step explanation of the solution:

1. We start by defining the cost of one muffin in dollars (`d`) and cents (`c`). In this example, `d` is 2 and `c` is 75, meaning each muffin costs $2.75.
2. We also define the number of muffins Mary bought (`n`). In this example, `n` is 7.
3. To calculate the total cost, we first convert the cost of one muffin to cents. This is done by multiplying the dollar part by 100 and adding the cent part: `(d * 100 + c)`.
4. Next, we multiply the total cost of one muffin in cents by the number of muffins (`n`) to get the total cost in cents: `(d * 100 + c) * n`.
5. We then convert the total cost from cents back to dollars and cents. The total dollars are obtained by dividing the total cost in cents by 100 and using `Math.floor` to get the integer part.
6. The remaining cents are obtained using the modulus operator (`%`) to get the remainder when the total cost in cents is divided by 100.

This approach ensures that we correctly handle the conversion between dollars and cents and accurately calculate the total cost Mary must pay.

---SOLUTION---
const d = 2;
const c = 75;
const n = 7;

const totalCostInCents = (d * 100 + c) * n;
const totalDollars = Math.floor(totalCostInCents / 100);
const totalCents = totalCostInCents % 100;
