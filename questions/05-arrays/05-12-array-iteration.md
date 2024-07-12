---TITLE---
Iterating Through an Array

---DESCRIPTION---
Write a function called `sumArray` that takes an array of numbers as a parameter. The function should return the sum of all the numbers in the array.

Example:
Input: [1, 2, 3, 4, 5]
Output: 15

Remember:
- You can use a for loop to iterate through the array.
- Keep track of the sum as you iterate.

---INITIALCODE---
function sumArray(arr) {
  // Your code here
}

---TESTCASES---
[
  { "func": "sumArray([1, 2, 3, 4, 5])", "expected": 15, "type": "return" },
  { "func": "sumArray([10, 20, 30])", "expected": 60, "type": "return" },
  { "func": "sumArray([-1, 0, 1])", "expected": 0, "type": "return" }
]

---BLACKLIST---
[reduce]

---HINTS---
- Initialize a variable to store the sum before starting the loop.
- In each iteration of the loop, add the current element to your sum variable.
- Remember to return the final sum after the loop ends.

---EXPLANATION---
Iterating through an array is a common operation in programming. In JavaScript, there are several ways to do this, but one of the most basic and widely used methods is the `for` loop.

A basic for loop to iterate through an array looks like this:
```javascript
for (let i = 0; i < array.length; i++) {
  // Do something with array[i]
}
```

In this problem, we need to iterate through the array and keep a running sum of all its elements.

---WALKTHROUGH---
To solve this problem, consider these steps:

1. How do you initialize a variable to store the sum?
2. How do you set up a for loop to iterate through all elements of the array?
3. Inside the loop, how do you add each element to the sum?
4. After the loop ends, what should your function return?

Think about each of these points as you write your function. Remember, the goal is to calculate and return the sum of all elements in the input array.

---SOLUTION---
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
