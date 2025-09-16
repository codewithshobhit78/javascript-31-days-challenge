# Day 03 – Functions in JavaScript

## 📘 Topics Covered
- Function basics  
- Function declaration vs expression  
- Arrow functions (ES6)  
- Default parameters  
- Function returning function  

## 📝 Key Notes
- **Function** ek reusable block of code hota hai jo ek kaam perform karta hai.  
- **Declaration:** `function name() { }`  
- **Expression:** `const fn = function() { }`  
- **Arrow function:** `const fn = () => { }` (short aur modern syntax)  
- **Default parameters:** Agar koi argument pass nahi kiya gaya to ek default value use hoti hai.  
- Function bhi ek value hai → isko return bhi kar sakte hain (Higher Order Functions).  

## 💻 Example Code
```js
function greet(name = "Guest") {
    return `Welcome, ${name}! 🚀`;
}

console.log(greet());          // "Welcome, Guest! 🚀"
console.log(greet("Shobhit")); // "Welcome, Shobhit! 🚀"
