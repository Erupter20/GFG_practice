// OPERATORS IN JAVASCRIPT:
// Operators are symbols used to perform operations on variables and values
// Types of operators in js
// 1. Arithmetic Operators: Used for mathematical calculation
// + - * / %(Modulus/Remainder)
// 2. Assignment Operators: used to assign value
// = += -= *= /= %=
// +=
// num += 1 | num = num + 1 | sum -= num | sum = sum - num
// 3. Comparison Operators: used compare values
// > greater than < >=(greater than or equal) <= == === != !==
// = value will assign
// == value will compare
// === value & data types both will compare
// 4. Logical Operators: &&(AND) ||(OR) !(NOT): used for condition(multiple conditions in one line) - If-Else

// Write a JS code to print sum of two numbers.
// let num1 = 345;
// let num2 = 891;
// let addition = num1 + num2;
// let subtraction = num1 - num2;
// console.log(addition)
// console.log(subtraction)

// concatination: merge variable and string, +
// let userName = "John Smith";
// let position = "Software Developer";
// // My name is John Smith,And i am a software developer
// console.log("My name is " + userName + ",And i am a " + position)

// User Input: prompt()
// string to interger/float - parseInt() , parseFloat()
// let num1 = parseInt(prompt("Enter a number")); // 10.4
// let num2 = parseInt(prompt("Enter another number")); // 20
// // let res = num1 + num2;
// let rem = num1 % num2
// // console.log("The sum will be " + res)
// console.log(rem)


// let num1 = 20;
// let num2 = 20;
// console.log(num1 > num2); // f
// console.log(num1 >= num2); // f
// console.log(num1 < num2); // t
// console.log(num1 <= num2); // t
// console.log(num1 == num2); // f
// console.log(num1 === num2); // f

// console.log(5 == 5) // t
// console.log(5 == "5") // t
// console.log(5 == "4"); // f
// console.log(4 === 4); // t
// console.log(4 === "4"); // f


let age = 20;
console.log(age > 18 && age < 25); // true
console.log(age > 18 && age < 10); // f
console.log(age > 18 || age < 10); // true
console.log(!(age > 18)); // false
// 20 > 18


let marks = 85;
console.log(marks > 80 && marks <= 100)

// 1. Perform all arithmetic operations
// 2. compare two values using == and ===
// 3. create a condition using logical operator.
// 4. let a = 15, b = 10
// console.log(a > b)
// console.log(a == "15")
// console.log(a === "15")
// console.log(a > 10 && b < 5)


