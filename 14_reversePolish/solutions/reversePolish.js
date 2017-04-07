const revPolOne = '5 1 2 + 4 x + 3 -'; // Returns 14
const revPolTwo = '1 2 + 4 5 6 8 * - + +'; // Returns -36

const reversePolish = (str) => {
  // Split string on spaces to create array
  let newArr = str.split(' ');
  let result = [];

  // Loop through each element of array
  newArr.forEach(elm => {

    // If an element is a number, push it into result
    if (!isNaN(elm)) result.push(parseInt(elm));
    else {

      let num2 = result.pop();  // Remove last element of result array
      let num1 = result.pop();  // Remove next to last element of result array

      // If element equals an operator, do the math ossociated to that operator
      if (elm === '*' || elm === 'x') result.push(num1 * num2);
      else
      if (elm === '/') result.push(num1 / num2);
      else
      if (elm === '+') result.push(num1 + num2);
      else
      if (elm === '-') result.push(num1 - num2);

    };

  });

  // Remove final number from array
  result = result.pop();

  return result;
};

console.log(reversePolish(revPolOne));
console.log(reversePolish(revPolTwo));