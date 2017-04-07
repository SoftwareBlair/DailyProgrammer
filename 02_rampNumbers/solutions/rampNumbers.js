const trueInput = 1234;
const falseInput = 1032;

function rampNumbers(int) {
  // Create array with each number from integer
  let numArr = int.toString().split('');

  // Loop through length of array of numbers
  for (let i = 0; i < numArr.length; i++) {
    // If current number in array is larger than the next then return false.
    if (numArr[i] > numArr[i + 1]) return false;
  }

  return true;

};

console.log(rampNumbers(trueInput));
console.log(rampNumbers(falseInput));