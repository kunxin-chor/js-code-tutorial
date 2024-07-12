---TITLE---
Define an Array

---DESCRIPTION---
Write a function called `createArray` that creates and returns an array containing the following elements: 10, 20, 30, 40, 50.

Remember:
- Arrays in JavaScript are zero-indexed.
- Array elements are separated by commas.
- The entire array is enclosed in square brackets [].

---INITIALCODE---
function createArray() {
  // Your code here
}

---TESTCASES---
[
  { "func": "createArray()", "expected": [10, 20, 30, 40, 50], "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Make sure you're using square brackets [] to define the array.
- Don't forget to separate each element with a comma.
- Remember to return the array from your function.

---EXPLANATION---
Arrays in JavaScript are used to store multiple values in a single variable. They can contain various data types, including numbers, strings, and even other arrays or objects.

To create an array in JavaScript:
1. Use square brackets [] to enclose the array elements.
2. Separate each element with a comma.
3. Assign the array to a variable or return it directly from a function.

For example:
let myArray = [1, 2, 3, 4, 5];

In this case, we need to create an array with the specific elements 10, 20, 30, 40, and 50.

---WALKTHROUGH---
To solve this problem, think about these steps:

1. How do you start defining an array in JavaScript? What symbols do you use?
2. What goes inside these symbols to create the array elements?
3. How do you separate each element in the array?
4. Once you've created the array, how do you make it available outside the function?

Consider each of these points carefully as you write your function. Remember, the goal is to create and return an array with the specific elements given in the problem description.

---SOLUTION---
function createArray() {
  return [10, 20, 30, 40, 50];
}
