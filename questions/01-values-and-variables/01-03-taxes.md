---QUESTION---
---TITLE---
Calculating Tax Payment

---DESCRIPTION---
In this exercise, you'll practice using variables and percentage calculations in JavaScript.

The corporate tax rate in a certain country is 9%. Rochelle earns $450,000 this year. Your task is to calculate how much tax she is required to pay.

You need to:
1. Create a variable `taxRate` and assign it the value 0.09 (9% expressed as a decimal)
2. Create a variable `income` and assign it the value 450000
3. Create a variable `totalPayment` and assign it the result of multiplying `income` by `taxRate`
4. Use `console.log` to display the value of `totalPayment`

This exercise will help you understand:
- How to work with percentages in JavaScript
- How to perform calculations with variables

---INITIALCODE---
// Your code here


// Do not modify the code below this line
console.log(taxRate);
console.log(income);
console.log(totalPayment);

---TESTCASES---
[
  { "func": "", "expected": "0.09\n450000\n40500", "type": "console" }
]

---EXPLANATION---
This problem introduces you to working with percentages and performing calculations in JavaScript. Here's what you need to do:

1. Declare a variable `taxRate` and assign it the value 0.09 (9% expressed as a decimal).
2. Declare a variable `income` and assign it the value 450000 (Rochelle's income).
3. Declare a variable `totalPayment` and assign it the result of `income * taxRate`.
4. The `console.log` statements at the end will display the values of your variables.

This exercise helps you practice:
- Working with percentages (expressed as decimals)
- Performing multiplication with variables
- Calculating tax based on a percentage

Remember, when working with percentages in calculations, we typically use the decimal form. So 9% becomes 0.09 in our calculation.

---SOLUTION---
const taxRate = 0.09;
const income = 450000;
const totalPayment = income * taxRate;

// Do not modify the code below this line
console.log(taxRate);
console.log(income);
console.log(totalPayment);