---QUESTION---
---TITLE---
Count the Positives

---DESCRIPTION---
Write a function, **countThePositives**, which takes in three integer arguments, and returns the number of integers which are **larger** than 0. 

### Examples

```javascript
let result1 = countThePositives(123, 4, -2); 
console.log(result1); // Output: 2

let result2 = countThePositives(-1, -5, -2); 
console.log(result2); // Output: 0

let result3 = countThePositives(5, 7, 6); 
console.log(result3); // Output: 3
```

---INITIALCODE---
function countThePositives(int1, int2, int3) {
  // Your code here
}

---TESTCASES---
[
  { "func": "countThePositives(123, 4, -2)", "expected": 2, "type": "return" },
  { "func": "countThePositives(-1, -5, -2)", "expected": 0, "type": "return" },
  { "func": "countThePositives(5, 7, 6)", "expected": 3, "type": "return" },
  { "func": "countThePositives(0, 1, -1)", "expected": 1, "type": "return" }
]

---WALKTHROUGH---
To solve this problem, you need to check each number and count how many are positive. Consider these steps:

1. How can you check if a number is positive?
2. How will you keep track of the count of positive numbers?
3. What's an efficient way to check all three numbers?

Think about how you would do this manually. How can you translate that process into code?

---HINTS---
- Remember that positive numbers are greater than 0.
- You'll need a variable to keep track of the count.
- Consider using a conditional statement for each number, or think about if there's a more concise way to structure your code.
- Be careful with zero - it's not considered a positive number in this context.

---SOLUTION---
function countThePositives(int1, int2, int3) {
  let count = 0;
  if (int1 > 0) count++;
  if (int2 > 0) count++;
  if (int3 > 0) count++;
  return count;
}

---EXPLANATION---
This solution does the following:

1. It initializes a `count` variable to 0.
2. It then checks each number individually:
   - If the number is greater than 0, it increments the count.
3. Finally, it returns the total count.

This approach is straightforward and works well for a fixed number of inputs. 

An alternative, more scalable solution could use an array and the `filter()` method:

```javascript
function countThePositives(...numbers) {
  return numbers.filter(num => num > 0).length;
}
```

This solution uses the spread operator (`...`) to collect all arguments into an array, then uses `filter()` to create a new array with only the positive numbers, and finally returns the length of this filtered array.

For more information on the `filter()` method, you can refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).