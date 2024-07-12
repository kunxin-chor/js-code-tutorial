---TITLE---
Using Splice on an Array

---DESCRIPTION---
Write a function called `modifyArray` that takes an array as a parameter. The function should do the following:
1. Remove 2 elements starting from index 1
2. Insert the numbers 'a' and 'b' at index 1
3. Return the modified array

Example:
Input: [1, 2, 3, 4, 5]
Output: [1, 'a', 'b', 4, 5]

Remember:
- The `splice` method can be used to add or remove elements from an array.
- `splice` modifies the original array.

---INITIALCODE---
function modifyArray(arr) {
  // Your code here
}

---TESTCASES---
[
  { "func": "modifyArray([1, 2, 3, 4, 5])", "expected": [1, "a", "b", 4, 5], "type": "return" },
  { "func": "modifyArray(['x', 'y', 'z', 'w'])", "expected": ["x", "a", "b", "w"], "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- The `splice` method takes three main arguments: the start index, the number of elements to remove, and the elements to insert.
- Remember that `splice` modifies the original array, so you don't need to create a new array.
- Make sure you're using the correct syntax for `splice`.

---EXPLANATION---
The `splice` method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array containing the deleted elements.

Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

For example:
let fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.splice(1, 2, 'kiwi', 'grape');
console.log(fruits); // Output: ['apple', 'kiwi', 'grape', 'mango']

In this problem, we need to use `splice` to remove two elements and insert two new elements at a specific position in the array.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. What index do you need to start at to remove the correct elements?
2. How many elements do you need to remove?
3. What elements do you need to insert?
4. How do you combine all these operations into a single `splice` call?
5. What does the `splice` method return, and what do you need to return from your function?

Think about each of these points as you write your function. Remember, the goal is to modify the input array according to the specifications and return the modified array.

---SOLUTION---
function modifyArray(arr) {
  arr.splice(1, 2, 'a', 'b');
  return arr;
}
