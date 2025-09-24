// Find the sum of the digits of a number using a loop.

function sumOfDigits(n) {
  let sum = 0;
  while (n != 0) {
    last = n % 10;
    sum += last;

    n = Math.floor((n /= 10));
  }
  return sum;
}
let n = 12345;
console.log(sumOfDigits(n));
