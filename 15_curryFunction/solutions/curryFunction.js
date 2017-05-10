// Requires a nested function to handle the second parameter inputed
const curryFunction = (x) => (y) => x + y;

console.log(curryFunction(1)(1)); // Returns 2
console.log(curryFunction(20)(20)); // Returns 40
console.log(curryFunction(100)(5)); // Returns 105
console.log(curryFunction(40)(2)); // Returns 42