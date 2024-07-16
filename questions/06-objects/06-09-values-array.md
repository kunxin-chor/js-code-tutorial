---TITLE---
Values Array

---DESCRIPTION---
Write two functions:
1. `objValues1`: Takes an object as an argument and returns an array of all the values only. Do not use `Object.values()` for this function.
2. `objValues2`: Takes an object as an argument and returns an array of all the values only. Use `Object.values()` for this function.

---INITIALCODE---
function objValues1(obj) {
  // Your code here
}

function objValues2(obj) {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "objValues1({1:'one', 2:'two', 3:'three'})",
    "expected": ["one", "two", "three"],
    "type": "return"
  },
  {
    "func": "objValues2({1:'one', 2:'two', 3:'three'})",
    "expected": ["one", "two", "three"],
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand two different ways of extracting values from an object:

1. For `objValues1`:
   - Consider how you can iterate over the properties of an object.
   - Think about how you can collect the values into an array.

2. For `objValues2`:
   - Familiarize yourself with the `Object.values()` method.
   - Think about how this method simplifies the task.

Consider the differences between these approaches and how they achieve the same result.

---HINTS---
- For `objValues1`, you can use a `for...in` loop or `Object.keys()` combined with `map()`.
- Remember that `Object.values()` directly returns an array of all values in the object.
- For more information on `Object.values()`, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
- For information on the `for...in` loop, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

---SOLUTION---
function objValues1(obj) {
  let result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
}

function objValues2(obj) {
  return Object.values(obj);
}

---EXPLANATION---
In `objValues1`, we use a `for...in` loop to iterate over the properties of the object. For each property, we push its value (`obj[key]`) into the `result` array. This manually collects all values from the object.

In `objValues2`, we simply use the `Object.values()` method, which directly returns an array of all the values in the object. This method provides a more concise and efficient way to achieve the same result.

Both functions will return an array containing all the values from the input object, demonstrating two different approaches to solving the same problem.
