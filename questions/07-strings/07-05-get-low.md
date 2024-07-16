---QUESTION---
---TITLE---
Get Low

---DESCRIPTION---
Write a function that takes a string as a parameter and returns the string converted to all lowercase letters.

### Examples
```
Input: convertToLowerCase("HELLO")
Return: "hello"

Input: convertToLowerCase("JavaScript")
Return: "javascript"

Input: convertToLowerCase("Already lower")
Return: "already lower"
```

---INITIALCODE---
function convertToLowerCase(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "convertToLowerCase('HELLO')", "expected": "hello", "type": "return" },
  { "func": "convertToLowerCase('JavaScript')", "expected": "javascript", "type": "return" },
  { "func": "convertToLowerCase('Already lower')", "expected": "already lower", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. Is there a built-in method in JavaScript to convert strings to lowercase?
2. How can you ensure that all characters, including non-alphabetic ones, are handled correctly?
3. What happens to characters that are already lowercase?

Remember that string methods in JavaScript return a new string; they don't modify the original string.

---HINTS---
- Look into the `toLowerCase()` method for strings.
- This method automatically handles both lowercase and uppercase letters, as well as non-alphabetic characters.
- The original string remains unchanged, so make sure to return the result of the method.

For more information on the `toLowerCase()` method, see the following MDN documentation:
- String.prototype.toLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

---SOLUTION---
function convertToLowerCase(str) {
  return str.toLowerCase();
}

---EXPLANATION---
This solution uses the `toLowerCase()` method, which is a built-in method for strings in JavaScript. It converts all the characters in the string to lowercase and returns the result. This method handles both lowercase and uppercase letters, leaving non-alphabetic characters unchanged.


