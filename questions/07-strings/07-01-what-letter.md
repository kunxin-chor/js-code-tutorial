---QUESTION---
---TITLE---
What Letter

---DESCRIPTION---
Write a function that takes a string and an index as parameters, then returns the character at that index of the string.

## Example
```
Input: getCharAtIndex("Hello", 1)
Returns: "e"

Input: getCharAtIndex("JavaScript", 4)
Returns: "S"

Input: getCharAtIndex("OpenAI", 0)
Returns: "O"
```

---INITIALCODE---
function getCharAtIndex(message, index) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getCharAtIndex('wake me up when September ends', 2)", "expected": "k", "type": "return" },
  { "func": "getCharAtIndex('Hello, World!', 7)", "expected": "W", "type": "return" },
  { "func": "getCharAtIndex('JavaScript', 0)", "expected": "J", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, think about how you can access individual characters in a string. Consider:

1. How are characters in a string indexed?
2. What happens if the index is out of bounds?
3. How can you ensure your function works for any valid input?

Remember, strings in JavaScript are zero-indexed, meaning the first character is at index 0.

---HINTS---
- Strings in JavaScript can be accessed like arrays using square bracket notation.
- Check if the index is valid before trying to access the character.
- Remember that string indices start at 0, not 1.

For more information on string methods and properties, refer to the following MDN documentation:
- String.prototype.charAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
- String.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

---SOLUTION---
function getCharAtIndex(message, index) {
  if (index < 0 || index >= message.length) {
    return undefined;
  }
  return message[index];
}

---EXPLANATION---
This solution uses the square bracket notation to access the character at the specified index. It also includes a check to ensure the index is valid, returning undefined for out-of-bounds indices.

