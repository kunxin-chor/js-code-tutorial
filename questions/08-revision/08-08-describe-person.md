---TITLE---
Describe Person

---DESCRIPTION---
Write a function called `describePerson` that takes an object representing a person with `name` and `age` properties, and returns a string in this format:

`"<name> is <age> years old."`

Example:
- `describePerson({ name: "Alice", age: 30 })` → `"Alice is 30 years old."`

This question reviews **objects**, **property access**, and **string concatenation / template literals**.

---INITIALCODE---
function describePerson(person) {
  // Your code here
}

---TESTCASES---
[
  { "func": "describePerson({ name: 'Alice', age: 30 })", "expected": "Alice is 30 years old.", "type": "return" },
  { "func": "describePerson({ name: 'Bob', age: 7 })", "expected": "Bob is 7 years old.", "type": "return" },
  { "func": "describePerson({ name: 'Zara', age: 99 })", "expected": "Zara is 99 years old.", "type": "return" }
]

---HINTS---
- Access properties with dot notation: `person.name`, `person.age`.
- Template literals (`` `text ${value}` ``) make string building easier.

---EXPLANATION---
Template literals interpolate variables and expressions directly inside backtick-strings using `${...}`.

```javascript
function describePerson(person) {
  return `${person.name} is ${person.age} years old.`;
}
```

---SOLUTION---
function describePerson(person) {
  return `${person.name} is ${person.age} years old.`;
}
