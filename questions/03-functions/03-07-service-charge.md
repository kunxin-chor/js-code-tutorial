---QUESTION---
---TITLE---
Bill Calculator

---DESCRIPTION---
Complete the following functions: **_calculateGst, calculateServiceCharge_** and **_calculateTotalPrice_**, by replacing **???** and inserting your own code. 

**_Do not change any variables_**. 

**_Assume that GST is 7%._**

**_Assume that service charge is 10%._**

**_Remember to display total as a 2-decimal point number by using .toFixed(2)_**

---INITIALCODE---
function calculateGst(price){
  //  insert your code here
}

function calculateServiceCharge(price){
  //  insert your code here
}

function calculateTotalPrice(price, serviceCharge, gst) {
  //  insert your code here
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(???);
let serviceCharge = calculateServiceCharge(???);
let total = calculateTotalPrice(???, ???, ???);

console.log(total.toFixed(2));

---HINTS---
- GST is 7% of the price. To calculate this, multiply the price by 0.07.
- Service charge is 10% of the price. To calculate this, multiply the price by 0.10.
- The total price is the sum of the original price, service charge, and GST.
- Make sure to pass the correct arguments to each function when calling them.

---TESTCASES---
[
  { "name": "If price is 100", "func": "", "prompts": ["100"], "expected": 117.00, "type": "console" },
  { "name": "If price is 200", "func": "", "prompts": ["200"], "expected": 234.00, "type": "console" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
const prompt = require("prompt-sync")();

function calculateGst(price){
  return price * 0.07;
}

function calculateServiceCharge(price){
  return price * 0.10;
}

function calculateTotalPrice(price, serviceCharge, gst) {
  return price + serviceCharge + gst;
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(price);
let serviceCharge = calculateServiceCharge(price);
let total = calculateTotalPrice(price, serviceCharge, gst);

console.log(total.toFixed(2));
```

1. `calculateGst(price)`:
   - This function calculates the GST (7% of the price).
   - It multiplies the price by 0.07 and returns the result.

2. `calculateServiceCharge(price)`:
   - This function calculates the service charge (10% of the price).
   - It multiplies the price by 0.10 and returns the result.

3. `calculateTotalPrice(price, serviceCharge, gst)`:
   - This function calculates the total price by summing the original price, service charge, and GST.
   - It adds all three parameters and returns the result.

4. The main program:
   - It prompts the user for a price and converts it to a number using `parseFloat()`.
   - It calls `calculateGst(price)` to get the GST amount.
   - It calls `calculateServiceCharge(price)` to get the service charge amount.
   - It then calls `calculateTotalPrice(price, serviceCharge, gst)` to get the total price.
   - Finally, it logs the total price to the console, rounded to 2 decimal places using `.toFixed(2)`.

This code demonstrates several important JavaScript concepts:
- Function composition: The results of `calculateGst()` and `calculateServiceCharge()` are used as inputs to `calculateTotalPrice()`.
- Arithmetic operations: We use multiplication to calculate percentages and addition to sum values.
- Type conversion: `parseFloat()` is used to convert the user input (a string) to a number.
- Method chaining: `.toFixed(2)` is called on the result of `calculateTotalPrice()` to format the output.
- Modular design: Each function performs a specific task, making the code easier to understand and maintain.

In a real-world application, you might want to add error handling and input validation to ensure the functions receive valid inputs and to handle potential errors gracefully.

---SOLUTION---
const prompt = require("prompt-sync")();

function calculateGst(price){
  return price * 0.07;
}

function calculateServiceCharge(price){
  return price * 0.10;
}

function calculateTotalPrice(price, serviceCharge, gst) {
  return price + serviceCharge + gst;
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(price);
let serviceCharge = calculateServiceCharge(price);
let total = calculateTotalPrice(price, serviceCharge, gst);

console.log(total.toFixed(2));