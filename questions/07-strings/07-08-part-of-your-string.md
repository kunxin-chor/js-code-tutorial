---QUESTION---
---TITLE---
Part of Your String

---DESCRIPTION---
Write a function that takes a string as a parameter and returns a new string containing only the third, fourth, and fifth characters of the input string. If the string is less than 5 characters long, return as many characters as possible.

---INITIALCODE---
function getMiddleThree(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getMiddleThree('What's another night on Mars')", "expected": "at'", "type": "return" },
  { "func": "getMiddleThree('hello')", "expected": "llo", "type": "return" },
  { "func": "getMiddleThree('hi')", "expected": "i", "type": "return" },
  { "func": "getMiddleThree('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you extract a portion of a string in JavaScript?
2. What method allows you to get a substring based on start and end indices?
3. How should you handle strings that are shorter than 5 characters?
4. What are the correct indices to use to get the third, fourth, and fifth characters?

Remember that string indices in JavaScript start at 0, so the third character is at index 2.

---HINTS---
- The `slice()` method can be used to extract a portion of a string.
- The start index for the third character is 2, and the end index for the fifth character is 5.
- Be careful with strings shorter than 5 characters - `slice()` will automatically adjust to the string length.

---SOLUTION---
function getMiddleThree(str) {
  return str.slice(2, 5);
}

---EXPLANATION---
This solution uses the `slice()` method to extract a portion of the string. The `slice()` method takes two arguments: the start index (inclusive) and the end index (exclusive). By using `slice(2, 5)`, we get the characters at indices 2, 3, and 4, which are the third, fourth, and fifth characters of the string.

If the string is shorter than 5 characters, `slice()` will automatically adjust and return as many characters as possible without throwing an error.

For more information on the `slice()` method, see the following MDN documentation:
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
