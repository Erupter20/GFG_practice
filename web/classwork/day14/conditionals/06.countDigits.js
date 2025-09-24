// Write a program to count the number of given digits in a loop

let num = 123457;
let numOfDigits = 0;

while (num != 0) {
  num = Math.floor((num /= 10));
  ++numOfDigits;
}

console.log(`Number of digits is ${numOfDigits}`);
