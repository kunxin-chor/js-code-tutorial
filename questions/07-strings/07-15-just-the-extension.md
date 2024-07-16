---QUESTION---
---TITLE---
Just the Extension

---DESCRIPTION---
Write a function that takes a filename (e.g., "dog.jpg" or "report.pdf") as a parameter and returns the file extension (including the dot). If there is no extension, return an empty string.

For more information on the methods used, see the following MDN documentation:
- String.prototype.lastIndexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

### Examples
```
Input: "image.jpg"
Output: ".jpg"

Input: "document.pdf"
Output: ".pdf"
```

---INITIALCODE---
function getFileExtension(filename) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getFileExtension('image.jpg')", "expected": ".jpg", "type": "return" },
  { "func": "getFileExtension('document.pdf')", "expected": ".pdf", "type": "return" },
  { "func": "getFileExtension('noextension')", "expected": "", "type": "return" },
  { "func": "getFileExtension('multiple.dots.in.name.txt')", "expected": ".txt", "type": "return" },
  { "func": "getFileExtension('.gitignore')", "expected": "", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you find the last occurrence of a character (the dot) in a string?
2. Once you find the dot, how can you extract everything after it?
3. What should you return if there's no dot in the filename?
4. How should you handle filenames that start with a dot (like .gitignore)?

Remember that the extension includes the dot, so you need to include it in your return value if it exists.

---HINTS---
- The `lastIndexOf()` method can help you find the last occurrence of the dot.
- The `slice()` method can extract a portion of a string from a given index to the end.
- Be careful with filenames that don't have an extension or start with a dot.
- You might need to use conditional logic to handle different cases.

---SOLUTION---
function getFileExtension(filename) {
  const lastDotIndex = filename.lastIndexOf('.');
  return lastDotIndex > 0 ? filename.slice(lastDotIndex) : '';
}

---EXPLANATION---
This solution works as follows:

1. We use `lastIndexOf('.')` to find the index of the last dot in the filename.
2. If `lastDotIndex` is greater than 0 (meaning there's a dot, and it's not the first character), we use `slice()` to return everything from that index to the end of the string.
3. If `lastDotIndex` is 0 or -1, we return an empty string (handling cases where there's no extension or the filename starts with a dot).

This approach correctly handles all cases:
- It returns the extension (including the dot) for normal filenames with extensions.
- It returns an empty string for filenames without extensions.
- It correctly handles filenames with multiple dots, returning only the last extension.
- It returns an empty string for hidden files (like .gitignore) that start with a dot.


