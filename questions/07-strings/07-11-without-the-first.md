---QUESTION---
---TITLE---
Without the First

---DESCRIPTION---
Write a function that takes a string as a parameter and returns a new string with the first character removed. If the input string is empty, return an empty string.

### Examples
```
Input: "hello"
Output: "ello"

Input: "JavaScript"
Output: "avaScript"
```

---INITIALCODE---
function removeFirstChar(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "removeFirstChar('hello')", "expected": "ello", "type": "return" },
  { "func": "removeFirstChar('JavaScript')", "expected": "avaScript", "type": "return" },
  { "func": "removeFirstChar('a')", "expected": "", "type": "return" },
  { "func": "removeFirstChar('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you extract a portion of a string in JavaScript?
2. What method allows you to get a substring starting from a specific index?
3. How should you handle empty strings?
4. What's the index of the second character in a string?

Remember that string indices in JavaScript start at 0, so the second character is at index 1.

---HINTS---
- The `slice()` method can be used to extract a portion of a string.
- Starting from index 1 will give you everything except the first character.
- Don't worry about empty strings - trying to slice them shouldn't cause an error.

For more information on the `slice()` method, see the following MDN documentation:
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

---SOLUTION---
function removeFirstChar(str) {
  return str.slice(1);
}

---EXPLANATION---
This solution uses the `slice()` method to return a new string containing all characters from index 1 to the end of the string. This effectively removes the first character.

The `slice()` method is flexible:
- If the string is empty, `slice(1)` returns an empty string.
- If the string has only one character, `slice(1)` returns an empty string.
- For any longer string, it returns everything except the first character.

