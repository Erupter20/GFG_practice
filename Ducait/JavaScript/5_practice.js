// // Practice.js
// // Conditional Statements:

// // Q1.
// // Take two numbers.
// // • If both are positive → print "Both numbers are positive"
// // • If both are negative → print "Both numbers are negative"
// // • Else → print "One positive and one negative"
// // let num1 = parseInt(prompt("Enter a number"));
// // let num2 = parseInt(prompt("Enter another number"));
// // if (num1 > 0 && num2 > 0) {
// //     console.log("Both numbers are positive")
// // }
// // else if (num1 < 0 && num2 < 0) {
// //     console.log("Both numbers are negative")
// // }
// // else {
// //     console.log("One positive and one negative")
// // }

// // Q3.
// // Take username and password.
// // • If username is "admin" AND password is "1234" → "Login Successful"
// // • If username is wrong → "Invalid username"
// // • If password is wrong → "Invalid password"
// // (Use string comparison + logical operators)
// // let username = "admin";
// // let password = 1234;
// // if (username === "admin" && password === "1234") { // 1234 === "1234" f
// //     console.log("Login successful")
// // }
// // else if (username !== "admin") {
// //     console.log("Invalid username")
// // } else {
// //     console.log("Invalid password")
// // }
// // Q4. Take a number.
// // • If number is even and greater than 50 → "Even and greater than 50"
// // • If number is even but ≤ 50 → "Even but small"
// // • If number is odd and greater than 50 → "Odd and greater than 50"
// // • Else → "Odd but small"
// // let num = 90;
// // if (num % 2 === 0 && num > 50) {
// //     console.log("Even and greater than 50")
// // }
// // else if (num % 2 === 0) {
// //     console.log("Even but small")
// // }
// // else if (num > 50) {
// //     console.log("Odd and greater than 50")
// // }
// // else {
// //     console.log("Odd but small")
// // }
// // Q5.
// // Take three numbers.
// // • If all are equal → "All numbers are equal"
// // • If any two are equal → "Two numbers are equal"
// // • Else → "All numbers are different"

// // let n1 = 10;
// // let n2 = 20;
// // let n3 = 30;
// // if (n1 === n2 && n2 === n3 && n1 === n3) {
// //     console.log("All numbers are equal")
// // } else if (n1 === n2 || n2 === n3 || n1 === n3) {
// //     console.log("Two numbers are equal")
// // }
// // else {
// //     console.log("All numbers are different")
// // }
// // Q6. Take marks.
// // • marks ≥ 90 → "Grade A+ : Excellent"
// // • marks ≥ 75 → "Grade A : Very Good"
// // • marks ≥ 60 → "Grade B : Good"
// // • marks ≥ 40 → "Grade C : Pass"
// // • Else → "Fail"

// // Q7. Take password.
// // • length < 6 → "Weak password"
// // • length ≥ 6 AND contains number → "Medium password"
// // • length ≥ 8 AND contains number AND special char → "Strong password"
// // (Use length and logical operators)
// // password.length === 6

// // --------------------------------------------------------------------------------------------------- //

// // Switch Statements: Switch statements is used to execute different block of code depending on different cases.

// // day 1 = "Monday", day 2 = "Tuesday",...day
// // let day = 5;
// // switch (day) {
// //     case 1:
// //         console.log("Monday")

// //         break;
// //     case 2:
// //         console.log("Tuesday")
// //         break;
// //     case 3:
// //         console.log("Wednesday")
// //         break;

// //     default:
// //         console.log("Invalid day")
// // }

// // let fruit = "mango";
// // switch (fruit) {
// //     case "apple":
// //         console.log("You like apples");
// //         break;
// //     case "banana":
// //         console.log("You like bananas");
// //         break;
// //     case "orange":
// //         console.log("You like oranges");
// //         break;
// //     default:
// //         console.log("You don't like any of the fruits");
// //         break;
// // }

// // Simple calculator
// // take two numbers and an operator(+,-,*,/)
// // perform calculation using switch

// // let num1 = 20;
// // let num2 = 8;
// // let op = "/"
// // switch (op) {
// //     case "+":
// //         console.log(num1 + num2)

// //         break;
// //     case "-":
// //         console.log(num1 - num2)
// //         break;
// //     case "*":
// //         console.log(num1 * num2)
// //         break
// //     case "/":
// //         console.log(num1 / num2)
// //         break
// //     default:
// //         console.log("Invalid operator")
// //         break;
// // }

// // Simple ATM Menu:
// // Options:
// // 1. Check balance
// // 2. Deposit
// // 3. Withdraw
// // 4. Exit
// // Use switch to handle user choice

// // let balance = 1000;
// // let amount = 500;
// // let choice = 3;
// // switch (choice) {
// //     case 1:
// //         console.log("Balance: " + balance)
// //         break;
// //     case 2:
// //         balance += amount; // b = b + a
// //         console.log("Updated balance : " + balance)
// //         break;
// //     case 3:
// //         balance -= amount; // b = b + a
// //         console.log("Updated balance : " + balance)
// //         break
// //     case 4:
// //         console.log("Exit")
// //         break;

// //     default:
// //         console.log("Invalid option")
// //         break;
// // }

// // user input
// //

// // let balance = 1000;
// // let choice = parseInt(prompt("ATM Menu:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nEnter your choice:"))
// // switch (choice) {
// //     case 1:
// //         alert("Your balance is: " + balance)

// //         break;
// //     case 2:
// //         let deposit = parseInt(prompt("Enter amount to deposit"))
// //         balance += deposit;
// //         alert("Deposited: " + deposit + " \nCurrent balance is: " + balance)
// //         break;
// //     case 3:
// //         let withdraw = parseInt(prompt("Enter amount to withdraw"))
// //         if (withdraw <= balance) {
// //             balance -= withdraw;
// //             alert("Withdraw: " + withdraw + " \nRemaining balance is: " + balance)
// //         } else {
// //             alert("Insufficient balance")
// //         }
// //         break;
// //     case 4:
// //         alert("Thankyou! visit again")
// //         break
// //     default:
// //         alert("Invalid choice")
// //         break;
// // }

// // ---------------------------------------------------------------------------------------------------- //

// // Ternary Operator: The ternary operator is a short from of if-else
// // ? - if
// // : - else
// // condition ? value_if_true  : value_if_false
// // Even or Odd

// // let num = -9;
// // let result = (num % 2 === 0) ? "Even Number" : "Odd number";
// // console.log(result)

// // let res = num > 0 ? "Positive" : "Negative";
// // console.log(res)

// // let a = 10, b = 20;
// // let max = (a > b) ? a : b

// // Nested ternary(multiple conditions)
// // let marks = 95;
// // let grade = (marks >= 90) ? "A+" :
// //     (marks >= 75) ? "A" :
// //         (marks >= 60) ? "B" :
// //             (marks >= 40) ? "C" : "Fail";
// // console.log(grade)
// // avoid:  too many conditions (code becomses messy)
// // if logic is complex -> use if-else instead

// // ----------------------------------------------------------------------------------------------- //

// // Q1. Print all elements
// // Q2. Sum of all array elements
// // Q3. Count even and odd
// // Q4. reverse array(without reverse())
// // let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i])
// // }

// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i]
// // }
// // console.log("Sum of arr is: " + sum)

// // let even = 0;
// // let odd = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 === 0) { // even number
// //         even++; //  4
// //     } else {
// //         odd++; // 4
// //     }
// // }
// // console.log("Even: " + even)
// // console.log("Odd: " + odd)

// // let reversed = []
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     reversed.push(arr[i])
// // }
// // console.log(reversed)

// // let arr1 = [10, 20, 30, 40, 50]
// // Q. find element is exist or not - 30
// // Q. find average of array elements
// // let target = 30;
// // let found = false; // flag

// // for (let i = 0; i < arr1.length; i++) {
// //     if (arr[i] === target) {
// //         found = true;
// //         break;
// //     }
// // }
// // console.log(found ? "Element Found" : "Element does not exist")

// // Q. Remove duplicate elements from an array
// // let nums = [1, 2, 2, 3, 4, 4, 5]
// // // output = [1,2,3,4,5]
// // let unique = []; // [1,2,3,4]
// // for (let i = 0; i < nums.length; i++) {
// //     let isDuplicate = false;
// //     for (let j = 0; j < unique.length; j++) {
// //         if (nums[i] === unique[j]) {
// //             isDuplicate = true;
// //             break;
// //         }
// //     }
// //     if (!isDuplicate) {
// //         unique.push(nums[i])
// //     }
// // }
// // console.log(unique)

// // ---------------------------------------------------------------------------------------------------- //

// // 1. Default Parameter
// // function sum(a = 10, b = 20) {
// //     return a + b;
// // }
// // console.log(sum(10)); // 30
// // console.log(sum()); // 30
// // console.log(sum(30, 20)); // 50

// // Create a function to find square of a number.
// // Create a function to count vowel in a string. "JavaScript" .toLowerCase()
// // function countVowels(str) {
// //     let count = 0;
// //     str = str.toLowerCase();
// //     for (let i = 0; i < str.length; i++) {
// //         if (
// //             str[i] === "a" ||
// //             str[i] === "e" ||
// //             str[i] === "i" ||
// //             str[i] === "o" ||
// //             str[i] === "u"
// //         ) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }
// // console.log(countVowels("JavaScript"))
// // console.log(countVowels("ABcDEfgHIjk"))
// // Create a function to check whether a string is palindrom or not.
// // madam -> madam , pop -> pop

// // function isPalindrome(str) {
// //     let reversed = str.split("").reverse().join("");

// //     if (str === reversed) {
// //         return "Palindrome"
// //     } else {
// //         return "Not Palindrome"
// //     }
// // }

// // ------------------------------------ //

// // function isPalindrome(str) {
// //     let reversed = "";
// //     for (let i = str.length - 1; i >= 0; i--) {
// //         reversed += str[i]
// //     }
// //     if (str === reversed) {
// //         return "Palindrome"
// //     }
// //     else {
// //         return "Not Palindrome"
// //     }
// // }
// // ------------------------------------ //
// // function isPalindrome(str) {
// //     let reversed = "";
// //     for (let i = str.length - 1; i >= 0; i--) { // moves from last character to first
// //         for (let j = i; i === i; j--) { // runs one time for every iteration
// //             reversed += str[j]; // add character in reverse order
// //         }
// //     }
// //     if (str === reversed) {
// //         return "Palindrome"
// //     }
// //     else {
// //         return "Not Palindrome"
// //     }
// // }

// // Q1. Create a function using callback function
// // requirements:
// // add,subtract,multiply,divide

// function add(a, b) {
//     return a + b
// }
// function multiply(a, b) {
//     return a * b
// }
// function subtract(a, b) {
//     return a - b
// }
// function divide(a, b) {
//     return a / b
// }
// function calculator(a, b, operation) {
//     return operation(a, b)
// }
// console.log(calculator(10, 5, add))
// console.log(calculator(10, 5, subtract))
// console.log(calculator(10, 5, multiply))
// console.log(calculator(10, 5, divide))

// --------------------------------------------- //

// Object Practice:
// 1.Create an object person with:
// name
// age
// a function greet() that prints:
// when you call greet it should return
// hello my name is

// let user = {
//     name : "Alex",
//     age : 22
// }

// function greet(name) {
//     console.log("hello, " + name)
// }

// 2.Create an object calculator with functions:
//   add (a,b)
//   subtract (a,b)
//   multiply (a,b)

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
// };

// console.log(calculator.multiply(5, 4));

// 3. Write an object bankAccount:
// balance - 2000
// deposit(amount) - deposited amount, Updated balance
// withdraw(amount) - withdraw amount, Remaining balance - 3000

// let bankAccount = {
//     balance : 1000,
//     deposit(amount) {
//         this.balance += amount;
//         console.log("Deposited amount: " + amount)
//         console.log("Updated balance: " + this.balance)
//     },

//     withdraw(amount) {
//         if (amount >= this.balance) {
//             this.balance -= amount;
//             console.log("Withdrawal amount: " + amount)
//             console.log("Remaining Balance: " + this.balance)
//         }
//         else {
//             console.log("Insufficient balance")
//         }
//     }
// }

// 4. Create an object counter:
// value = 0
// increment()
// decrement()
// reset()

// const counter {
//     value : 0,
//     increment() {this.value++;},
//     decrement() {this.value--;},
//     reset() {this.value == 0;}
// };

// 5. Create an object shopping cart
// properties: totalItems
// Methods: addItem(), removeItem(), resetCart()

// const shoppingCart {
//      totalItems = 0,

//      addItem() {
//         this.totalItems ++;
//         console.log("Items " + this.totalItems)
//      },
//      removeItem(){
//         if (this.totalItems > 0){
//         this.totalItems --;
//         }
//         console.log ("Items: " +this.totalItems)
//      },
//      resetCart() {
//         this.totalItems == 0;
//         console.log ("Cart reset: " +this.totalItems)
//     }
// };

// Create an object "employee"
// properties: name, salary
// methods: increseSalary(amount), decreaseSalary(amount)

// let employee = {
//   name: "Alex",
//   age: 22,
// };

// Task:
// Task Manager
// Create an object taskManager
// properties : task = []
// Methods:
// addTask(task) - push()
// completeTask(task) - loop
// removeTask(task)
// showTask()

// addTask(task){
//     this.task.push{
//         name: task,
//         completed: true/false
//     }
// }

// taskManager.addTask("")

// var task = [];
// const taskManager = {
//   tasks: [],
//   addTask(task) {
//     this.tasks.push({
//       name: task,
//       completed: false,
//     });
//     console.log(task + " task added");
//   },
//   completeTask(task) {
//     for (let i = 0; i < this.tasks.length; i++) {
//       if (this.tasks[i].name === task) {
//         this.tasks[i].completed = true;
//         console.log(task + "completed");
//       }
//     }
//   },
//   showTasks(task) {
//     console.log(task);
//   },
//   removeTask(task) {
//     for (let i = 0; i < this.tasks.length; i++) {
//       if (this.tasks[i].name === task) {
//         this.tasks[i].splice(i, 1);
//         console.log(task + "removed");
//         break;
//       }
//     }
//   },
//   showTasks(task) {
//     console.log(this.tasks);
//   },
// };

// taskManager.addTask("JS");
// taskManager.addTask("OOPS");
// taskManager.completeTask("JS");
// taskManager.showTasks();


// TODO : Create an employee array
// Tasks:
// Increase salary by 10% - print updated salary
// Find employee with highest salary
// Remove employee by ID

// const employees = [
//   {id:1, name: "Alex", salary : 50000}
//   {id:2, name: "Alex", salary : 70000}
//   {id:3, name: "Alex", salary : 60000}
// ]



// Employee array
const employees = [
  { id: 1, name: "Alex", salary: 50000 },
  { id: 2, name: "John", salary: 70000 },
  { id: 3, name: "Sam", salary: 60000 }
];

// 1. Increase salary by 10% and print updated salaries
const updatedEmployees = employees.map(employee => ({
  ...employee,
  salary: employee.salary * 1.10
}));

console.log("Updated salaries:");
updatedEmployees.forEach(emp => {
  console.log(`${emp.name}: ${emp.salary}`);
});


// 2. Find employee with highest salary
const highestSalaryEmployee = employees.reduce(
  (highest, current) =>
    current.salary > highest.salary ? current : highest
);

console.log("Highest salary employee:");
console.log(highestSalaryEmployee);


// 3. Remove employee by ID
const removeId = 2;

const filteredEmployees = employees.filter(
  employee => employee.id !== removeId
);

console.log("After removing employee:");
console.log(filteredEmployees);
