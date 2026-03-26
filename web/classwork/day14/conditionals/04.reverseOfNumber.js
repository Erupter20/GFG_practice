// Write a program to reverse the digits of a number using a loop.

let originalNumber = 102;
let reversedNumber = 0;
console.log(`The original number is ${originalNumber}`);

while (originalNumber > 0) {
  let lastDigit = originalNumber % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  originalNumber = Math.floor(originalNumber / 10); //
}

console.log(`The reversed number is ${reversedNumber}`);
