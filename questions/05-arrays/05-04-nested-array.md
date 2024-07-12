---TITLE---
Define a Nested Array

---DESCRIPTION---
Write a function called `createNestedArray` that creates and returns an array containing the following elements: 
1. The number 1
2. An array containing the numbers 2 and 3
3. The number 4
4. An array containing the numbers 5 and 6

The resulting array should look like this: [1, [2, 3], 4, [5, 6]]

Remember:
- Arrays can contain other arrays as elements.
- Nested arrays are defined using additional square brackets [].

---INITIALCODE---
function createNestedArray() {
  // Your code here
}

---TESTCASES---
[
  { "func": "createNestedArray()", "expected": [1, [2, 3], 4, [5, 6]], "type": "return" }
]

---BLACKLIST---
[]

---HINTS---
- Remember to use square brackets [] for both the main array and the nested arrays.
- Make sure each nested array is correctly placed as an element in the main array.
- Double-check that you've included all the required elements in the correct order.

---EXPLANATION---
In JavaScript, arrays can contain not only simple data types but also other arrays. This creates what we call a "nested array" or a "multidimensional array". Each nested array is treated as a single element of the parent array.

For example:
let nestedArray = [1, [2, 3], 4];
In this array, [2, 3] is a single element of the outer array.

In this problem, we need to create an array that includes both simple number elements and nested array elements.

---WALKTHROUGH---
To solve this problem, think about these steps:

1. How do you start defining the main array?
2. How do you include a simple number as an array element?
3. How do you define a nested array within the main array?
4. How do you ensure that the nested arrays are in the correct positions?

Consider each of these points as you write your function. Remember, the goal is to create and return an array that matches the structure specified in the problem description.

---SOLUTION---
function createNestedArray() {
  return [1, [2, 3], 4, [5, 6]];
}
