---TITLE---
Object Property Checker

---DESCRIPTION---
Write a function named `objChecker` that takes an object and a property as arguments. The function should return the corresponding **value** if the property is present in the object, and **undefined** otherwise.

### Examples
```
Input: ({1: 'one', 2: 'two', 3: 'three'}, 1)
Output: 'one'

Input: ({1: 'one', 2: 'two', 3: 'three'}, 4)
Output: undefined
```

---INITIALCODE---
function objChecker(obj, prop) {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "objChecker({1: 'one', 2: 'two', 3: 'three'}, 1)",
    "expected": "one",
    "type": "return"
  },
  {
    "func": "objChecker({a: 'apples', b: 'bananas', c: 'cherries', d:'durians'}, 4)",
    "expected": "durians",
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to access object properties and handle cases where a property doesn't exist. Consider the following concepts:

1. You can access object properties using dot notation or bracket notation.
2. When you try to access a property that doesn't exist, JavaScript returns `undefined`.
3. You can use conditional statements to check if a property exists before accessing it.
4. Alternatively, you can use the optional chaining operator (`?.`) in modern JavaScript.

Think about which method would be most appropriate for this task and how to implement it.

---HINTS---
- You can use bracket notation to access the property: `obj[prop]`
- If the property doesn't exist, accessing it will naturally return `undefined`
- You don't need to explicitly return `undefined` if the property doesn't exist
- For more information on accessing object properties, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

---SOLUTION---
function objChecker(obj, prop) {
  return obj[prop];
}

---EXPLANATION---
In this solution, we simply return the value of `obj[prop]`. If the property exists in the object, this will return its value. If the property doesn't exist, JavaScript will automatically return `undefined`. This simple approach satisfies both conditions of the problem: returning the value if the property exists, and `undefined` if it doesn't.
