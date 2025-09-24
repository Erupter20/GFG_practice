// Check if a given number is prime using a loop.

let num = 9;
let isPrime = true; // assume it's prime first

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // no need to check further
    }
  }
}

if (isPrime) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is not prime`);
}
