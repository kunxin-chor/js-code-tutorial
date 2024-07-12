---TITLE---
Get the Second Last Element of an Array

---DESCRIPTION---
Write a function called `getSecondLastElement` that takes an array as a parameter and returns the second last element of the array. Do not use any built-in methods except for the length property.

Example:
Input: [1, 2, 3, 4, 5]
Output: 4

Remember:
- Arrays are zero-indexed.
- You can use the length property of an array.
- Do not use array methods like slice() or splice().
- Assume the input array will always have at least two elements.

---INITIALCODE---
function getSecondLastElement(arr) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getSecondLastElement([1, 2, 3, 4, 5])", "expected": 4, "type": "return" },
  { "func": "getSecondLastElement(['a', 'b', 'c', 'd'])", "expected": "c", "type": "return" },
  { "func": "getSecondLastElement([42, 43])", "expected": 42, "type": "return" }
]

---BLACKLIST---
[slice, splice]

---HINTS---
- Remember that array indices start at 0 and go up to length - 1.
- You can access array elements using square bracket notation: arr[index].
- Think about how you can use the length property to find the index of the second last element.

---EXPLANATION---
To get the second last element of an array without using built-in methods, we need to understand how array indexing works in JavaScript. Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. The last element's index is always one less than the array's length, and the second last element is two less than the array's length.

For example, in an array [1, 2, 3, 4, 5]:
- The length is 5
- The indices are 0, 1, 2, 3, 4
- The last element (5) is at index 4, which is length - 1
- The second last element (4) is at index 3, which is length - 2

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How can you determine the index of the second last element in the array?
2. Once you know the index, how do you access that element of the array?
3. What should your function return?

Think about each of these points as you write your function. Remember, the goal is to return the second last element of the input array without using any built-in methods except for the length property.

---SOLUTION---
function getSecondLastElement(arr) {
  return arr[arr.length - 2];
}
