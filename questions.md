---QUESTION---
---TITLE---
Add Two Numbers

---DESCRIPTION---
Write a function that adds two numbers.

This function should:
- Take two parameters
- Return the sum of these parameters

Remember to consider edge cases such as:
- Negative numbers
- Zero
- Large numbers

### Examples

Here are some examples of how the function should work:
1. `add(2, 3)` should return `5`
2. `add(-1, 1)` should return `0`
3. `add(0, 0)` should return `0`

---INITIALCODE---
function add(a, b) {
  // Your code here
}

---TESTCASES---
[
  { "func": "add(2, 3)", "expected": 5, "type": "return" },
  { "func": "add(-1, 1)", "expected": 0, "type": "return" },
  { "func": "add(0, 0)", "expected": 0, "type": "return" }
]

---EXPLANATION---
The `add` function is a fundamental operation in programming. Here's what it should do:

1. Accept two numbers as parameters.
2. Calculate their sum using the `+` operator.
3. Return the result.

This function can be used as a building block for more complex calculations.

### Note on Edge Cases

When implementing this function, consider how it handles:
- Very large numbers (potential overflow)
- Floating point precision issues

---SOLUTION---
function add(a, b) {
  return a + b;
}

---QUESTION---
---TITLE---
Print a Pyramid

---DESCRIPTION---
Write a function that prints a pyramid of asterisks with a given number of rows.

The pyramid should have the following characteristics:
- The top level has one asterisk
- Each subsequent level has two more asterisks than the previous level
- The pyramid is centered, with spaces on either side to maintain the triangular shape

### Example Output

For `printPyramid(3)`, the output should be:
```
  *
 ***
*****
```

---INITIALCODE---
function printPyramid(rows) {
  // Your code here
}

---TESTCASES---
[
  { "func": "printPyramid(3)", "expected": "  *\n ***\n*****", "type": "console" },
  { "func": "printPyramid(1)", "expected": "*", "type": "console" },
  { "func": "printPyramid(5)", "expected": "    *\n   ***\n  *****\n *******\n*********", "type": "console" }
]

---EXPLANATION---
The `printPyramid` function should use console.log to print a pyramid of asterisks with the given number of rows. Here's how it works:

1. It takes a single parameter `rows` which determines the height of the pyramid.
2. For each row:
   - It calculates the number of spaces needed on each side.
   - It calculates the number of asterisks for that row.
   - It combines the spaces and asterisks into a single string.
   - It prints the string using console.log.

This exercise helps practice loops, string manipulation, and console output.

### Hints

- Use a loop to iterate through each row
- The number of asterisks in each row follows a pattern: 1, 3, 5, 7, ...
- The number of spaces on each side also follows a pattern

---SOLUTION---
function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
    console.log(row);
  }
}

---QUESTION---
---TITLE---
Greet User

---DESCRIPTION---
Write a function that prompts the user for their name and then greets them.

The function should:
1. Use the `prompt` function to ask for the user's name
2. Print a greeting message using `console.log`

The greeting should be in the format: "Hello, [name]!"

### Example

If the user enters "Alice", the output should be:
```
Hello, Alice!
```

---INITIALCODE---
function greetUser() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "greetUser()",
    "expected": "Hello, John!",
    "type": "console",
    "prompts": ["John"]
  },
  {
    "func": "greetUser()",
    "expected": "Hello, Alice!",
    "type": "console",
    "prompts": ["Alice"]
  },
  {
    "func": "greetUser()",
    "expected": "Hello, !",
    "type": "console",
    "prompts": [""]
  }
]

---EXPLANATION---
The `greetUser` function demonstrates how to use the `prompt` function to get input from the user and then use that input in your program. Here's how it works:

1. It uses `prompt` to ask the user for their name.
2. It then uses `console.log` to print a greeting message that includes the name.

This exercise helps practice:
- Using the `prompt` function for user input
- String concatenation or template literals
- Basic input/output operations

### Hints

- Remember that `prompt` returns a string
- You can use string concatenation (`+`) or template literals (`` ` ``) to create the greeting message
- Don't forget to handle the case where the user doesn't enter a name (empty string)

---SOLUTION---
function greetUser() {
  const name = prompt("What's your name?");
  console.log(`Hello, ${name}!`);
}