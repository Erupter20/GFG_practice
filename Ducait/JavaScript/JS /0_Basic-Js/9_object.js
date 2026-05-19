// What is an Object in JavaScript?
// An object is a collection of data stored in key : value pairs.
// property : value,
// Student -> roll no,name,subject,marks
// instead of seprate variables:
// we use object
// we can create object using {key : value}

// suppose in java or python or other programming language, if you want to create object you have to create class first, then we create instance of class that is called object
// but in JavaScript we can create object directly using {} or new Object

// let employee = {
//     empId: 102,
//     name: "Alice",
//     "email id": "alice@email.com",
//     skills: ["JavaSCript", "React Js", "Node js"],
//     // nested object
//     address: {
//         city: "Noida",
//         country: "India",
//         pincode: 201301
//     }
// }
// console.log(employee)
// accessing object's property: dot notation(.) array/bracket notation([])
// console.log(employee.empId)
// console.log(employee["email id"])
// console.log(employee.address.country)
// adding new property
// employee.age = 28;
// console.log(employee.age)
// // updating property
// employee.name = "Alice Smith";
// console.log(employee.name)
// removing property
// delete employee.address.city;
// console.log(employee)

// Object with function (method)
// let student = {
//     name: "John Doe",
//     greet: function () { // before ES6
//         console.log("Hello Student...")
//     }
// }

// let student = {
//     name: "John Doe",
//     greet() { // ES6
//         console.log("Hello Student...")
//     }
// }
// student.greet()

// for...in loop
// let person = {
//     name: "Alice",
//     age: 24
// }
// for (let key in person) {
//     console.log(key, person[key])
// }
// console.log(person)

// this keyword:
// this refers to the object that calling the function. value of 'this' depeneds on how function is called
// let person = {
//     name: "Alice",
//     age: 24,
//     greet() {
//         console.log("Hello " + this.name + " I have a " + car.brand + " car")
//     }
// }
// let car = {
//     brand: "TATA"
// }
// person.greet(); // hello Alice, i have a TATA car

// let car = {
//     brand: "BMW",
//     show: function () {
//         console.log(this.brand)
//     }
// }
// car.show()

// new keyword
// let person = new Object(); // new create an empty object
// person.name = "John";
// person.age = 25
// console.log(person)

// Constructor Function: A constructor function is used to create multiple objects with same structure.
// employee details

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary
// }
// let emp1 = new Employee("John", 26, 450000)
// let emp2 = new Employee("Emily", 25, 400000)
// console.log(emp1, emp2)

// employees data store - array of object

let employees = [
    { name: "John", id: 123, position: "Developer", salary: 45000 },
    { name: "Alice", id: 1345, position: "Tester", salary: 60000 },
    { name: "Jack", id: 678, position: "HR", salary: 30000 },
    { name: "Bob", id: 653, position: "Developer", salary: 85000 },
]
// console.log(employees[0].name)
// console.log(employees[2].position)
// // print all names
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name)
// }
// Find employee with highest salary
// lowest salary
// Find employees whose position is "Developer"
// Find employees whose salary > 40000
let highest = employees[0];
for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
        highest = employees[i]
    }
}