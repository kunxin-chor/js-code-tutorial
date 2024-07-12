---QUESTION---
---TITLE---
The Largest Number

---DESCRIPTION---
Write a function, **largestNumber**, which takes in three number parameters and returns the **largest** number. **Do not use `Math.min` or `Math.max` or any other library helper functions to solve this.**

---INITIALCODE---
function largestNumber(num1, num2, num3) {
  // Your code here
}

---TESTCASES---
[
  { "func": "largestNumber(1, 2, 3)", "expected": 3, "type": "return" },
  { "func": "largestNumber(100, 0, 99)", "expected": 100, "type": "return" },
  { "func": "largestNumber(2, 7, 5)", "expected": 7, "type": "return" },
  { "func": "largestNumber(-1, -5, -3)", "expected": -1, "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to compare three numbers and determine which is the largest. Consider these approaches:

1. How can you use conditional statements to compare three numbers?
2. Is there a more efficient way to find the maximum of three numbers?
3. How can you ensure your solution works for both positive and negative numbers?

Think about the logic you would use if you were doing this comparison manually. How can you translate that into code?

---HINTS---
- You could use nested `if...else` statements to compare all three numbers, but there might be a more elegant solution.
- You just need to know which number is the largest, not the second largest or the smallest.
- A more readable solution includes using a variable to keep track of the largest number so far.

---SOLUTION---
function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

function largestNumberVersion2(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}

---EXPLANATION---

In both solutions, the objective is to determine the largest of three given numbers (`num1`, `num2`, `num3`).

#### Solution 1: Using `if...else if...else`

In the first solution, we utilize a series of conditional checks to compare the three numbers directly:

```javascript
function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
```

- **Step-by-step breakdown**:
  1. The function starts by comparing `num1` to both `num2` and `num3`. If `num1` is greater than or equal to both, it returns `num1` as the largest number.
  2. If the first condition is not met, it checks whether `num2` is greater than or equal to both `num1` and `num3`. If true, it returns `num2`.
  3. If neither of the above conditions are true, it concludes that `num3` must be the largest number and returns `num3`.

This approach ensures that the largest number is identified by directly comparing each number against the others in a structured manner.

#### Solution 2: Using a State Variable (Accumulator)

In the second solution, we use an accumulator (or state variable) to keep track of the largest number as we progress through the comparisons:

```javascript
function largestNumberVersion2(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}
```

- **Step-by-step breakdown**:
  1. The function initializes a variable `largest` with the value of `num1`.
  2. It then compares `num2` with `largest`. If `num2` is greater, `largest` is updated to the value of `num2`.
  3. Next, it compares `num3` with the current value of `largest`. If `num3` is greater, `largest` is updated to the value of `num3`.
  4. Finally, the function returns the value of `largest`, which now holds the largest number among the three.

This method leverages a single variable to keep track of the largest value encountered so far, updating it as needed. It is often considered more intuitive and flexible, especially when dealing with a larger set of numbers.