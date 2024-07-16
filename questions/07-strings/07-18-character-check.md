---QUESTION---
---TITLE---
Character Check

---DESCRIPTION---
Write a function that takes a string as input and returns true if the string contains the '@' character, and false otherwise.

### Examples
```
Input: "test@example.com"
Output: true

Input: "noatsymbol"
Output: false
```



---INITIALCODE---
function hasAtSymbol(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "hasAtSymbol('test@example.com')", "expected": true, "type": "return" },
  { "func": "hasAtSymbol('noatsymbol')", "expected": false, "type": "return" },
  { "func": "hasAtSymbol('@beginningatsymbol')", "expected": true, "type": "return" },
  { "func": "hasAtSymbol('endingatsymbol@')", "expected": true, "type": "return" },
  { "func": "hasAtSymbol('')", "expected": false, "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you check if a specific character is present in a string?
2. What's the most efficient way to perform this check?
3. How will you handle an empty string?
4. Do you need to check the entire string, or can you stop once you find the character?

Remember that you only need to find one occurrence of the '@' symbol to return true.

---HINTS---
- The `indexOf()` method can be used to find the position of a character in a string.
- Alternatively, you could use a for loop to check each character in the string.
- Remember that `indexOf()` returns -1 if the character is not found.

For more information on the `indexOf()` method, see the following MDN documentation:
- String.prototype.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


---BLACKLIST---
["includes", "search", "match", "/[@]/"]

---SOLUTION---
function hasAtSymbol(str) {
  return str.indexOf('@') !== -1;
}

---EXPLANATION---
This solution uses the `indexOf()` method to search for the '@' symbol in the string:
- `indexOf('@')` returns the index of the first occurrence of '@' in the string.
- If '@' is not found, `indexOf()` returns -1.
- The function returns true if the result is not -1 (i.e., '@' was found), and false otherwise.

This approach is efficient because:
- It stops searching as soon as it finds the first '@' symbol.
- It works correctly for all cases, including empty strings and strings with multiple '@' symbols.
- It's a concise one-line solution that's easy to read and understand.

