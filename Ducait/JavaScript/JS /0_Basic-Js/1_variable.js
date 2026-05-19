// VARIABLES IN JAVASCRIPT
// ----------------------- //

// A variable is a container used to store data that can be used later in the program. you can store one value in a single variable until or unless data will be array or object

// variable name must be meaningful, can not be starts with numeric character, can not allow special character, you can use $ _
// try to use camelCasing firstName , userName , emailId
// way to declare variable:
// var: global scope, can be redefined, function scope, value can be updated, Old way(before ES6 concept)
// var num = 10;
// var num = 30; // priority

// {
//     // block
//     var num = 20;
// }
// console.log(num);

// let: block scope, can not be reassignment, value can be update, After ES6(recommended,modern)
// let number = 20;
// let number = 30;
// console.log(number) // SyntaxError: Identifier 'number' has already been declared

// let number = 20;
// number = 50;
// console.log(number)

// const: constant, block scope, (for fixed values)
// const userName;
// const number = 20;
// number = 50;
// console.log(number); // TypeError: Assignment to constant variable.

// {
//     // block
//     let num = 20;

// }
// console.log(num); // ReferenceError: num is not defined

// {
//     let num = 30;
//     console.log(num)
// }
// {
//     let num = 70;
//     console.log(num)
// }

let num; // declaration
// num = 50; // assignment/expression
console.log(num) // undefined