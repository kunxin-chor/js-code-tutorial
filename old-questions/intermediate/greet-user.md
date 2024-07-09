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