// Function in JavaScript: A function is block of reusable code used to perform a specific task.
// Instead of writing same code again and again, we create a function and call it whenever needed.
// built-in function/predefined function, user define function
// ()
// how to define function:
// 1. function declaration: function functionName(parameter){...block of code to perform specific task/set of a task}
// 2. anonymous function(function without name)/function expression(assign that function in a variable):
// 3. Immediately invoked function: one-time execution
// 4. Callback function:
// 5. Closure:
// 6. Arrow function: ES6

// syntax of a function:

// function greet() {
//     console.log("Hello there...")
// }
// greet();
// greet();

// function greet(name) {
//     console.log("Hello " + name)
// }
// greet("Alice.")

// sum of two numbers:
// function sum(num1, num2) { // parameters
//     console.log(num1 + num2)
// }
// sum(20, 30); // arguments
// sum(1234, 4569)
// sum(10, 15, 20); // 25
// sum(20); // NaN(Not a Number)

// parameter: variable in function defination/declaration
// argument: actual value passed

// Function with return: return send value back

// function add(a, b) {
//     return a + b;
//     // return 0;
// }
// console.log(add(10, 20))


// var sayHi = function () {
//     console.log("Hellooo....")
// }
// // this variable nehave like a function
// sayHi()
// sayHi()

// var add = function (a, b) {
//     return a + b;
// }
// console.log(add(10, 20))

// **** Hoisting in JavaScript: Hoisting in javascript is moving variable/function declaration to the top of their scope before execution. Before ES6 concept. so works with only var not let and const

// sayHi();

// function sayHi() {
//     console.log("Hellooo...")
// }

// sayHi(); // TypeError sayHi is not a function
// var sayHi = function () {
//     console.log("Hellooo")
// }


// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
// let sayHi = function () {
//     console.log("Hellooo")
// }


// console.log(num); // undefined
// var num; // declaration
// num = 10; // expression/assignment


// var number;
// console.log(number); // undefined

// console.log(num); // undefined
// var num = 20;

// (function () {
//     console.log("I will exetuce one time")
// })()

// Default parameter
// function greet(name = "User") {
//     console.log("Hello " + name)
// }
// greet("Alice"); // when you pass argument, then it'll take argument's value
// greet(); // but if you are not paasing any argument, then it'll take default parameter's value


// function add(a = 10, b = 0) {
//     return a + b;
// }
// console.log(add(20, 40)); // 60
// console.log(add()) // 10
// console.log(add(50)) // 50

// // 1. reverse a string using function.
// // hello -> olleh
// function reverseStr(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverseStr("hello"))
// 2. Write a function to check whether a number is even or odd.

// function checkNumber(num) {
//     if (num % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(checkNumber(10))
// console.log(checkNumber(11))

// 3. Create a function to calculate total marks from an array
// marks = [70,90,80,85]

// --------------------------------------------------------------------------------------------------- //

// Callback Function: Callback function is a function that is passed as an argument to another functions and is executed later
// a function inside another function's argument

// callback function
// function greet(name) {
//     console.log("Hello " + name)
// }
// // main function
// function processUser(callback) {
//     let name = "Alice";
//     callback(name)
// }
// processUser(greet)

// greet function created
// processUser receive another function as parameter
// callback(name) calls greet(name)
// output printed

// function sayHi() {
//     console.log("Hello...")
// }

// function execute(callback) {
//     callback()
// }
// execute(sayHi)

// real-life example
// ordering food:
// restuarent prepare it
// when ready -> then call you
// that calling later behaviour is like callback

// function calculate(a, b, callback) {
//     callback(a, b)

// }
// function add(x, y) {
//     console.log(x + y)
// }
// calculate(10, 20, add)

// ---------------------------------------------------------------------------------------------- //

// Closure in JavaScript: A closure is created when an inner function remembers and accessed variables from its outer function even after the outer function has finished execution
// when you want to access outer function's variable, you have to create inner function
// use for private variable when you have sensitive information or data(backend)

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count) // 1
//     }
//     return inner;
// }
// let counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count) // 1
//     }
//     return inner()
// }
// outer(); // 1
// outer(); // 1

// function parent() {
//     let message = "Helloo";

//     function child() {
//         console.log(message)
//     }
//     return child;
// }
// let sayHi = parent();
// sayHi();

// function multiply(x) {
//     return function (y) {
//         return x * y
//     }
// }
// let double = multiply(2);
// console.log(double(5))


// Create nested closure example with:
// outer
// middle
// inner
// access all parent variables

// function outer() {
//     let outerVar = "I am outer variable";

//     function middle() {
//         let middleVar = "I am middle variable";

//         function inner() {
//             let innerVar = "I am inner variable";

//             console.log(outerVar)
//             console.log(middleVar)
//             console.log(innerVar)
//         }
//         return inner;
//     }
//     return middle;
// }
// // outer() executes, now execution goes inside 
// // inside outer() variable created, middle function is created but not executed yet then entier middle function is returned and store inside - middleFunction. 
// const middleFunction = outer();
// const innerFunction = middleFunction();
// innerFunction();

// Q1. Create a function counter(type) using closure.
// inside the function create a variable. count = 0
// return another function
// if argument is:
// "inc" -> increase count
// "dec" -> decrease count
// Print updated count after every function call

function counter(type) {
    let count = 0;

    return function () {
        if (type === "inc") {
            count++; // 1
        } else if (type === "dec") {
            count--; // -1
        }
        console.log(count);
    }
}
// let increment = counter("inc")
// const decrement = counter("dec")

// increment(); // 1
// increment(); // 2
// increment(); // 3

// decrement(); // -1
// decrement(); // -2

// Q2. Create a function counter using closure.
// inside the function create a variable. count = 0
// return another function with parameter type
// if argument is:
// "inc" -> increase count
// "dec" -> decrease count
// Print updated count after every function call

function counter() {
    let count = 0;

    return function (type) {
        if (type === "inc") {
            count++;
        } else if (type === "dec") {
            count--;
        }
        console.log(count);
    }
}

const updateCounter = counter();
updateCounter("inc"); // 1
updateCounter("inc"); // 2
updateCounter("inc"); // 3

updateCounter("dec"); // 2
updateCounter("dec"); // 1
