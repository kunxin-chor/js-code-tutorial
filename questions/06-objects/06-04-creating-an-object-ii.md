---TITLE---
Creating an Object II

---DESCRIPTION---
Your task is to define an object named `random` that stores the information from the given table:

```
------------------------
|    1    |    "one"   |
------------------------
|   3.14  |    "pi"    |
------------------------ 
|    pi   |    3.14    |
------------------------
|    b    |  "banana"  |
------------------------
| raining |    false   |
------------------------
```

---INITIALCODE---
function createRandomObject() {
  // Your code here

  return random;
}

---TESTCASES---
[
  {
    "func": "createRandomObject()",
    "expected": {
      "1": "one",
      "3.14": "pi",
      "pi": 3.14,
      "b": "banana",
      "raining": false
    },
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to create and initialize objects in JavaScript with various types of keys and values. Here are the key concepts to consider:

1. Objects in JavaScript can have keys that are strings, numbers, or symbols.
2. Values in objects can be of any type, including strings, numbers, booleans, or even other objects.
3. When using numbers or special characters as keys, you need to use quotes.
4. Boolean values (true/false) don't need quotes.
5. You can mix different types of keys and values in the same object.

Think about how you can use these concepts to create the "_random_" object with the given information.

---HINTS---
- Use curly braces {} to define the object.
- Remember to put quotes around keys that are numbers or contain special characters.
- Don't put quotes around the boolean value false.
- For more information on object keys in JavaScript, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Property_names

---SOLUTION---
function createRandomObject() {
  let random = {
    "1": "one",
    "3.14": "pi",
    pi: 3.14,
    b: "banana",
    raining: false
  };

  return random;
}

---EXPLANATION---
In this solution, we create the "random" object using object literal notation. Each key-value pair corresponds to a row in the given table. Note the following:
- The keys 1 and 3.14 are in quotes because they are numbers.
- The key pi doesn't need quotes because it's a valid identifier.
- The value 3.14 for the key pi is not in quotes because it's a number.
- The boolean value false for the key raining is not in quotes.
This creates an object that exactly matches the information provided in the table, demonstrating how to use different types of keys and values in a JavaScript object.
