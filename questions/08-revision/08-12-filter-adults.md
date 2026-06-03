---TITLE---
Filter Adult Names

---DESCRIPTION---
Write a function called `adultNames` that takes an array of person objects, each with `name` and `age` properties, and returns an array containing only the **names** of the people who are 18 or older, in the original order.

Example:
```javascript
adultNames([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 12 },
  { name: "Carol", age: 18 }
]);
// returns ["Alice", "Carol"]
```

This question reviews **arrays of objects**, **loops**, **branching**, and **building up a new array**.

---INITIALCODE---
function adultNames(people) {
  // Your code here
}

---BLACKLIST---
[filter, map]

---TESTCASES---
[
  { "func": "adultNames([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 12 }, { name: 'Carol', age: 18 }])", "expected": ["Alice", "Carol"], "type": "return" },
  { "func": "adultNames([{ name: 'Tim', age: 5 }])", "expected": [], "type": "return" },
  { "func": "adultNames([])", "expected": [], "type": "return" },
  { "func": "adultNames([{ name: 'Eve', age: 21 }, { name: 'Sam', age: 40 }])", "expected": ["Eve", "Sam"], "type": "return" }
]

---HINTS---
- Start with an empty result array.
- Loop through each person; if their `age` is `>= 18`, push their `name` into the result.

---EXPLANATION---
This combines array iteration with object property access. We build the result manually using `push`.

```javascript
function adultNames(people) {
  const result = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      result.push(people[i].name);
    }
  }
  return result;
}
```

---SOLUTION---
function adultNames(people) {
  const result = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      result.push(people[i].name);
    }
  }
  return result;
}
