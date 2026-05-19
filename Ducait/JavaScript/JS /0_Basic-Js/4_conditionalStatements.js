// Conditional Statements: Conditional statements in JavaScript are used to execute code based on certain conditions. There are two main types of conditional statements in JavaScript: if statements andswitch statements.

// syntax:
// if(condition){ // if true
//  block of code to be executed }
// else{ // remaining part
// remaining part to show }

// write a code to check whether a number is positive or negative?
// condition: 12 , -10
// let num = -14;
// if (num > 0) { // 14 > 0
//     console.log("number is positive")
// }
// else {
//     console.log("number is negative")
// }

// take two inputs and check which one is large number.
// let num1 = 10;
// let num2 = 10;
// if (num1 > num2) { // 60 > 60 // if false
//     console.log(num1 + " :num1 is large number ")
// }
// else if (num2 > num1) {
//     console.log(num2 + " :num2 is large number ")
// }
// else {
//     console.log("Both are equal")
// }

// write a code to check whether a number is even or odd.
// number % 2 === 0
// write a code to check whether a person is eligible for vote or not.
// person_age >= 18
// take three inputs and check which one is largest number.
// let num1 = 40;
// let num2 = 50;
// let num3 = 50;
// // num1 ->
// if (num1 > num2 && num1 > num3) { // 40 > 30 && 40 > 50(f)
//     console.log("num1 is largest")
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is largest")
// }
// else if (num3 > num1 && num3 > num2) {
//     console.log("num3 is largest")
// }
// else {
//     console.log("Invalid input")
// }
// smallest

// Write a code to print 'FIZZ' if a number is divisible by 5, print 'BUZZ' if a number is divisible by 3, print 'FIZZBUZZ' if number is divisible by both 5 & 3
// let num = 7;
// if (num % 5 === 0 && num % 3 === 0) {
//     console.log("FIZZBUZZ")
// }
// else if (num % 5 === 0) {
//     console.log("FIZZ")
// }
// else if (num % 3 === 0) {
//     console.log("BUZZ")
// }
// else {
//     console.log("Enter valid number")
// }

// Write a JavaScript conditional statement to find the sign of the product of three numbers.
// Sample numbers : 3, -7, 2
// Output : The sign is - 
let num1 = 3;
let num2 = -7;
let num3 = 2;
let product = num1 * num2 * num3;
if (product > 0) {
    console.log("The sign is +")
}
else {
    console.log("The sign is -")
}
