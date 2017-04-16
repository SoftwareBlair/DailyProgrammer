const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*
  Fizz Buzz Challenge
  - Given an array of numbers
 */

// Non recursive solution
const fizzBuzz = (arr) => {

  arr.forEach(num => {

    if (num % 3 === 0 && num % 5 === 0) console.log(`${num}: FizzBuzz`);
    else
    if (num % 3 === 0) console.log(`${num}: Fizz`);
    else
    if (num % 5 === 0) console.log(`${num}: Buzz`);
    else {
      console.log(num);
    };

  });

  return `Input was : ${arr}`;

};

// Recursive solution
const fizzBuzzRec = (arr) => {};

console.log(fizzBuzz(numArray));
console.log(fizzBuzzRec(numArray));
