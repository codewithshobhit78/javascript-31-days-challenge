# Day 01 – Variables & Data Types

## 📘 Topics Learned
- What are variables in JavaScript  
- `var`, `let`, `const` → difference and usage  
- Primitive Data Types:  
  - String  
  - Number  
  - Boolean  
  - Null  
  - Undefined  
  - Symbol  
  - BigInt  

## 📝 Notes
- Variables are containers for storing data values.  
- `let` and `const` are block scoped (introduced in ES6).  
- `var` is function scoped (avoid using in modern JS).  
- JavaScript is dynamically typed → type is decided at runtime.  

## 💻 Practice Code
```js
// Using let
let name = "Shobhit";
let age = 24;
let isDeveloper = true;

// Using const
const pi = 3.14159;

// Using var (not recommended)
var city = "Delhi";

// Checking data types
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isDeveloper); // boolean
console.log(typeof pi);          // number
console.log(typeof city);        // string
