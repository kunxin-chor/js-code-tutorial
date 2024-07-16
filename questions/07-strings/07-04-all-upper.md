---QUESTION---
---TITLE---
All Upper

---DESCRIPTION---
Write a function that takes a string as a parameter and returns the string converted to all uppercase letters.

## Examples
```
Input: convertToUpperCase("hello")
Output: "HELLO"

Input: convertToUpperCase("JavaScript")
Output: "JAVASCRIPT"

Input: convertToUpperCase("Already UPPER")
Output: "ALREADY UPPER"
```

---INITIALCODE---
function convertToUpperCase(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "convertToUpperCase('hello')", "expected": "HELLO", "type": "return" },
  { "func": "convertToUpperCase('JavaScript')", "expected": "JAVASCRIPT", "type": "return" },
  { "func": "convertToUpperCase('Already UPPER')", "expected": "ALREADY UPPER", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. Is there a built-in method in JavaScript to convert strings to uppercase?
2. How can you ensure that all characters, including non-alphabetic ones, are handled correctly?
3. What happens to characters that are already uppercase?

Remember that string methods in JavaScript return a new string; they don't modify the original string.

---HINTS---
- Look into the `toUpperCase()` method for strings.
- This method automatically handles both lowercase and uppercase letters, as well as non-alphabetic characters.
- The original string remains unchanged, so make sure to return the result of the method.

For more information on the `toUpperCase()` method, see the following MDN documentation:
- String.prototype.toUpperCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

---SOLUTION---
function convertToUpperCase(str) {
  return str.toUpperCase();
}

---EXPLANATION---
This solution uses the `toUpperCase()` method, which is a built-in method for strings in JavaScript. It converts all the characters in the string to uppercase and returns the result. This method handles both lowercase and uppercase letters, leaving non-alphabetic characters unchanged.


