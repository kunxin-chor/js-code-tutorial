---TITLE---
Add Elements of Two Arrays

---DESCRIPTION---
Write a function called `addArrays` that takes two arrays of numbers as parameters. The function should add the elements at corresponding indices and return a new array with the results. Assume both input arrays have the same length.

Example:
Input: addArrays([1, 2, 3], [4, 5, 6])
Output: [5, 7, 9]

Remember:
- Do not use any built-in methods except for push and the length property.
- Create a new array to store the results.
- Assume both input arrays have the same length.

---INITIALCODE---
function addArrays(arr1, arr2) {
  // Your code here
}

---TESTCASES---
[
  { "func": "addArrays([1, 2, 3], [4, 5, 6])", "expected": [5, 7, 9], "type": "return" },
  { "func": "addArrays([10, 20, 30], [1, 2, 3])", "expected": [11, 22, 33], "type": "return" },
  { "func": "addArrays([-1, 0, 1], [1, 0, -1])", "expected": [0, 0, 0], "type": "return" }
]

---BLACKLIST---
[map, reduce, forEach]

---HINTS---
- Use a for loop to iterate through both arrays simultaneously.
- Create a new array to store the sum of corresponding elements.
- Remember to add elements from both arrays at the same index in each iteration.

---EXPLANATION---
Adding elements of two arrays at corresponding indices is a common operation in array manipulation. This task involves iterating through both arrays simultaneously and performing an operation (in this case, addition) on the elements at each index.

The process can be broken down into these steps:
1. Create a new array to store the results.
2. Iterate through the arrays.
3. For each index, add the elements from both arrays.
4. Store the result in the new array.
5. Return the new array with the summed elements.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How do you create a new array to store the results?
2. How can you iterate through both input arrays simultaneously?
3. Within each iteration, how do you add the corresponding elements from both arrays?
4. How do you store each sum in the new array?
5. After the iteration is complete, what should your function return?

Think about each of these points as you write your function. Remember, the goal is to return a new array where each element is the sum of the corresponding elements from the two input arrays.

---SOLUTION---
function addArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}
