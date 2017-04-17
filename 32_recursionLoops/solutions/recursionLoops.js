/*
  Fizz Buzz Challenge
  - Funtion takes an integer, then prints the numbers from 1 to integer, but...
    - If number is divisible by 3, print Fizz
    - If number is divisible by 5, print Buzz
    - If number is divisible by both 3 & 5, print FizzBuzz
 */

// Non recursive solution
const fizzBuzz = (int) => {
  let numArray = Array.from(new Array(int), (v, i) => i + 1);
  let result = [];

  numArray.forEach(num => {

    if (num % 15 === 0) result.push(`FizzBuzz`);
    else
    if (num % 3 === 0) result.push(`Fizz`);
    else
    if (num % 5 === 0) result.push(`Buzz`);
    else result.push(num);

  });

  return result;

};

// Recursive solution
const fizzBuzzRec = (int) => {
  let result = [];

  if (int % 15 === 0) result.push('FizzBuzz');
  else
  if (int % 5 === 0) result.push('Buzz');
  else
  if (int % 3 === 0) result.push('Fizz');
  else result.push(int);

  return fizzBuzz(int - 1).concat(result);

};

console.log(fizzBuzz(15));
console.log(fizzBuzzRec(50));
