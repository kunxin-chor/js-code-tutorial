---QUESTION---
---TITLE---
Replacement

---DESCRIPTION---
Write a function that takes a string as a parameter and returns a new string where the word "How" is replaced with "Where". You are not allowed to use regular expressions or the replace() function.

### Examples
```
Input: "How are you?"
Output: "Where are you?"

Input: "How How How"
Output: "Where Where Where"
```

---INITIALCODE---
function replaceHow(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "replaceHow('How are you')", "expected": "Where are you", "type": "return" },
  { "func": "replaceHow('How How How')", "expected": "Where Where Where", "type": "return" },
  { "func": "replaceHow('How about that?')", "expected": "Where about that?", "type": "return" },
  { "func": "replaceHow('Show me how')", "expected": "Show me how", "type": "return" }
]

---WALKTHROUGH---
To solve this problem without using regular expressions or the replace() function, consider:

1. How can you identify the occurrences of "How" in the string?
2. How can you build a new string with the replacements?
3. What string methods or operations can you use to manipulate the string?
4. How can you ensure that you replace all occurrences of "How", not just the first one?

Remember that strings in JavaScript are immutable, so you'll need to build a new string rather than modifying the existing one.

---HINTS---
- You might want to use a loop to go through the string character by character.
- The indexOf() method can help you find occurrences of "How".
- You can use string concatenation or template literals to build the new string.
- Be careful to handle cases where "How" appears multiple times or not at all.

For more information on the string methods used, see the following MDN documentation:
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

---BLACKLIST---
["replace", "/\\/g"]

---SOLUTION---
function replaceHow(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    if (str.slice(i, i + 3) === 'How') {
      result += 'Where';
      i += 3;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}

---EXPLANATION---
This solution iterates through the string character by character:
- It checks if the current substring (of length 3) is 'How'.
- If it is, it adds 'Where' to the result and moves the index by 3.
- If not, it adds the current character to the result and moves to the next character.

This approach works for all cases:
- It replaces all occurrences of 'How', not just the first one.
- It doesn't replace substrings of words (like 'Show').
- It works correctly even if 'How' appears at the end of the string.


