---QUESTION---
---TITLE---
Are We The Same

---DESCRIPTION---
Write a function that takes two strings as parameters and returns true if they are equal (ignoring case), and false otherwise.

### Examples
```
Input: areStringsEqualIgnoreCase("ABCDEFG", "abcdefg")
Return: true

Input: areStringsEqualIgnoreCase("apple", "banana")
Return: false

Input: areStringsEqualIgnoreCase("Round and round", "Round and round")
Return: true
```

---INITIALCODE---
function areStringsEqualIgnoreCase(str1, str2) {
  // Your code here
}

---TESTCASES---
[
  { "func": "areStringsEqualIgnoreCase('ABCDEFG', 'abcdefg')", "expected": true, "type": "return" },
  { "func": "areStringsEqualIgnoreCase('apple', 'banana')", "expected": false, "type": "return" },
  { "func": "areStringsEqualIgnoreCase('Round and round', 'Round and round')", "expected": true, "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you compare strings in JavaScript?
2. How can you ignore the case when comparing strings?
3. What string methods might be helpful in achieving case-insensitive comparison?

Remember that direct string comparison in JavaScript is case-sensitive by default.

---HINTS---
- Convert both strings to the same case (either lowercase or uppercase) before comparing.
- The `toLowerCase()` or `toUpperCase()` methods can be useful here.
- Use the strict equality operator (`===`) to compare the converted strings.

For more information on the methods and operators used, see the following MDN documentation:
- String.prototype.toLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
- Strict equality (===): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality


---SOLUTION---
function areStringsEqualIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

---EXPLANATION---
This solution converts both input strings to lowercase using the `toLowerCase()` method, then compares them using the strict equality operator (`===`). By converting both strings to lowercase first, we ensure that the comparison is case-insensitive.

