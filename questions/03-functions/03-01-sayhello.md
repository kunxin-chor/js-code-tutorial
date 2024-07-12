---QUESTION---
---TITLE---
Say Hello

---DESCRIPTION---
Write a function named **sayHello**. This function should print out "Hello World" in the console. 

Call this function three times. 

### Example Output

```
Hello World
Hello World
Hello World
```

---INITIALCODE---
// write your function here

// call your function here

---HINTS---
- Remember to use `console.log()` to print to the console.
- You don't need any parameters for this function.
- To call a function multiple times, simply write its name followed by parentheses on separate lines.

---TESTCASES---
[
  { "func": "", "expected": "Hello World\nHello World\nHello World", "type": "console" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function sayHello() {
  console.log("Hello World");
}

sayHello();
sayHello();
sayHello();
```

1. `function sayHello() {`: This declares a function named `sayHello`. The empty parentheses `()` indicate that this function doesn't take any parameters.

2. `console.log("Hello World");`: This is the body of the function. It uses `console.log()` to print the string "Hello World" to the console.

3. `}`: This closes the function definition.

4. The function is then called three times by writing `sayHello();` three times.

This demonstrates function declaration and calling a function multiple times. Each time the function is called, it executes its body, resulting in "Hello World" being printed to the console three times.

---SOLUTION---
function sayHello() {
  console.log("Hello World");
}

sayHello();
sayHello();
sayHello();