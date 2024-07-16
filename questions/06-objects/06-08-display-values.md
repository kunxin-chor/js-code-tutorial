---TITLE---
Display Values

---DESCRIPTION---
Complete the function by replacing the ??? with valid JavaScript code so that it will display all the values of the properties in the object. The expected return value is an array of the property values. Check out documentation on `for...in` at:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
* https://www.w3schools.com/jsref/jsref_forin.asp

### Examples
```
Input: {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'}
Return: [1, 2, 3, 4, 5]
```

---INITIALCODE---
function displayValues(obj) {
 
  let result = [];
  
  // for (let ??? in obj) {
  //   result.push(???);
  // }

  return result;
}

---TESTCASES---
[
  {
    "func": "displayValues({1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'})",    
    "expected": [1, 2, 3, 4, 5],
    "type": "return"
  },
  {
    "func": "displayValues({a: 'apples', b: 'bananas', c: 'cherries', d: 'dates', e: 'grapes'})",    
    "expected": ["apples", "bananas", "cherries", "dates", "grapes"],
    "type": "return"
  }
  
]

---WALKTHROUGH---
To solve this problem, you need to understand how to iterate over object properties and access their values. Consider the following concepts:

1. The `for...in` loop can be used to iterate over the properties of an object.
2. Inside the loop, the loop variable represents the current property name (key).
3. You can use this property name to access the corresponding value in the object.
4. The task requires you to display the property names, not the values.

Think about how you can use these concepts to complete the `for...in` loop and push the correct values into the result array.

---HINTS---
- The loop variable in a `for...in` loop represents the property name (key).
- Remember that the task asks for the property names (keys), not the values.
- For more information on the `for...in` loop, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

---SOLUTION---
function displayValues(obj) {
  let result = [];

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
}

---EXPLANATION---
In this solution, we use a `for...in` loop to iterate over the properties of the object `obj`. The loop variable `key` represents each property name. We then use this property name to access the corresponding value in the object and push it into the `result` array. This gives us an array of the property values, which matches the expected output.
