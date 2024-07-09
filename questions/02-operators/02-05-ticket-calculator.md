---QUESTION---
---TITLE---
Movie Ticket Calculator

---DESCRIPTION---
Write a function that calculates the total cost of movie tickets based on the number of child and adult tickets purchased.

The function should:
1. Use the `prompt` function to ask for the number of child tickets
2. Use the `prompt` function to ask for the number of adult tickets
3. Calculate the total cost (child tickets cost $9.00 each, adult tickets cost $12.00 each)
4. Print the total cost using `console.log`

**Important**: Do not use any unnecessary `console.log` statements except for the final result.

### Example

If the user enters "1" for child tickets and "2" for adult tickets, the output should be: `33`

### Hints

- Remember that `prompt` returns a string, so you need to convert it to a number
- You can use the `Number()` function or the unary plus operator (`+`) to convert strings to numbers
- Calculate the cost for child tickets and adult tickets separately, then sum them
- Use only one `console.log` statement to output the final result

---INITIALCODE---
function calculateTicketCost() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "calculateTicketCost()",
    "expected": "33",
    "type": "console",
    "prompts": ["1", "2"]
  },
  {
    "func": "calculateTicketCost()",
    "expected": "57",
    "type": "console",
    "prompts": ["5", "1"]
  },
  {
    "func": "calculateTicketCost()",
    "expected": "75",
    "type": "console",
    "prompts": ["3", "4"]
  }
]

---EXPLANATION---
The `calculateTicketCost` function demonstrates how to use the `prompt` function to get input from the user, perform calculations with fixed prices, and then output the result. Here's how it works:

1. It uses `prompt` twice to ask the user for the number of child and adult tickets.
2. It converts the input strings to numbers.
3. It calculates the total cost by multiplying the number of tickets by their respective prices and summing the results.
4. It then uses `console.log` to print the total cost.

This exercise helps practice:
- Using the `prompt` function for user input
- Converting strings to numbers
- Basic arithmetic operations with fixed values
- Simple financial calculations

---SOLUTION---
function calculateTicketCost() {
  const childTickets = Number(prompt("Enter the number of child tickets:"));
  const adultTickets = Number(prompt("Enter the number of adult tickets:"));
  const totalCost = (childTickets * 9) + (adultTickets * 12);
  console.log(totalCost);
}