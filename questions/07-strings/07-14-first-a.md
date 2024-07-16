---QUESTION---
---TITLE---
First 'a'

---DESCRIPTION---
Write a function that takes a string as a parameter and returns the index of the first occurrence of the letter 'a' (case-insensitive). If there is no 'a' in the string, return -1. You are not allowed to use any library functions.

### Examples
```
Input: "JavaScript"
Output: 1

Input: "Hello, World!"
Output: -1
```

---INITIALCODE---
function findFirstA(str) {
  // Your code here
}

---TESTCASES---
[
  { "func": "findFirstA('JavaScript')", "expected": 1, "type": "return" },
  { "func": "findFirstA('Hello, World!')", "expected": -1, "type": "return" },
  { "func": "findFirstA('UPPERCASE')", "expected": 5, "type": "return" },
  { "func": "findFirstA('aAaA')", "expected": 0, "type": "return" },
  { "func": "findFirstA('')", "expected": -1, "type": "return" }
]

---WALKTHROUGH---
To solve this problem without using any library functions, consider:

1. How can you iterate through each character in the string?
2. How can you compare characters in a case-insensitive manner?
3. How can you keep track of the current index while iterating?
4. What should you return if you reach the end of the string without finding 'a'?

Remember that you'll need to handle both uppercase and lowercase 'a' in your comparisons.

---HINTS---
- You can use a for loop to iterate through the string's characters.
- To compare characters case-insensitively, you could convert them to the same case before comparison.
- You can use the loop variable as your index tracker.
- Remember to return -1 if you don't find 'a' in the entire string.

---BLACKLIST---
["indexOf", "toLowerCase", "toUpperCase", "search", "match", "includes"]

---SOLUTION---
function findFirstA(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      return i;
    }
  }
  return -1;
}

---EXPLANATION---
This solution works as follows:
1. It uses a for loop to iterate through each character in the string.
2. For each character, it checks if it's either 'a' or 'A'.
3. If it finds a match, it immediately returns the current index.
4. If it completes the loop without finding 'a' or 'A', it returns -1.

This approach correctly handles all cases:
- It's case-insensitive, finding both lowercase and uppercase 'A'.
- It returns the index of the first occurrence of 'a' or 'A'.
- It returns -1 if no 'a' or 'A' is found in the string.
- It works correctly with empty strings, returning -1.

By avoiding library functions, this solution demonstrates a fundamental approach to string searching in programming.
