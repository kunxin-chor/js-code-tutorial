---TITLE---
Define an Array of Mixed Types

---DESCRIPTION---
Write a function called `createMixedArray` that creates and returns an array containing the following elements: 42, "hello", true, null, [51, 52, 53].

Remember:
- JavaScript arrays can contain elements of different types.
- Objects in arrays are defined using curly braces {}.
- Be careful with the syntax when mixing different types in an array.

---INITIALCODE---
function createMixedArray() {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "createMixedArray()",
    "expected": [42, "hello", true, null, [51,52,53]],
    "type": "return"
  }
]

---BLACKLIST---
[]

---HINTS---
- Make sure you're using the correct syntax for each type of element.
- For the object element, use curly braces {} and the correct key-value pair syntax.
- Remember that strings need to be enclosed in quotes, but numbers and booleans don't.

---EXPLANATION---
JavaScript arrays are versatile and can contain elements of different types. This includes numbers, strings, booleans, null, objects, and even other arrays. When creating a mixed-type array, it's important to use the correct syntax for each type of element.

For example:
let mixedArray = [1, "two", true, null, { key: "value" }];

In this problem, we need to create an array with specific elements of different types.

---WALKTHROUGH---
To solve this problem, consider the following steps:

1. How do you start defining an array in JavaScript?
2. How do you represent different types of data in JavaScript? (numbers, strings, booleans, null, objects)
3. How do you include an object as an element in an array?
4. How do you ensure that each element is correctly formatted for its type?

Think about these points as you create your function. The goal is to return an array that precisely matches the specified elements and their types.

---SOLUTION---
function createMixedArray() {
  return [42, "hello", true, null, [51, 52, 53]];
}
