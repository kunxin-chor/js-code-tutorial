---QUESTION---
---TITLE---
Merry Christmas

---DESCRIPTION---
Call the provided functions to produce the output below.

Do not use any additional console.log() statements.

Write your code **after** line 9. When your .js file has functions, **the FIRST line that is not in a function is the first line that will be executed.**

### Example Output

```
We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas
And a Happy New Year!
```

---INITIALCODE---
function sayMerrychristmas(){
   console.log("We wish you a Merry Christmas");
}

function sayHappyNewYear(){
   console.log("And a Happy New Year!");
}
   
// write your code after this line

---HINTS---
- You need to call `sayMerrychristmas()` three times and `sayHappyNewYear()` once.
- Pay close attention to how the function's names are spelt.
- Remember, function calls are executed in the order they are written.

---TESTCASES---
[
  { "name": "The entire program", "func": "", "expected": "We wish you a Merry Christmas\nWe wish you a Merry Christmas\nWe wish you a Merry Christmas\nAnd a Happy New Year!", "type": "console" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function sayMerrychristmas(){
   console.log("We wish you a Merry Christmas");
}

function sayHappyNewYear(){
   console.log("And a Happy New Year!");
}

sayMerrychristmas();
sayMerrychristmas();
sayMerrychristmas();
sayHappyNewYear();
```

1. The first two functions, `sayMerrychristmas()` and `sayHappyNewYear()`, are already provided. They each use `console.log()` to print a specific message.

2. After these function definitions, we call `sayMerrychristmas()` three times. Each call will print "We wish you a Merry Christmas" to the console.

3. Finally, we call `sayHappyNewYear()` once, which prints "And a Happy New Year!" to the console.

This demonstrates how to call functions and how the order of function calls determines the order of execution. It also shows how you can reuse functions (calling `sayMerrychristmas()` multiple times) to avoid repeating code.

---SOLUTION---
function sayMerrychristmas(){
   console.log("We wish you a Merry Christmas");
}

function sayHappyNewYear(){
   console.log("And a Happy New Year!");
}

sayMerrychristmas();
sayMerrychristmas();
sayMerrychristmas();
sayHappyNewYear();