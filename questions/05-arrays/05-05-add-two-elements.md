---TITLE---
Add Two Elements of an Array

---DESCRIPTION---
Write a function called `addArrayElements` that takes an array of numbers and two indices as parameters. The function should return the sum of the elements at the given indices.

Example:
Input: addArrayElements([1, 2, 3, 4, 5], 1, 3)
Output: 6 (because 2 + 4 = 6)

Remember:
- Array indices start at 0.
- You can assume that the given indices will always be valid for the input array.
- Do not use any built-in methods except for accessing array elements by index.

---INITIALCODE---
function addArrayElements(arr, index1, index2) {
  // Your code here
}

---TESTCASES---
[
  { "func": "addArrayElements([1, 2, 3, 4, 5], 1, 3)", "expected": 6, "type": "return" },
  { "func": "addArrayElements([10, 20, 30, 40, 50], 0, 4)", "expected": 60, "type": "return" },
  { "func": "addArrayElements([5, 10, 15, 20], 2, 3)", "expected": 35, "type": "return" }
]

---BLACKLIST---
[reduce, sum]

---HINTS---
- Remember that array indices start at 0.
- You can access array elements using square bracket notation: arr[index].
- The function should return the sum of two specific elements, not the sum of all elements between the indices.

---EXPLANATION---
This problem involves accessing specific elements in an array using their indices and performing a simple addition operation. In JavaScript, we can access array elements using square bracket notation with the index of the element we want to access.

For example:
let arr = [10, 20, 30, 40, 50];
let elementAtIndex1 = arr[1];  // 20
let elementAtIndex3 = arr[3];  // 40

In this problem, we need to access two elements using the provided indices and return their sum.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How do you access the element at `index1` in the array?
2. How do you access the element at `index2` in the array?
3. Once you have both elements, how do you calculate their sum?
4. What should your function return?

Think about each of these points as you write your function. Remember, the goal is to return the sum of the elements at the two specified indices in the input array.

---SOLUTION---
function addArrayElements(arr, index1, index2) {
  return arr[index1] + arr[index2];
}