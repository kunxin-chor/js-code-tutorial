---QUESTION---
---TITLE---
Just the Middle

---DESCRIPTION---
Write a function that takes a string as a parameter and returns a new string with both the first and last characters removed. If the input string has fewer than 3 characters, return an empty string.

### Examples
```
Input: "hello"
Output: "ell"

Input: "JavaScript"
Output: "avaScrip"
```

---INITIALCODE---
function removeFirstAndLastChar(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "removeFirstAndLastChar('hello')", "expected": "ell", "type": "return" },
  { "func": "removeFirstAndLastChar('JavaScript')", "expected": "avaScrip", "type": "return" },
  { "func": "removeFirstAndLastChar('a')", "expected": "", "type": "return" },
  { "func": "removeFirstAndLastChar('ab')", "expected": "", "type": "return" },
  { "func": "removeFirstAndLastChar('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you remove both the first and last characters of a string?
2. Can you combine the techniques from the previous two problems?
3. How should you handle strings with fewer than 3 characters?
4. What's the most efficient way to extract the middle portion of a string?

Remember that you can chain string methods or use a single method call with appropriate arguments.

---HINTS---
- The `slice()` method can be used to extract a portion of a string.
- You can use `slice()` with two arguments to specify both start and end indices.
- Check the length of the string before attempting to remove characters.
- Remember that string indices start at 0 and that `slice()` end index is exclusive.

For more information on the `slice()` method, see the following MDN documentation:
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

---SOLUTION---
function removeFirstAndLastChar(str) {
  return str.length < 3 ? '' : str.slice(1, -1);
}

---EXPLANATION---
This solution first checks if the string length is less than 3. If it is, it returns an empty string. Otherwise, it uses the `slice()` method to return a new string containing all characters except the first and last.

The `slice(1, -1)` call means "from the second character to the second-to-last character":
- The first argument (1) specifies the start index (inclusive).
- The second argument (-1) specifies the end index (exclusive), counting from the end of the string.

This approach efficiently handles all cases:
- Strings with fewer than 3 characters return an empty string.
- Strings with 3 or more characters return the middle portion.


