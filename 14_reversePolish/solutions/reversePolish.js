const revPolOne = '5 1 2 + 4 x + 3 -'; // Returns 14
const revPolTwo = '1 2 + 4 5 6 8 * - + +'; // Returns -36

const reversePolish = (str) => {
  let newArr = str.split(' ');
  let result = [];

  newArr.forEach(elm => {

    if (!isNaN(elm)) result.push(parseInt(elm));
    else {

      let num2 = result.pop();
      let num1 = result.pop();

      if (elm === '*' || elm === 'x') result.push(num1 * num2);
      else
      if (elm === '/') result.push(num1 / num2);
      else
      if (elm === '+') result.push(num1 + num2);
      else
      if (elm === '-') result.push(num1 - num2);

    };

  });

  result = result.pop();

  return result;
};

console.log(reversePolish(revPolOne));
console.log(reversePolish(revPolTwo));