const digit1 = 12;  // Returns 3
const digit2 = 12345;  // Returns 6
const digit3 = 667;  // Returns 1

const sumDigits = (int) => {
  let numArr = int.toString().split(''); // Split input into an array of numbers
      result = 0; // Set initial result to zero
  
  // For each element in array, add to current value of result
  numArr.forEach(val => result += parseInt(val));

  // If the length is greater than one digit, run function again, else return single number
  return (numArr.length > 1) ? sumDigits(result) : parseInt(numArr);

};

console.log(sumDigits(digit1));
console.log(sumDigits(digit2));
console.log(sumDigits(digit3));