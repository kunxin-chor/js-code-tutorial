---TITLE---
Even Values

---DESCRIPTION---
Write a function named `objValues` that takes in an object and returns an array of values for properties which have a length of 4 or more characters.

---INITIALCODE---
function objValues(obj) {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "objValues({'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6})",
    "expected": [3, 4, 5],
    "type": "return"
  },
  {
    "func": "objValues({'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11})",
    "expected": [7, 8, 9, 11],
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to consider the following steps:

1. How to iterate over all properties of an object.
2. How to check the length of a property name (key).
3. How to collect values that meet the criteria into an array.

Think about which methods or loops you can use to achieve each of these steps. Consider how you can combine these steps to create a function that filters and collects the required values.

---HINTS---
- You can use `Object.keys()` or a `for...in` loop to iterate over object properties.
- The `length` property can be used to check the number of characters in a string.
- `Array.prototype.filter()` might be useful for selecting values based on a condition.
- For more information on `Object.keys()`, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- For details on `Array.prototype.filter()`, check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---SOLUTION---
function objValues(obj) {
  return Object.keys(obj)
    .filter(key => key.length >= 4)
    .map(key => obj[key]);
}

---EXPLANATION---
This solution uses a combination of `Object.keys()`, `filter()`, and `map()` methods:

1. `Object.keys(obj)` returns an array of all the enumerable property names of the object.
2. `.filter(key => key.length >= 4)` keeps only the keys that have a length of 4 or more characters.
3. `.map(key => obj[key])` transforms the array of filtered keys into an array of their corresponding values in the object.

This approach efficiently filters the keys based on their length and then retrieves the values for those keys, returning an array that meets the specified criteria.
