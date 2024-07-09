---QUESTION---
---TITLE---
Area of a Circle II

---DESCRIPTION---
Write a function that calculates the area of a circle based on the radius provided by the user.

The function should:
1. Use the `prompt` function to ask for the radius (a floating-point number)
2. Calculate the area of the circle using the formula: area = π * radius^2
3. Round the result to two decimal places
4. Print the result using `console.log`

**Important**: 
- Do not use any unnecessary `console.log` statements except for the final result.
- Assume π (pi) to be 3.14

### Example

If the user enters "10" for the radius, the output should be: `314.00`

### Hints
- Remember that `prompt` returns a string, so you need to convert it to a number
- You can use the `Number()` function or the unary plus operator (`+`) to convert strings to numbers
- Use the `toFixed(2)` method to round the result to two decimal places
- Use only one `console.log` statement to output the final result

---INITIALCODE---
function calculateCircleArea() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateCircleArea()",
    "expected": "314.00",
    "type": "console",
    "prompts": ["10"]
  },
  {
    "func": "calculateCircleArea()",
    "expected": "1661.06",
    "type": "console",
    "prompts": ["23"]
  },
  {
    "func": "calculateCircleArea()",
    "expected": "3629.84",
    "type": "console",
    "prompts": ["34"]
  }
]

---EXPLANATION---
The `calculateCircleArea` function demonstrates how to use the `prompt` function to get input from the user, perform a calculation, and then output the formatted result. Here's how it works:

1. It uses `prompt` to ask the user for the radius.
2. It converts the input string to a number.
3. It calculates the area using the formula: area = π * radius^2.
4. It rounds the result to two decimal places using `toFixed(2)`.
5. It then uses `console.log` to print the result.

This exercise helps practice:
- Using the `prompt` function for user input
- Converting strings to numbers
- Mathematical calculations
- Formatting output with decimal places

---SOLUTION---
function calculateCircleArea() {
  const radius = Number(prompt("Enter the radius of the circle:"));
  const pi = 3.14;
  const area = pi * radius * radius;
  console.log(area.toFixed(2));
}
