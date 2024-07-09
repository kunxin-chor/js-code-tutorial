---QUESTION---
---TITLE---
Data Plan Cost Calculator

---DESCRIPTION---
Write a function that calculates the cost of a data plan based on the amount of data used in gigabytes.

The function should:
1. Use the `prompt` function to ask for the amount of data used in gigabytes
2. Calculate the cost based on the rate of $0.07 per megabyte
3. Round the result to two decimal places
4. Print the result using `console.log`

**Important**: Do not use any unnecessary `console.log` statements except for the final result.

### Example

If the user enters "10" for gigabytes used, the output should be: `700.00`

### Hints

- Remember that `prompt` returns a string, so you need to convert it to a number
- You can use the `Number()` function or the unary plus operator (`+`) to convert strings to numbers
- 1 gigabyte = 1000 megabytes
- Calculate the total megabytes used, then multiply by the cost per megabyte
- Use the `toFixed(2)` method to round the result to two decimal places
- Use only one `console.log` statement to output the final result

---INITIALCODE---
function calculateDataPlanCost() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateDataPlanCost()",
    "expected": "700.00",
    "type": "console",
    "prompts": ["10"]
  },
  {
    "func": "calculateDataPlanCost()",
    "expected": "45.50",
    "type": "console",
    "prompts": ["0.65"]
  },
  {
    "func": "calculateDataPlanCost()",
    "expected": "1.40",
    "type": "console",
    "prompts": ["0.02"]
  }
]

---EXPLANATION---
The `calculateDataPlanCost` function demonstrates how to use the `prompt` function to get input from the user, perform calculations involving unit conversion and fixed rates, and then output the formatted result. Here's how it works:

1. It uses `prompt` to ask the user for the amount of data used in gigabytes.
2. It converts the input string to a number.
3. It converts gigabytes to megabytes by multiplying by 1000.
4. It calculates the total cost by multiplying the megabytes by the cost per megabyte ($0.07).
5. It rounds the result to two decimal places using `toFixed(2)`.
6. It then uses `console.log` to print the result.

This exercise helps practice:
- Using the `prompt` function for user input
- Converting strings to numbers
- Unit conversion (gigabytes to megabytes)
- Calculations with fixed rates
- Formatting currency output

---SOLUTION---
function calculateDataPlanCost() {
  const gigabytes = Number(prompt("Enter the amount of data used in gigabytes:"));
  const megabytes = gigabytes * 1000;
  const cost = (megabytes * 0.07).toFixed(2);
  console.log(cost);
}