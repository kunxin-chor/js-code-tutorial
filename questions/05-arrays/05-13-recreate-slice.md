---TITLE---
Recreate the Slice Function

---DESCRIPTION---
Write a function called `customSlice` that mimics the behavior of the built-in `slice` method for arrays. Your function should take three parameters:
1. The array to slice
2. The starting index (inclusive)
3. The ending index (exclusive)

Your function should return a new array containing the extracted elements.

Example:
Input: customSlice([1, 2, 3, 4, 5], 1, 4)
Output: [2, 3, 4]

Remember:
- If the end index is omitted, slice extracts through the end of the array.
- You cannot use the built-in slice method.
- You should return a new array, not modify the original.

---INITIALCODE---
function customSlice(arr, start, end) {
  // Your code here
}

---TESTCASES---
[
  { "func": "customSlice([1, 2, 3, 4, 5], 1, 4)", "expected": [2, 3, 4], "type": "return" },
  { "func": "customSlice(['a', 'b', 'c', 'd', 'e'], 2)", "expected": ["c", "d", "e"], "type": "return" },
  { "func": "customSlice([1, 2, 3], 0, 3)", "expected": [1, 2, 3], "type": "return" },
  { "func": "customSlice([1, 2, 3], 1)", "expected": [2, 3], "type": "return" }
]

---BLACKLIST---
[slice]

---HINTS---
- Use a for loop to iterate through the array from the start index to the end index.
- Create a new array to store the sliced elements.
- If the end parameter is not provided, use the array's length as the end index.
- Remember to handle cases where start or end might be negative.

---EXPLANATION---
The `slice` method in JavaScript creates a new array containing a portion of the array it's called on, without modifying the original array. It takes two optional parameters: the start index (inclusive) and the end index (exclusive).

Key points about `slice`:
1. If start is undefined, it starts from the beginning of the array.
2. If end is undefined, it goes to the end of the array.
3. If start or end is negative, it counts from the end of the array.
4. It returns a new array with the extracted elements.

---WALKTHROUGH---
To recreate the `slice` function, consider these steps:

1. How do you handle the case where the end index is not provided?
2. How can you create a new array to store the sliced elements?
3. How do you iterate through the correct portion of the input array?
4. How do you add elements to your new array?
5. How do you handle negative start or end indices?

Think about each of these points as you write your function. Remember, the goal is to return a new array containing the specified slice of the input array, mimicking the behavior of the built-in `slice` method.

---SOLUTION---
function customSlice(arr, start, end) {
  let result = [];
  if (start < 0) start = Math.max(arr.length + start, 0);
  if (end === undefined) end = arr.length;
  if (end < 0) end = Math.max(arr.length + end, 0);
  
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  
  return result;
}
