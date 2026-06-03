---TITLE---
Count Vowels

---DESCRIPTION---
Write a function called `countVowels` that takes a string and returns the number of vowels (`a`, `e`, `i`, `o`, `u`) it contains. The check should be **case-insensitive**.

Example:
- `countVowels("Hello World")` → `3`
- `countVowels("xyz")` → `0`

This question reviews **strings**, **loops**, **branching**, and **case conversion**.

---INITIALCODE---
function countVowels(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "countVowels('Hello World')", "expected": 3, "type": "return" },
  { "func": "countVowels('xyz')", "expected": 0, "type": "return" },
  { "func": "countVowels('AEIOU')", "expected": 5, "type": "return" },
  { "func": "countVowels('')", "expected": 0, "type": "return" },
  { "func": "countVowels('JavaScript')", "expected": 3, "type": "return" }
]

---HINTS---
- Convert each character to lowercase before checking.
- Keep a string `"aeiou"` and use `.includes()` to check membership.

---EXPLANATION---
Convert characters to lowercase to make the comparison case-insensitive, then check each one against a known vowel set.

```javascript
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
```

---SOLUTION---
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
