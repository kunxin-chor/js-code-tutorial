---TITLE---
Access Array Elements

---DESCRIPTION---
Write a function called `accessArray` that takes an array as a parameter and returns the element specified by the `index` parameter

Remember:
- Arrays in JavaScript are zero-indexed.
- You can access the last element of an array using its length property.

---INITIALCODE---
function accessArray(arr, index) {
  // Your code here
}

---TESTCASES---
[
  { "func": "accessArray([1, 2, 3, 4, 5], 3)", "expected": "4", "type": "return" },
  { "func": "accessArray(['a', 'b', 'c', 'd'], 1)", "expected": "b", "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Remember that array indexing starts at 0, so the first element is at index 0, the second at index 1, and so on.
- To get the last element, you can use arr[arr.length - 1].
- Make sure you're returning an object with the correct property names.

---EXPLANATION---
In JavaScript, you can access individual elements of an array using square bracket notation with the index of the element you want to access. The index of the first element is 0, the second is 1, and so on.

For example:
let arr = ['a', 'b', 'c', 'd'];
let firstElement = arr[0];  // 'a'
let thirdElement = arr[2];  // 'c'
let lastElement = arr[arr.length - 1];  // 'd'

In this problem, we need to access specific elements of the input array and return them in an object.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How do you access the first element of an array?
2. How do you access the third element of an array?
3. How can you determine the index of the last element of an array?
4. How do you create an object with specific properties in JavaScript?

Think about each of these points as you write your function. Remember, the goal is to return an object containing the specified elements from the input array.

---SOLUTION---
function accessArray(arr) {
  return {
    firstElement: arr[0],
    thirdElement: arr[2],
    lastElement: arr[arr.length - 1]
  };
}
