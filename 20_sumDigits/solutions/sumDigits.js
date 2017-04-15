const digit1 = 12;  // Returns 3
const digit2 = 12345;  // Returns 6
const digit3 = 667;  // Returns 1

const sumDigits = (int) => {
  let numArr = int.toString().split('');
      result = 0;

  numArr.forEach(val => result += parseInt(val));

  return (numArr.length > 1) ? sumDigits(result) : parseInt(numArr);

};

console.log(sumDigits(digit1));
console.log(sumDigits(digit2));
console.log(sumDigits(digit3));