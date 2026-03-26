//Calculate the factorial of a given number using a for loop.

let number = 5;
let result = 1;

for (let i = 1; i <= number; i++) {
  result = result * i;
}
console.log(`Factorial of ${number} is ${result}`);
