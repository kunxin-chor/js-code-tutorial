---QUESTION---
---TITLE---
Temperature Converter

---DESCRIPTION---
Complete the following functions: **_celsiusToFahrenheit_**, **_fahrenheitToKelvin_**, and **_roundToTwoDecimals_**. Then, create a function called **_celsiusToRoundedKelvin_** that uses function composition to convert a temperature from Celsius to Kelvin and round the result to two decimal places.

**_Do not change any function names_**. 

Use these formulas:
- Celsius to Fahrenheit: (C * 9/5) + 32
- Fahrenheit to Kelvin: (F - 32) * 5/9 + 273.15

---INITIALCODE---
function celsiusToFahrenheit(celsius) {
  // Your code here
}

function fahrenheitToKelvin(fahrenheit) {
  // Your code here
}

function roundToTwoDecimals(number) {
  // Your code here
}

function celsiusToRoundedKelvin(celsius) {
  // Make sure to retain the variable names provided below.
  // Convert celsius to fahrenheit
  let fahrenheit = // Your code here

  // Convert fahrenheit to kelvin
  let kelvin = // Your code here

  // Round kelvin to two decimal places
  let roundedKelvin = // Your code here

  // Return the result
  return roundedKelvin;
}

---HINTS---
- Use the provided formulas to implement celsiusToFahrenheit and fahrenheitToKelvin.
- For roundToTwoDecimals, consider using the toFixed() method and converting the result back to a number.
- In celsiusToRoundedKelvin, use the other functions you've created to perform each step of the conversion.

---WALKTHROUGH---
This question shows the concept of function composition, where the output of one function is used as the input for another. A large problem is broken down into smaller problems, and each small problem is solved by a function. The final result is the composition of these functions.

1. Consider each function individually. We begin with functions that can solve the problem assigned to them without making use of other custom functions (library functions are allowed).
2. Identify functions that meet the critera as stated in step 1. They are `celsiusToFahrenheit`, `fahrenheitToKelvin` and `roundToTwoDecimals`.
3. Next, write the code for each of those functions.
4. Once we have the individual functions, we can compose them together to solve the problem. Use those functions for the `celsiusToRoundedKelvin` function.





---TESTCASES---
[
  { "name": "0°C to Kelvin", "func": "celsiusToRoundedKelvin(0)", "expected": 273.15, "type": "return" },
  { "name": "100°C to Kelvin", "func": "celsiusToRoundedKelvin(100)", "expected": 373.15, "type": "return" },
  { "name": "-40°C to Kelvin", "func": "celsiusToRoundedKelvin(-40)", "expected": 233.15, "type": "return" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function roundToTwoDecimals(number) {
  return Number(number.toFixed(2));
}

function celsiusToRoundedKelvin(celsius) {
  let fahrenheit = celsiusToFahrenheit(celsius);
  let kelvin = fahrenheitToKelvin(fahrenheit);
  let roundedKelvin = roundToTwoDecimals(kelvin);
  return roundedKelvin;
}
```

1. `celsiusToFahrenheit(celsius)`:
   - This function converts Celsius to Fahrenheit using the formula (C * 9/5) + 32.

2. `fahrenheitToKelvin(fahrenheit)`:
   - This function converts Fahrenheit to Kelvin using the formula (F - 32) * 5/9 + 273.15.

3. `roundToTwoDecimals(number)`:
   - This function rounds a number to two decimal places.
   - It uses the `toFixed(2)` method to round to two decimal places and return a string.
   - The `Number()` function is then used to convert the string back to a number.

4. `celsiusToRoundedKelvin(celsius)`:
   - This function demonstrates function composition.
   - It takes a Celsius temperature and applies the following transformations in order:
     1. Convert Celsius to Fahrenheit
     2. Convert Fahrenheit to Kelvin
     3. Round the result to two decimal places
   - Each step uses one of the previously defined functions.

This code demonstrates several important JavaScript concepts:
- Pure functions: Each function takes an input and returns an output without side effects.
- Function composition: The `celsiusToRoundedKelvin` function combines multiple functions to create a new function.
- Intermediate variables: Using variables to store intermediate results makes the code more readable and easier to understand.
- Type conversion: The `Number()` function is used to ensure the final result is a number, not a string.

This approach to function composition makes the code more modular and easier to test. Each small function can be tested independently, and they can be combined in different ways to create more complex behavior.

---SOLUTION---
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function roundToTwoDecimals(number) {
  return Number(number.toFixed(2));
}

function celsiusToRoundedKelvin(celsius) {
  let fahrenheit = celsiusToFahrenheit(celsius);
  let kelvin = fahrenheitToKelvin(fahrenheit);
  let roundedKelvin = roundToTwoDecimals(kelvin);
  return roundedKelvin;
}