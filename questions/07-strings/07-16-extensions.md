---QUESTION---
---TITLE---
Extensions

---DESCRIPTION---
Write a function that takes a filename as a parameter and returns "image" if the extension is .jpg, "document" if the extension is .doc, and "none" for any other extension or if there is no extension.

### Examples
```
Input: "image.jpg"
Output: "image"

Input: "document.doc"
Output: "document"
```

---INITIALCODE---
function getFileType(filename) {
  // Your code here
}

---TESTCASES---
[
  { "func": "getFileType('image.jpg')", "expected": "image", "type": "return" },
  { "func": "getFileType('document.doc')", "expected": "document", "type": "return" },
  { "func": "getFileType('script.js')", "expected": "none", "type": "return" },
  { "func": "getFileType('noextension')", "expected": "none", "type": "return" },
  { "func": "getFileType('.gitignore')", "expected": "none", "type": "return" }
]

---WALKTHROUGH---
To solve this problem, consider:

1. How can you extract the file extension from a filename?
2. How can you handle filenames without an extension?
3. How can you compare the extracted extension with the target extensions (.jpg and .doc)?
4. How should you handle filenames that start with a dot (like .gitignore)?

Remember that the last dot in the filename separates the extension, and extensions are typically case-insensitive.

---HINTS---
- The `lastIndexOf()` method can help you find the position of the last dot in the filename.
- You can use `slice()` to extract the extension once you've found the last dot.
- Consider converting the extension to lowercase before comparing to ensure case-insensitivity.
- Be careful with edge cases like filenames without extensions or hidden files.

For more information on the string methods used, see the following MDN documentation:
- String.prototype.lastIndexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
- String.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
- String.prototype.toLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

---BLACKLIST---
[]

---SOLUTION---
function getFileType(filename) {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex <= 0) return 'none';
  
  const extension = filename.slice(lastDotIndex + 1).toLowerCase();
  
  if (extension === 'jpg') return 'image';
  if (extension === 'doc') return 'document';
  return 'none';
}

---EXPLANATION---
This solution works as follows:
1. It finds the index of the last dot in the filename using `lastIndexOf()`.
2. If there's no dot or the dot is the first character (hidden file), it returns 'none'.
3. It extracts the extension using `slice()` and converts it to lowercase.
4. It compares the extension with 'jpg' and 'doc', returning the appropriate string.
5. If the extension doesn't match either, it returns 'none'.

This approach correctly handles all cases:
- It correctly identifies .jpg and .doc files.
- It returns 'none' for any other extension.
- It handles filenames without extensions.
- It correctly processes hidden files (starting with a dot).


