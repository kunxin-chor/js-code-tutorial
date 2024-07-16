---TITLE---
Creating an Object

---DESCRIPTION---
Your task is to define an object named "desserts" which stores the information from the given table:

```
---------------------------------
|   a   |   "apple pie"         |
---------------------------------
|   b   |   "banana cake"       |
---------------------------------
|   c   |   "chocolate muffin"  |
---------------------------------
```

---INITIALCODE---
function createDesserts() {
  // Your code here

  return desserts;
}

---TESTCASES---
[
  {
    "func": "createDesserts()",
    "expected": {
      "a": "apple pie",
      "b": "banana cake",
      "c": "chocolate muffin"
    },
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to create and initialize objects in JavaScript. Here are the key concepts to consider:

1. Objects in JavaScript are collections of key-value pairs.
2. You can create an object using object literal notation: {}.
3. Each key-value pair is separated by a comma.
4. Keys can be strings (with or without quotes if they're valid identifiers) or numbers.
5. Values can be any valid JavaScript expression, including strings, numbers, or even other objects.

Think about how you can use these concepts to create the "desserts" object with the given information.

---HINTS---
- Use curly braces {} to define the object.
- Each key-value pair should be in the format key: value.
- Don't forget to separate each key-value pair with a comma.
- For more information on creating objects in JavaScript, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

---SOLUTION---
function createDesserts() {
  let desserts = {
    a: "apple pie",
    b: "banana cake",
    c: "chocolate muffin"
  };

  return desserts;
}

---EXPLANATION---
In this solution, we create the "desserts" object using object literal notation. Each key-value pair corresponds to a row in the given table. The keys (a, b, c) are on the left side of the colon, and the values ("apple pie", "banana cake", "chocolate muffin") are on the right side. This creates an object with three properties, exactly matching the information provided in the table.
