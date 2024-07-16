---QUESTION---
---TITLE---
Remove Vowels

---DESCRIPTION---
Write a function that accepts a string as a parameter and returns a new string with all vowels removed. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase). Do not use regular expressions.

### Examples
```
Input: "hello"
Output: "hll"

Input: "HELLO WORLD"
Output: "HLL WRLD"
```

---INITIALCODE---
function removeVowels(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "removeVowels('hello')", "expected": "hll", "type": "return" },
  { "func": "removeVowels('HELLO WORLD')", "expected": "HLL WRLD", "type": "return" },
  { "func": "removeVowels('aEiOu')", "expected": "", "type": "return" },
  { "func": "removeVowels('xyz')", "expected": "xyz", "type": "return" },
  { "func": "removeVowels('')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem without using regular expressions, consider:

1. How can you identify vowels in a string?
2. How can you build a new string that excludes certain characters?
3. How will you handle both uppercase and lowercase vowels?
4. What's an efficient way to check if a character is a vowel without using regex?

Remember that strings in JavaScript are immutable, so you'll need to build a new string rather than modifying the existing one.

---HINTS---
- You can use a for loop to iterate through each character in the string.
- Consider using an array or string of vowels to check against.
- The `includes()` method can be useful for checking if a character is in a set of characters.
- Remember to handle both uppercase and lowercase vowels.


For more information on the string methods used, see the following MDN documentation:
- String.prototype.includes(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

---BLACKLIST---
["replace", "/[aeiou]/gi", "RegExp", "match", "test"]

---SOLUTION---
function removeVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

---EXPLANATION---
This solution works as follows:
1. It defines a string containing all vowels (both lowercase and uppercase).
2. It initializes an empty result string.
3. It iterates through each character in the input string.
4. If the character is not in the vowels string, it adds it to the result.
5. Finally, it returns the result string.

This approach correctly handles all cases:
- It removes both lowercase and uppercase vowels.
- It preserves all non-vowel characters, including spaces and punctuation.
- It works correctly with strings that have no vowels or are empty.
- It doesn't use any regular expressions, adhering to the problem constraints.

