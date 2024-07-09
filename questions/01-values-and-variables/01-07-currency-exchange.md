---QUESTION---
---TITLE---
Currency Exchange Calculator

---DESCRIPTION---
In this exercise, you'll practice working with variables and currency conversion in JavaScript.

You're building a simple currency exchange calculator. The exchange rate from USD to EUR is 0.85. Your task is to calculate how many Euros you can get for a given amount of US Dollars.

You need to:
1. Create a variable `exchangeRate` and assign it the value 0.85
2. Create a variable `usdAmount` and assign it the value 100
3. Create a variable `eurAmount` and assign it the result of the conversion
4. Round the result to two decimal places

This exercise will help you understand:
- How to work with exchange rates in JavaScript
- How to perform calculations with variables
- How to round numbers to a specific number of decimal places

---INITIALCODE---
// Your code here


// Do not modify the code below this line
console.log(exchangeRate);
console.log(usdAmount);
console.log(eurAmount);

---TESTCASES---
[
  { "func": "", "expected": "0.85\n100\n85.00", "type": "console" }
]

---EXPLANATION---
This problem introduces you to currency conversion and rounding in JavaScript. Here's what you need to do:

1. Declare a variable `exchangeRate` and assign it the value 0.85 (1 USD = 0.85 EUR).
2. Declare a variable `usdAmount` and assign it the value 100 (amount in USD to convert).
3. Calculate the `eurAmount` by multiplying `usdAmount` by `exchangeRate`.
4. Round the result to two decimal places using `toFixed(2)`.
5. The `console.log` statements at the end will display the values of your variables.

This exercise helps you practice:
- Working with exchange rates
- Performing calculations with variables
- Rounding numbers to a specific number of decimal places

Remember, `toFixed()` returns a string, so you might want to convert it back to a number using `parseFloat()` if you need to perform further calculations.

---SOLUTION---
const exchangeRate = 0.85;
const usdAmount = 100;
const eurAmount = (usdAmount * exchangeRate).toFixed(2);

// Do not modify the code below this line
console.log(exchangeRate);
console.log(usdAmount);
console.log(eurAmount);