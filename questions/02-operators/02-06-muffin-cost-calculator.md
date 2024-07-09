---QUESTION---
---TITLE---
Muffin Cost Calculator

---DESCRIPTION---
Write a function that calculates the total cost of muffins based on the price per muffin and the number of muffins purchased.

The function should:
1. Use the `prompt` function to ask for the dollar part of the muffin price (X)
2. Use the `prompt` function to ask for the cent part of the muffin price (Y)
3. Use the `prompt` function to ask for the number of muffins to buy (Z)
4. Calculate the total cost in dollars and cents
5. Print the result using `console.log` in the format "dollars.cents"

**Important**: Do not use any unnecessary `console.log` statements except for the final result.

### Example

If the user enters "1" for X, "90" for Y, and "6" for Z, the output should be: `11.40`

### Hints

- Remember that `prompt` returns a string, so you need to convert it to a number
- You can use the `Number()` function or the unary plus operator (`+`) to convert strings to numbers
- Calculate the price per muffin in cents by multiplying X by 100 and adding Y
- Multiply the price per muffin by the number of muffins to get the total cost in cents
- Convert the total cost back to dollars and cents format
- Use the `toFixed(2)` method to ensure the result always has two decimal places
- Use only one `console.log` statement to output the final result

---INITIALCODE---
function calculateMuffinCost() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateMuffinCost()",
    "expected": "11.40",
    "type": "console",
    "prompts": ["1", "90", "6"]
  },
  {
    "func": "calculateMuffinCost()",
    "expected": "19.00",
    "type": "console",
    "prompts": ["1", "90", "10"]
  },
  {
    "func": "calculateMuffinCost()",
    "expected": "75.00",
    "type": "console",
    "prompts": ["2", "50", "30"]
  }
]

---EXPLANATION---
The `calculateMuffinCost` function demonstrates how to use the `prompt` function to get multiple inputs from the user, perform calculations involving dollars and cents, and then output the formatted result. Here's how it works:

1. It uses `prompt` three times to ask the user for the dollar part, cent part, and number of muffins.
2. It converts all input strings to numbers.
3. It calculates the price per muffin in cents, then multiplies by the number of muffins to get the total cost in cents.
4. It converts the total cost back to dollars and cents format using division and modulus operations.
5. It formats the result to always show two decimal places using `toFixed(2)`.
6. It then uses `console.log` to print the result.

This exercise helps practice:
- Using the `prompt` function for multiple user inputs
- Converting strings to numbers
- Calculations involving dollars and cents
- Formatting currency output

---SOLUTION---
function calculateMuffinCost() {
  const dollars = Number(prompt("Enter the dollar part of the muffin price:"));
  const cents = Number(prompt("Enter the cent part of the muffin price:"));
  const quantity = Number(prompt("Enter the number of muffins to buy:"));
  const totalCents = (dollars * 100 + cents) * quantity;
  const totalCost = (totalCents / 100).toFixed(2);
  console.log(totalCost);
}