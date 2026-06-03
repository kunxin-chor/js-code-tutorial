---TITLE---
Reverse a String

---DESCRIPTION---
Write a function called `reverseString` that takes a string and returns the string reversed.

Example:
- `reverseString("hello")` → `"olleh"`
- `reverseString("a")` → `"a"`
- `reverseString("")` → `""`

You may **not** use the built-in `reverse()` array method.

This question reviews **strings**, **loops**, and **string indexing**.

---INITIALCODE---
function reverseString(str) {
  // Your code here
}

---BLACKLIST---
[reverse]

---TESTCASES---
[
  { "func": "reverseString('hello')", "expected": "olleh", "type": "return" },
  { "func": "reverseString('a')", "expected": "a", "type": "return" },
  { "func": "reverseString('')", "expected": "", "type": "return" },
  { "func": "reverseString('JavaScript')", "expected": "tpircSavaJ", "type": "return" }
]

---HINTS---
- Loop from the **last** index (`str.length - 1`) down to `0`.
- Build a new string by concatenating each character.

---EXPLANATION---
Iterate backwards and append each character to a result string.

```javascript
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
```

---SOLUTION---
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
