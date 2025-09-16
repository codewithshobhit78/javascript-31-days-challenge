// Day 03 - Functions

// 1. Normal function
function sayHello(name) {
    return `Hello, ${name}! 👋`;
}
console.log(sayHello("Shobhit"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 10));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 6));

// 4. Default Parameters
function greet(name = "Guest") {
    return `Welcome, ${name}! 🚀`;
}
console.log(greet());
console.log(greet("Shobhit"));

// 5. Function returning function
function outer() {
    return function inner() {
        return "Inner function called ✅";
    };
}
const innerFunc = outer();
console.log(innerFunc());
