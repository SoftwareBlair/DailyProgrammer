const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findGreater(arg1, arg2) {
  let result = [];

  arg1.forEach(num => {
    if (num > arg2) result.push(num);
  });

  if (!result.length) result = 'No numbers are greater';

  return result;

}

console.log(findGreater(numArray, 3));
console.log(findGreater(numArray, 7));
console.log(findGreater(numArray, 12));