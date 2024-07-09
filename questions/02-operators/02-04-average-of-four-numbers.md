---QUESTION---
---TITLE---
Average of Four Numbers

---DESCRIPTION---
Write a function that calculates the average of four numbers provided by the user.

The function should:
1. Use the `prompt` function four times to ask for four numbers
2. Calculate the average of these four numbers
3. Round the result to two decimal places
4. Print the result using `console.log`

**Important**: Do not use any unnecessary `console.log` statements except for the final result.

### Example

If the user enters "4", "2", "5", and "17", the output should be: `7.00`

### Hints

- Remember that `prompt` returns a string, so you need to convert it to a number
- You can use the `Number()` function or the unary plus operator (`+`) to convert strings to numbers
- Calculate the average by summing all numbers and dividing by 4
- Use the `toFixed(2)` method to round the result to two decimal places
- Use only one `console.log` statement to output the final result

---INITIALCODE---
function calculateAverage() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateAverage()",
    "expected": "7.00",
    "type": "console",
    "prompts": ["4", "2", "5", "17"]
  },
  {
    "func": "calculateAverage()",
    "expected": "2.50",
    "type": "console",
    "prompts": ["1", "2", "3", "4"]
  },
  {
    "func": "calculateAverage()",
    "expected": "1.00",
    "type": "console",
    "prompts": ["1", "1", "1", "1"]
  }
]

---EXPLANATION---
The `calculateAverage` function demonstrates how to use the `prompt` function multiple times to get input from the user, perform a calculation, and then output the formatted result. Here's how it works:

1. It uses `prompt` four times to ask the user for four numbers.
2. It converts each input string to a number.
3. It calculates the average by summing all numbers and dividing by 4.
4. It rounds the result to two decimal places using `toFixed(2)`.
5. It then uses `console.log` to print the result.

This exercise helps practice:
- Using the `prompt` function for multiple user inputs
- Converting strings to numbers
- Basic arithmetic operations
- Formatting output with decimal places

---SOLUTION---
function calculateAverage() {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  const num3 = Number(prompt("Enter the third number:"));
  const num4 = Number(prompt("Enter the fourth number:"));
  const average = (num1 + num2 + num3 + num4) / 4;
  console.log(average.toFixed(2));
}