---TITLE---
Mini App: Shopping Cart Total

---DESCRIPTION---
You are building a small shopping cart helper. Each item in the cart is an object like:

```javascript
{ name: "Apple", price: 1.5, quantity: 3 }
```

Implement the following three functions:

1. **`itemSubtotal(item)`** — returns `price * quantity` for one item.
2. **`cartTotal(cart)`** — takes an array of items and returns the **subtotal** of the entire cart (sum of subtotals for every item).
3. **`finalTotal(cart, taxRate, discount)`** — returns the final amount the customer pays, calculated as:
   - Compute the cart subtotal.
   - Subtract `discount` (a flat dollar amount, e.g. `5` means $5 off). The discounted subtotal cannot go below 0.
   - Add tax: multiply by `(1 + taxRate)`. `taxRate` is a decimal (e.g. `0.07` for 7%).
   - Round the final value to **2 decimal places** and return it as a number.

This mini-app reviews **objects**, **arrays of objects**, **functions**, **arithmetic**, and **branching**.

---INITIALCODE---
function itemSubtotal(item) {
  // Your code here
}

function cartTotal(cart) {
  // Your code here
}

function finalTotal(cart, taxRate, discount) {
  // Your code here
}

---TESTCASES---
[
  { "func": "itemSubtotal({ name: 'Apple', price: 1.5, quantity: 3 })", "expected": 4.5, "type": "return" },
  { "func": "itemSubtotal({ name: 'Book', price: 12, quantity: 1 })", "expected": 12, "type": "return" },
  { "func": "cartTotal([{ name: 'A', price: 2, quantity: 3 }, { name: 'B', price: 5, quantity: 2 }])", "expected": 16, "type": "return" },
  { "func": "cartTotal([])", "expected": 0, "type": "return" },
  { "func": "finalTotal([{ name: 'A', price: 10, quantity: 2 }], 0.07, 0)", "expected": 21.4, "type": "return" },
  { "func": "finalTotal([{ name: 'A', price: 10, quantity: 2 }], 0.07, 5)", "expected": 16.05, "type": "return" },
  { "func": "finalTotal([{ name: 'A', price: 5, quantity: 1 }], 0.1, 100)", "expected": 0, "type": "return" }
]

---HINTS---
- Build each function on top of the previous one. `cartTotal` should call `itemSubtotal` inside its loop.
- For `finalTotal`, after subtracting the discount, use an `if` (or `Math.max`) to make sure the subtotal isn't negative.
- Round at the end with `Number(value.toFixed(2))` to return a clean number.

---EXPLANATION---
This problem is a classic "compose smaller pieces into a bigger feature." Each function does one job, and the next builds on it. The discount-floor protects against negative totals when discount exceeds the subtotal.

```javascript
function itemSubtotal(item) {
  return item.price * item.quantity;
}

function cartTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += itemSubtotal(cart[i]);
  }
  return total;
}

function finalTotal(cart, taxRate, discount) {
  let subtotal = cartTotal(cart) - discount;
  if (subtotal < 0) subtotal = 0;
  const withTax = subtotal * (1 + taxRate);
  return Number(withTax.toFixed(2));
}
```

---SOLUTION---
function itemSubtotal(item) {
  return item.price * item.quantity;
}

function cartTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += itemSubtotal(cart[i]);
  }
  return total;
}

function finalTotal(cart, taxRate, discount) {
  let subtotal = cartTotal(cart) - discount;
  if (subtotal < 0) subtotal = 0;
  const withTax = subtotal * (1 + taxRate);
  return Number(withTax.toFixed(2));
}
