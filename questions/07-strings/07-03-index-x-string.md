---QUESTION---
---TITLE---
Index X String

---DESCRIPTION---
Write a function that takes two parameters: a string and an integer X. The function should return the character at index X of the string. If X is out of bounds, return undefined.

### Examples
Input: getCharAtIndex("Hello", 1)
Return: "e"

Input: getCharAtIndex("JavaScript", 4)
Return: "S"

Input: getCharAtIndex("OpenAI", 0)
Return: "O"
```

---INITIALCODE---
function getCharAtIndex(str, x) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getCharAtIndex('Skyway Avenue', 0)", "expected": "S", "type": "return" },
  { "func": "getCharAtIndex('Ocean Avenue', 5)", "expected": " ", "type": "return" },
  { "func": "getCharAtIndex('Ice Cream Truck', 11)", "expected": "r", "type": "return" },
]

---WALKTHROUGH---
To solve this problem, think about:

1. How can you access a specific character in a string?
2. What should happen if the index is out of bounds?
3. How can you check if an index is valid for a given string?

Remember that strings in JavaScript are zero-indexed, and spaces count as characters too.

---HINTS---
- Use bracket notation to access characters in a string.
- Check if the index is within the valid range before accessing the character.
- The `length` property of a string can be useful for checking bounds.

For more information on string properties and methods used in this solution, see the following MDN documentation:
- String.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
- Accessing string characters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#character_access

---SOLUTION---
function getCharAtIndex(str, x) {
  if (x < 0 || x >= str.length) {
    return undefined;
  }
  return str[x];
}

---EXPLANATION---
This solution first checks if the index `x` is within the valid range for the string `str`. If `x` is negative or greater than or equal to the length of the string, it returns `undefined`. Otherwise, it returns the character at index `x` using bracket notation.


