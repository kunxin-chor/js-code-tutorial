---QUESTION---
---TITLE---
Product of Two Numbers

---DESCRIPTION---
Write a function that prompts the user for two numbers and calculates their product.

The function should:
1. Use the `prompt` function to ask for two numbers
2. Calculate the product of these numbers
3. Print the result using `console.log`

**Important**: Do not use any unnecessary `console.log` statements except for the final result.

### Example

If the user enters "2" and "5", the output should be: `10`

### Hints

- Remember that `prompt` returns a string, so you need to convert it to a number
- Consider how to perform multiplication in JavaScript
- Think about how to format the output correctly

---INITIALCODE---
function calculateProduct() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateProduct()",
    "expected": "10",
    "type": "console",
    "prompts": ["2", "5"]
  },
  {
    "func": "calculateProduct()",
    "expected": "5535",
    "type": "console",
    "prompts": ["123", "45"]
  },
  {
    "func": "calculateProduct()",
    "expected": "-304",
    "type": "console",
    "prompts": ["-76", "4"]
  }
]

---WALKTHROUGH---
Here's a step-by-step guide to solve this problem:

1. Use `prompt` twice to get two numbers from the user.
2. Convert the inputs to numbers using `Number()` or the `+` operator.
3. Multiply the two numbers using the `*` operator.
4. Use `console.log` to print the final result.

Additional tips:
- Make sure to convert the input to numbers before multiplication.
- You only need one `console.log` statement at the end to display the result.

---EXPLANATION---
The `calculateProduct` function demonstrates how to use the `prompt` function to get input from the user, perform a calculation, and then output the result. Here's how it works:

1. It uses `prompt` twice to ask the user for two numbers.
2. It converts the input strings to numbers and calculates their product.
3. It then uses `console.log` to print the result.

This exercise helps practice:
- Using the `prompt` function for user input
- Converting strings to numbers
- Basic arithmetic operations
- Output formatting

---SOLUTION---
function calculateProduct() {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  const product = num1 * num2;
  console.log(product);
}