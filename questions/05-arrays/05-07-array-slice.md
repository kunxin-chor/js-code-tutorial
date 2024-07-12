---TITLE---
Using Slice on an Array

---DESCRIPTION---
Write a function called `getArraySlice` that takes an array as a parameter. The function should return a new array containing elements from index 1 to index 3 (inclusive) of the input array.

Example:
Input: [1, 2, 3, 4, 5]
Output: [2, 3, 4]

Remember:
- The `slice` method extracts a section of an array and returns a new array.
- `slice` does not modify the original array.
- The end index in `slice` is not inclusive.

---INITIALCODE---
function getArraySlice(arr) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getArraySlice([1, 2, 3, 4, 5])", "expected": [2, 3, 4], "type": "return" },
  { "func": "getArraySlice(['a', 'b', 'c', 'd', 'e'])", "expected": ["b", "c", "d"], "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Remember that array indexing starts at 0.
- The `slice` method takes two arguments: the start index (inclusive) and the end index (exclusive).
- `slice` returns a new array, so you don't need to create one yourself.

---EXPLANATION---
The `slice` method in JavaScript is used to extract a portion of an array and return it as a new array. It doesn't modify the original array. The method takes two optional parameters: the start index (inclusive) and the end index (exclusive).

Syntax: array.slice(start, end)

For example:
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'orange', 'mango']

In this problem, we need to use `slice` to extract elements from index 1 to index 3 (inclusive) of the input array.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. What is the start index you need to use in the `slice` method?
2. What should be the end index to include the element at index 3?
3. How do you use the `slice` method to extract the desired portion of the array?
4. What does the `slice` method return, and how does this relate to what your function needs to return?

Think about each of these points as you write your function. Remember, the goal is to return a new array containing the specified slice of the input array.

---SOLUTION---
function getArraySlice(arr) {
  return arr.slice(1, 4);
}
