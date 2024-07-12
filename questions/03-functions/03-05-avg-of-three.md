---QUESTION---
---TITLE---
Average of Three Numbers

---DESCRIPTION---
Write a function, named **averageOfThree**

The function will take in three integer arguments.

The function will return the average of the three integers. 

---INITIALCODE---
function averageOfThree(a, b, c) {
  // Your code here
}

---HINTS---
- Remember that the average is the sum of all numbers divided by the count of numbers.
- You don't need to round the result to a specific number of decimal places.

---WALKTHROUGH---
When writing a function to solve a problem, follow the steps below:
1. What's the name of the function? A function name should be descriptive of what it does.
2. What are the parameters? The parameters are the inputs to the function.
3. What is the return value? The return value is the output of the function.
4. How do we get from the parameters to the return value? That should be the code in the body of the function.

Let's apply the steps to this problem:
1. The name of the function is `averageOfThree`. This is already given in the initial code.

2. The parameters are `a`, `b`, and `c`. These are the three integers we'll be averaging.

3. The return value should be the average of these three numbers.

4. To get from the parameters to the return value, we need to:
   - Sum up the three numbers (a + b + c)
   - Divide the sum by 3 (because we have 3 numbers)

Now write the function.



---TESTCASES---
[
  { "func": "averageOfThree(10, 15, 20)", "expected": 15, "type": "return" },
  { "func": "averageOfThree(3, 4, 5)", "expected": 4, "type": "return" },
  { "func": "averageOfThree(10, 30, 15)", "expected": 18.333333333333332, "type": "return" }
]

---EXPLANATION---
Let's break down the solution:

```javascript
function averageOfThree(a, b, c) {
  return (a + b + c) / 3;
}
```

1. `function averageOfThree(a, b, c) {`: This declares a function named `averageOfThree` that takes three parameters: `a`, `b`, and `c`.

2. `(a + b + c)`: This part adds up all three numbers.

3. `/ 3`: This divides the sum by 3, which is the number of values we're averaging.

4. `return`: This statement returns the final result of the calculation.

This function demonstrates several important JavaScript concepts:

- **Arithmetic operations**: We're using addition (`+`) and division (`/`).
- **Order of operations**: The parentheses ensure that the addition is performed before the division.
- **Return statement**: The function immediately returns the result of the calculation.

It's worth noting that this function will work with both integer and floating-point inputs, and it will return a floating-point result if the average is not a whole number.

Also, be aware that in JavaScript, like many programming languages, division by zero results in `Infinity`. If you need to handle the case where all inputs might be zero, you may want to add a check for that.

Lastly, due to the way floating-point arithmetic works in computers, you might sometimes see tiny inaccuracies in the results when dealing with decimal numbers. This is normal and expected behavior in most programming languages, including JavaScript.

---SOLUTION---
function averageOfThree(a, b, c) {
  return (a + b + c) / 3;
}