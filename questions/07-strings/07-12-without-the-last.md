---QUESTION---
---TITLE---
Without the Last

---DESCRIPTION---
Write a function that takes a string as a parameter and returns a new string with the last character removed. If the input string is empty, return an empty string.

### Examples
```
Input: "hello"
Output: "hell"

Input: "JavaScript"
Output: "JavaScrip"
```

---INITIALCODE---
function removeLastChar(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "removeLastChar('hello')", "expected": "hell", "type": "return" },
  { "func": "removeLastChar('JavaScript')", "expected": "JavaScrip", "type": "return" },
  { "func": "removeLastChar('a')", "expected": "", "type": "return" },
  { "func": "removeLastChar('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you extract a portion of a string in JavaScript?
2. What method allows you to get a substring up to a specific index?
3. How can you determine the index of the last character?
4. How should you handle empty strings?

Remember that the length of a string is always one more than the index of its last character.

---HINTS---
- The `slice()` method can be used to extract a portion of a string.
- The `length` property of a string gives you its length.
- To get everything except the last character, you need to slice from the start to `length - 1`.
- Don't worry about empty strings - trying to slice them shouldn't cause an error.

For more information on the `slice()` method and string length, see the following MDN documentation:
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
- String.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length


---SOLUTION---
function removeLastChar(str) {
  return str.slice(0, -1);
}

---EXPLANATION---
This solution uses the `slice()` method to return a new string containing all characters from the start of the string up to, but not including, the last character.

The `slice()` method accepts negative indices, which count from the end of the string. So, `slice(0, -1)` means "from the start of the string to the second-to-last character".

This approach works well because:
- If the string is empty, it returns an empty string.
- If the string has only one character, it returns an empty string.
- For any longer string, it returns everything except the last character.

