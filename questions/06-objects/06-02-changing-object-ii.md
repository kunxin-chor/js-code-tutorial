---TITLE---
Changing Object II

---DESCRIPTION---
You are given an object containing country codes and names. Your task is to set the value of the "home" variable so that when used to access the object, it will return the value "Singapore".

---INITIALCODE---
function setHomeCountry() {
  let countries = {
    'MY': 'Malaysia',
    'NZ': 'New Zealand',
    'SG': 'Singapore',
    'TH': 'Thailand',
    'IN': 'India'
  };

  let home;

  // Your code here

  return countries[home];
}

---TESTCASES---
[
  {
    "func": "setHomeCountry()",
    "expected": "Singapore",
    "type": "return"
  }
]

---WALKTHROUGH---
To solve this problem, you need to understand how to access object properties using variables in JavaScript. Here are the key concepts to consider:

1. Object properties can be accessed using bracket notation with a variable.
2. The variable should contain the key (property name) you want to access.
3. You need to find the key in the object that corresponds to the value "Singapore".

Think about how you can use these concepts to set the "home" variable to the correct country code.

---HINTS---
- Look through the object to find the key that corresponds to "Singapore".
- Remember that when using a variable to access an object property, you don't need quotes inside the brackets.
- For more information on accessing object properties, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

---SOLUTION---
function setHomeCountry() {
  let countries = {
    'MY': 'Malaysia',
    'NZ': 'New Zealand',
    'SG': 'Singapore',
    'TH': 'Thailand',
    'IN': 'India'
  };

  let home = 'SG';

  return countries[home];
}

---EXPLANATION---
In this solution, we set the value of the "home" variable to 'SG', which is the key corresponding to "Singapore" in the countries object. When we use countries[home], it's equivalent to countries['SG'], which returns "Singapore". This demonstrates how to use a variable to access an object property.
