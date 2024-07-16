---QUESTION---
---TITLE---
About A String

---DESCRIPTION---
Write a function that takes a string as a parameter and returns an object containing two properties: the length of the string and the last character of the string.

For more information on the concepts used, see the following MDN documentation:
- String.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
- Accessing string characters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#character_access
- Object initializer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

## Examples
```
Input: getStringInfo("meow")
Return: { length: 4, lastChar: "w" }

Input: getStringInfo("abracadabra")
Return: { length: 11, lastChar: "a" }

Input: getStringInfo("")
Return: { length: 0, lastChar: undefined }
```

---INITIALCODE---
function getStringInfo(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getStringInfo('meow')", "expected": { "length": 4, "lastChar": "w" }, "type": "return" },
  { "func": "getStringInfo('abracadabra')", "expected": { "length": 11, "lastChar": "a" }, "type": "return" }

]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you determine the length of a string in JavaScript?
2. How can you access the last character of a string?
3. What should happen if the string is empty?
4. How can you create and return an object with specific properties?

Remember that strings in JavaScript have a `length` property and can be accessed like arrays.

---HINTS---
- Use the `length` property to get the string's length.
- The last character of a string is at index `length - 1`.
- Be careful with empty strings - they have a length of 0 and no last character.
- Create an object literal with the required properties.

---SOLUTION---
function getStringInfo(str) {
  return {
    length: str.length,
    lastChar: str.length > 0 ? str[str.length - 1] : undefined
  };
}

---EXPLANATION---
This solution creates and returns an object with two properties:
1. `length`: Uses the `length` property of the string.
2. `lastChar`: Uses bracket notation to access the last character of the string (at index `length - 1`). If the string is empty, it returns `undefined` for the last character.


