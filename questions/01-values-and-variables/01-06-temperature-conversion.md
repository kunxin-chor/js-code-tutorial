---QUESTION---
---TITLE---
Temperature Conversion

---DESCRIPTION---
In this exercise, you'll practice working with variables and temperature conversion in JavaScript.

Your task is to convert a temperature from Fahrenheit to Celsius. The formula for this conversion is: C = (F - 32) * 5/9, where C is the temperature in Celsius and F is the temperature in Fahrenheit.

You need to:
1. Create a variable `fahrenheit` and assign it the value 98.6
2. Create a variable `celsius` and assign it the result of the conversion formula
3. Round the result to two decimal places using `toFixed(2)`

This exercise will help you understand:
- How to work with mathematical formulas in JavaScript
- How to perform calculations with variables
- How to round numbers to a specific number of decimal places

---INITIALCODE---
// Your code here


// Do not modify the code below this line
console.log(fahrenheit);
console.log(celsius);

---TESTCASES---
[
  { "func": "", "expected": "98.6\n37.00", "type": "console" }
]

---EXPLANATION---
This problem introduces you to temperature conversion and rounding in JavaScript. Here's what you need to do:

1. Declare a variable `fahrenheit` and assign it the value 98.6.
2. Use the formula C = (F - 32) * 5/9 to convert Fahrenheit to Celsius.
3. Use the `toFixed(2)` method to round the result to two decimal places.
4. The `console.log` statements at the end will display the values of your variables.

This exercise helps you practice:
- Working with mathematical formulas
- Performing calculations with variables
- Rounding numbers to a specific number of decimal places

Remember, `toFixed()` returns a string, so you might want to convert it back to a number using `parseFloat()` if you need to perform further calculations.

---SOLUTION---
const fahrenheit = 98.6;
const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);

// Do not modify the code below this line
console.log(fahrenheit);
console.log(celsius);