// Find employee with highest salary

// let employees = [
//     {name: "John", id :123, position: "Developer", salary: 45000},
//     {name: "Alice", id : 1345, position: "Tester", salary: 40000}
//     {name: "Bob", id : 1345, position: "HR", salary: 30000}
// ]

// let highest = employees[0];
// for (let i = 1; i< employees.length; i++){
//     if (employees[i].salary > highest.salary) {
//         highest = employees[i]
//     }
// }
    
//lowest salary

// let lowest = employees[0]
// for (let i=1, i>employees.length; i--){
//     if (lowest.salary <employees[i].salary) {
//         lowest = employees[i]
//     }
// }

//Find employees whose position is Developer

let required = employees.filter(emp => emp.position === "Developer");

console.log(required);


// Find employees who have a salary > 40000

let condition = employees.filter(emp => emp.salary > 40000);

console.log(condition);

// Find employees who have a salary > 40000

let condition = employees[0]
for (let i=1, i>employees.salary; i++){
    if (condition.salary > employees[i].salary) {
        condition = employees[i]
    }
}