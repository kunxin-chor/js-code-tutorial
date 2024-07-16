---TITLE---
Changing Object

---DESCRIPTION---
You are given an object that contains three properties and values. Your task is to change the value of property '3' so that it is 'eight one two three' instead.

---INITIALCODE---
function changeObject() {
  let d = {
     1:'one sunset',
     2:'taxi',
     3:'change'
  };

  // Your code here

  return d['3'];
}

---TESTCASES---
[
  {
    "func": "changeObject()",
    "expected": "eight one two three",
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to access and modify object properties in JavaScript. Here are the key concepts to consider:

1. Object properties can be accessed using dot notation or bracket notation.
2. To change the value of a property, you simply assign a new value to it.
3. When using bracket notation with numbers as property names, you need to use quotes.

Think about how you can use these concepts to change the value of property '3' in the object.

---HINTS---
- Remember that in JavaScript, when property names are numbers, you need to use bracket notation with quotes.
- The syntax for changing an object property is: objectName['propertyName'] = newValue;
- For more information on working with objects in JavaScript, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

---SOLUTION---
function changeObject() {
  let d = {
     1:'one sunset',
     2:'taxi',
     3:'change'
  };

  d['3'] = 'eight one two three';

  return d['3'];
}

---EXPLANATION---
In this solution, we use bracket notation to access the property '3' of the object d. We then assign the new value 'eight one two three' to this property. This changes the value of the property directly in the object. Finally, we return the new value of d['3'] to verify the change.
