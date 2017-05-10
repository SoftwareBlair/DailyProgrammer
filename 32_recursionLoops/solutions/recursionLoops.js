/*
  Fizz Buzz Challenge
  - Funtion takes an integer, then prints the numbers from 1 to integer, but...
    - If number is divisible by 3, print Fizz
    - If number is divisible by 5, print Buzz
    - If number is divisible by both 3 & 5, print FizzBuzz
 */

// Non recursive solution
const fizzBuzz = (int) => {
  let numArray = Array.from(new Array(int), (v, i) => i + 1); // Create new array from inputed number
  let result = [];

  // Loop through each element of array
  numArray.forEach(num => {

    if (num % 15 === 0) result.push(`FizzBuzz`); // If number is divisible by 3 & 5
    else
    if (num % 3 === 0) result.push(`Fizz`); // If number is divisible by only 3
    else
    if (num % 5 === 0) result.push(`Buzz`); // // If number is divisible by only 5
    else result.push(num); // Push number if doesn't meet conditionals

  });

  return result;

};

// Recursive solution
const fizzBuzzRec = (int) => {
  let result = [];

  if (int % 15 === 0) result.push('FizzBuzz'); // // If number is divisible by 3 & 5
  else
  if (int % 3 === 0) result.push('Fizz'); // If number is divisible by only 3
  else
  if (int % 5 === 0) result.push('Buzz'); // If number is divisible by only 5
  else result.push(int); // Push number if it doesn't meet conditional

  // Call function again decreasing input by one and join with result
  return fizzBuzz(int - 1).concat(result);

};

console.log(fizzBuzz(15));
console.log(fizzBuzzRec(50));
