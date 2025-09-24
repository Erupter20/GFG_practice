// Print a pyramid pattern of * of height n using nested loops.

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
