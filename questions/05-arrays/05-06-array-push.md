---TITLE---
Push Elements to an Array

---DESCRIPTION---
Write a function called `addToArray` that takes an array and a number as parameters. The function should add the number to the end of the array using the `push` method, and then return the updated array.

Example:
Input: ([1, 2, 3], 4)
Output: [1, 2, 3, 4]

Remember:
- The `push` method adds one or more elements to the end of an array.
- `push` returns the new length of the array, not the array itself.
- The original array is modified by `push`.

---INITIALCODE---
function addToArray(arr, num) {
  // Your code here
}

---TESTCASES---
[
  { "func": "addToArray([1, 2, 3], 4)", "expected": [1, 2, 3, 4], "type": "return" },
  { "func": "addToArray([], 1)", "expected": [1], "type": "return" },
  { "func": "addToArray([10, 20], 30)", "expected": [10, 20, 30], "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Remember to use the `push` method on the array, not on the function parameter directly.
- The `push` method modifies the original array, so you don't need to create a new array.
- Make sure you're returning the array after pushing the new element.

---EXPLANATION---
The `push` method is used to add one or more elements to the end of an array. It's a simple way to expand an array dynamically. When you call `push` on an array, it modifies the original array and returns the new length of the array.

Syntax: array.push(element1, ..., elementN)

For example:
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

In this problem, we need to use `push` to add a single number to the end of the given array.

---WALKTHROUGH---
To solve this problem, consider the following steps:

1. How do you access the array that's passed as a parameter to the function?
2. How do you use the `push` method on an array? What does it do to the original array?
3. After pushing the new element, what should your function return?
4. Remember that `push` returns the new length of the array, not the array itself. How does this affect your solution?

Think about each of these points as you write your function. The goal is to add the given number to the end of the array and return the updated array.

---SOLUTION---
function addToArray(arr, num) {
  arr.push(num);
  return arr;
}
