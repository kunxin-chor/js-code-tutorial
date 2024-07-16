---TITLE---
Object Checker

---DESCRIPTION---
Write a function named `objChecker` that takes an object and a property as arguments. The function should return true if the property is present in the object and false otherwise.

---INITIALCODE---
function objChecker(obj, prop) {
  // Your code here
}

---TESTCASES---
[
  {
    "func": "objChecker({1: 'one', 2: 'two', 3: 'three'}, 1)",
    "expected": true,
    "type": "return"
  },
  {
    "func": "objChecker({1: 'one', 2: 'two', 3: 'three'}, 4)",
    "expected": false,
    "type": "return"
  },
  {
    "func": "objChecker({fourty: 'one', meow: 'two', moo: 'three'}, 'meow')",
    "expected": true,
    "type": "return"
  },
  {
    "func": "objChecker({fourty: 'one', meow: 'two', moo: 'three'}, 'ananas')",
    "expected": false,
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to check for the existence of a property in an object. Consider the following concepts:

1. Objects in JavaScript have built-in methods to check for properties.
2. You can use the `hasOwnProperty` method or the `in` operator to check if a property exists in an object.
3. The `hasOwnProperty` method only checks for the object's own properties, not inherited ones.
4. The `in` operator checks for both own properties and inherited properties.

Think about which method would be most appropriate for this task and how to implement it.

---HINTS---
- The `hasOwnProperty` method is mentioned in the problem description.
- The syntax for using `hasOwnProperty` is: `object.hasOwnProperty(propertyName)`
- Remember that `hasOwnProperty` returns a boolean value.
- For more information on the `hasOwnProperty` method, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

---SOLUTION---
function objChecker(obj, prop) {
  return obj.hasOwnProperty(prop);
}

---EXPLANATION---
In this solution, we use the `hasOwnProperty` method of the object to check if the given property exists in the object. This method returns `true` if the object has the specified property as its own property (not inherited), and `false` otherwise. This directly fulfills the requirements of the problem, returning `true` if the property is present and `false` otherwise.
