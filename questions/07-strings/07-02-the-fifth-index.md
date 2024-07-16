---QUESTION---
---TITLE---
The Fifth Index

---DESCRIPTION---
Write a function that takes a string as a parameter and returns the character at index 5 of the string. The function should return undefined if the string is less than 6 characters long.

## Examples
```
Input: getFifthChar("Skyway Avenue")
Return: "a"

Input: getFifthChar("JavaScript is awesome")
Return: "c"
```

---INITIALCODE---
function getFifthChar(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getFifthChar('Skyway Avenue')", "expected": "a", "type": "return" },
  { "func": "getFifthChar('JavaScript is awesome')", "expected": "c", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider the following:

1. How can you check the length of a string?
2. What should happen if the string is too short?
3. How can you access a specific character in a string?

Remember that string indices in JavaScript start at 0, so the "fifth index" is actually at position 5 in the string.

---HINTS---
- Use the `length` property of strings to check if it's long enough.
- Remember that string indices are zero-based, so the sixth character is at index 5.
- Return `undefined` explicitly if the string is too short.

---SOLUTION---
function getFifthChar(str) {
  if (str.length < 6) {
    return undefined;
  }
  return str[5];
}

---EXPLANATION---
This solution first checks if the string is at least 6 characters long using the `length` property. If it's not, it returns `undefined`. Otherwise, it returns the character at index 5 (which is the sixth character) using bracket notation.

For more information on string properties and methods used in this solution, see the following MDN documentation:
- String.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
- Accessing string characters using bracket notation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#character_access
