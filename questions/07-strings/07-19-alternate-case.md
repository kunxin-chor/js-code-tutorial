---QUESTION---
---TITLE---
Alternate Case

---DESCRIPTION---
Write a function that takes a string as input and returns a new string where characters at even indices are uppercase and characters at odd indices are lowercase. Assume the input string contains only letters and spaces. Spaces should remain unchanged and do not count when determining even/odd indices.

---INITIALCODE---
function alternateCase(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "alternateCase('hello')", "expected": "HeLlO", "type": "return" },
  { "func": "alternateCase('HELLO WORLD')", "expected": "HeLlO wOrLd", "type": "return" },
  { "func": "alternateCase('a')", "expected": "A", "type": "return" },
  { "func": "alternateCase('AlTeRnAtE cAsE')", "expected": "AlTeRnAtE cAsE", "type": "return" },
  { "func": "alternateCase('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you iterate through the characters of a string?
2. How will you keep track of whether a character should be uppercase or lowercase?
3. How will you handle spaces in the string?
4. How can you build the new string with alternating case?

Remember that strings in JavaScript are immutable, so you'll need to build a new string.

---HINTS---
- You can use a for loop to iterate through the string characters.
- Keep a separate counter for letter positions, incrementing it only for non-space characters.
- Use the `toUpperCase()` and `toLowerCase()` methods to change the case of individual characters.
- The modulo operator (%) can help determine if a position is even or odd.

For more information on the string methods used, see the following MDN documentation:
- String.prototype.toUpperCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
- String.prototype.toLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

---BLACKLIST---
[]

---SOLUTION---
function alternateCase(str) {
  let result = '';
  let letterCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += ' ';
    } else {
      result += letterCount % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
      letterCount++;
    }
  }
  
  return result;
}

---EXPLANATION---
This solution works as follows:
1. It initializes an empty result string and a letter counter.
2. It iterates through each character of the input string.
3. If the character is a space, it adds it to the result unchanged.
4. For letters, it checks if the letter count is even or odd:
   - If even, it adds the uppercase version of the letter.
   - If odd, it adds the lowercase version of the letter.
5. It increments the letter counter for each letter (not for spaces).
6. Finally, it returns the resulting string.

This approach correctly handles all cases:
- It alternates case for letters, starting with uppercase.
- It preserves spaces and doesn't count them when alternating case.
- It works correctly for strings of any length, including empty strings and single characters.


