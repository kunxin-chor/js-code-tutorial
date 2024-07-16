---QUESTION---
---TITLE---
Substring

---DESCRIPTION---
Write a function that takes three parameters: a string and two integers (start and end). The function should return the substring starting at the 'start' index and ending at the 'end' index (inclusive).

---INITIALCODE---
function getSubstring(str, start, end) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getSubstring('Go big or go home', 2, 4)", "expected": "big", "type": "return" },
  { "func": "getSubstring('The quick brown fox jumped over the lazy dog.', 4, 19)", "expected": "quick brown fox", "type": "return" },
  { "func": "getSubstring('fly me to the moon', 0, 18)", "expected": "fly me to the moon", "type": "return" },
  { "func": "getSubstring('short', 2, 10)", "expected": "ort", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. What method in JavaScript allows you to extract a portion of a string?
2. How does this method handle the end index compared to what the question asks?
3. How should you handle cases where the end index is beyond the string length?
4. What happens if the start index is greater than the end index?

Remember that string indices in JavaScript are zero-based, and most substring methods in JavaScript have an exclusive end index.

---HINTS---
- The `substring()` method can be used to extract a portion of a string.
- `substring()` automatically swaps start and end if start is greater than end.
- To include the character at the end index, you might need to adjust the end parameter.
- Be careful with indices that are out of bounds - `substring()` will automatically adjust them.

For more information on the `substring()` method, see the following MDN documentation:
- String.prototype.substring(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

---SOLUTION---
function getSubstring(str, start, end) {
  return str.substring(start, end + 1);
}

---EXPLANATION---
This solution uses the `substring()` method to extract a portion of the string. The `substring()` method takes two arguments: the start index (inclusive) and the end index (exclusive). To include the character at the end index as required by the question, we add 1 to the end parameter.

The `substring()` method has some built-in safeguards:
- If start > end, it swaps the two arguments.
- If either argument is negative or is NaN, it is treated as if it were 0.
- If either argument is greater than the string's length, it is treated as if it were equal to the string's length.

This means our function will work correctly even with out-of-bounds indices.


