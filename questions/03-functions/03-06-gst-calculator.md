---QUESTION---
---TITLE---
GST Calculator

---DESCRIPTION---
Complete the following functions: **calculateGst** and **calculateTotalPrice**, inserting your own code. 

**_Do not change any variable or function names_**. 

**_Assume that GST is 7%._**

**_Remember to display total as a 2-decimal point number by using .toFixed(2)_**

---INITIALCODE---
function calculateGst(price) {
  //  insert your code here
}

function calculateTotalPrice(price, gst) {
  //  insert your code here
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(price);
let total = calculateTotalPrice(price, gst);
console.log(total.toFixed(2));

---HINTS---
- GST is calculated as a percentage of the price. To calculate 7% of a number, multiply it by 0.07.
- The total price is the sum of the original price and the GST.
- Remember to return the calculated values from each function.

---TESTCASES---
[
  { "name": "If price is 100", "func": "", "prompts": ["100"], "expected": 107, "type": "console" },
  { "name": "If price is 200", "func": "", "prompts": ["200"], "expected": 214, "type": "console" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function calculateGst(price) {
  return price * 0.07;
}

function calculateTotalPrice(price, gst) {
  return price + gst;
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(price);
let total = calculateTotalPrice(price, gst);
console.log(total.toFixed(2));
```

1. `calculateGst(price)`:
   - This function calculates the GST amount based on the given price.
   - GST is 7% of the price, which is equivalent to multiplying the price by 0.07.
   - The function returns this calculated value.

2. `calculateTotalPrice(price, gst)`:
   - This function calculates the total price including GST.
   - It simply adds the original price and the GST amount.
   - The function returns this sum.

3. The main program:
   - It prompts the user for a price and converts it to a number using `parseFloat()`.
   - It calls `calculateGst(price)` to get the GST amount.
   - It then calls `calculateTotalPrice(price, gst)` to get the total price.
   - Finally, it logs the total price to the console, rounded to 2 decimal places using `.toFixed(2)`.

This code demonstrates several important JavaScript concepts:
- Function composition: The result of one function (`calculateGst`) is used as an input to another function (`calculateTotalPrice`).
- Arithmetic operations: We use multiplication to calculate percentages and addition to sum values.
- Type conversion: `parseFloat()` is used to convert the user input (a string) to a number.
- Method chaining: `.toFixed(2)` is called on the result of `calculateTotalPrice()` to format the output.

Remember that in real-world applications, you might want to add error handling and input validation to ensure the functions receive valid inputs.

---SOLUTION---
function calculateGst(price) {
  return price * 0.07;
}

function calculateTotalPrice(price, gst) {
  return price + gst;
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(price);
let total = calculateTotalPrice(price, gst);
console.log(total.toFixed(2));