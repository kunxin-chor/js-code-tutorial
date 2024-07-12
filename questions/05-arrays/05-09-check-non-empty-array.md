---TITLE---
Check if an Array is Not Empty

---DESCRIPTION---
Write a function called `isArrayNotEmpty` that takes an array as a parameter and returns `true` if the array is not empty, and `false` if it is empty. Do not use any built-in methods except for the length property.

Example:
Input: [1, 2, 3]
Output: true

Input: []
Output: false

Remember:
- An empty array has a length of 0.
- You can use the length property of an array.
- Do not use array methods like isEmpty() or any other built-in methods.

---INITIALCODE---
function isArrayNotEmpty(arr) {
  // Your code here
}

---TESTCASES---
[
  { "func": "isArrayNotEmpty([1, 2, 3])", "expected": true, "type": "return" },
  { "func": "isArrayNotEmpty([])", "expected": false, "type": "return" },
  { "func": "isArrayNotEmpty(['a'])", "expected": true, "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Remember that an empty array has a length of 0.
- You can use a simple comparison to check if the length is greater than 0.
- Think about how you can turn this comparison into a boolean value.

---EXPLANATION---
Checking if an array is not empty is a common operation in programming. In JavaScript, we can use the `length` property of an array to determine if it has any elements. An empty array has a length of 0, while a non-empty array has a length greater than 0.

For example:
let emptyArray = [];
console.log(emptyArray.length); // Output: 0

let nonEmptyArray = [1, 2, 3];
console.log(nonEmptyArray.length); // Output: 3

In this problem, we need to return a boolean value indicating whether the array is not empty.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How can you use the length property to determine if an array is empty?
2. What comparison can you make to check if the length indicates a non-empty array?
3. How can you turn this comparison into a boolean value that your function returns?

Think about each of these points as you write your function. Remember, the goal is to return `true` if the array is not empty, and `false` if it is empty.

---SOLUTION---
function isArrayNotEmpty(arr) {
  return arr.length > 0;
}
