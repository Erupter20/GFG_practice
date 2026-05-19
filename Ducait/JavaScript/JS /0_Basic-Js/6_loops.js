// LOOPS: Loops in JavaScript are used to execute a block of code repeatedly until a certain condition is met.

// print "Hello World" 10 times
// 10 - 100
// 1 - 100 -> sum of even numbers

// While Loop: A while loop is used to execute a block of code while a certain condition is true.
// initialization; // loop starts with
// while(condition){ // if true
// // block of code to be executed;
//    increment/decrement;
// }

// 1 - 10
// let num = 1;
// while (num <= 10) { // num < 11 // 11 <= 10
//     console.log(num); // 1 2 3 4 ... 9 10
//     num++; // num = num + 1 // 11
// }
// console.log("Loop End")

// let num = 0;
// while (num <= 9) {
//     console.log("Hello World.." + num);
//     num++;
// }

// 1 - 10 in reverse order
// let num = 10;
// while (num >= 1) {
//     console.log(num)
//     num--;
// }

// 10 20 30 40 .... 100
// let num = 10;
// while (num <= 100) {
//     console.log(num);
//     num += 10; // num = num + 10
// }

// 5 - 25 even numbers
// let num = 5;
// while (num <= 25) { // 5 - 25
//     if (num % 2 === 0) {
//         console.log("Even number is: " + num);
//     } else {
//         console.log("Odd number is: " + num)
//     }
//     num++;
// }

// Sum of even/odd numbers 1 - 10
// 2 4 6 8 10 ->
// let num = 1;
// let sum = 0;
// while (num <= 10) { // 1 - 10
//     if (num % 2 === 0) { // 2
//         sum = sum + num; // 0 + 2 , 2 + 4 , 6 + 6
//     }
//     num++;
// }
// console.log("Sum of even number is: " + sum)

// factorial of 5
// 5! -> 5 * 4 * 3 * 2 * 1
// let num = 5;
// let fact = 1;
// while (num >= 1) { // 5
//     fact *= num;
//     num--;
// }
// console.log(fact)

// take a secret number = 50
// ask user to guess secret number - prompt()
// when user guess correct secret number -> You guessed it Correct! -> loop end

// secret !== guess

// let secret = 50;
// let guess = parseInt(prompt("Guess a number!"))
// while (secret !== guess) { // 50 === 50
//     alert("Wrong Guess❌");
//     guess = parseInt(prompt("Try again!"))
// }
// alert("You guessed it correct ✔")

// ------------------------------------------------------------------------------------------- //

// 1. Print the series: 1,2,4,7,11
// hint: add increasing values: +1,+2,+3,+4
// let num = 1;
// let inc = 1;
// let count = 1;
// while (count <= 5) {
//     console.log(num); // 1 2 4
//     num += inc; // 2
//     inc++; // 2 3
//     count++; // 2 3
// }
// 2. Print the series: 1,4,9,16,25
// hint: square

// let i = 1;
// while (i <= 5) {
//     console.log(i * i)
//     i++;
// }

// 3. Print the series: 1,8,27,64
// hint: cube

// 4. Fibonacci series: Upto 10th term
// 0,1,1,2,3,5,8,13..

let term = 10;
let a = 0;
let b = 1;
console.log(a); // 0
console.log(b); // 1
for (let i = 3; i <= 10; i++) {
    let next = a + b; // 1
    console.log(next); // 0 1 1 2
    a = b;
    b = next;
}

// try this using while

// ---------------------------------------------------------------------------------------------- //

// FOR LOOP: Used when you know how many times to run the loop
// syntax:
// for(initialization; timeOfTimesToRun(i <= 10);increment/decrement){
// block of code to be executed}

// 1 - 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// console.log("Loop End")

// even numbers -> 1 - 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log("Even Number" + i)
//     } else {
//         console.log("Odd Number " + i)
//     }
// }

// multiplication of table 5
// 5 X 1= 5 ... 5 X 10 = 50

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num * i)
// }

// --------------------------------------------------------------------------------------------- //
// Break & Continue
// Both ae used inside loops to control execution
// break: stop the loop completely
// continue: skip the current iteration

// Break: Used to exit the loop immediately
// for (let i = 0; i <= 10; i++) {
//     if (i === 6) { // 6 === 6
//         break;
//     }
//     console.log(i) // 1 2 3 4 5
// }
// console.log("Loop End")

// Continue: when you want to skip unwanted value
// for (let i = 0; i <= 10; i++) {
//     if (i === 6 || i === 8) { // 6 === 6
//         continue;
//     }
//     console.log(i) // 1 2 3 4 5 7 9 10
// }
// console.log("Loop End")

// ----------------------------------------------------------------------------------------- //
// do-while loop: A do-while loop is similar to a while loop, except that it will always execute the block of code at least once, even if the condition is initially false.

// let i = 11;
// do {
//     console.log("The value of i is: " + i);
//     i++;
// } while (i < 11); // 11 < 11

// --------------------------------------------------------------------------------------------- //