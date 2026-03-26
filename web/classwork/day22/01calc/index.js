function sayHi(name) {
  return `Hi, ${name}`;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// module.exports = { sayHi, add, subtract, multiply, divide };
// named export
export { sayHi, add, subtract, multiply, divide };
//default export
export default { sayHi, add, subtract, multiply, divide };
