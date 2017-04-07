const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const zipArray = (arr1, arr2) => {
  let result = [];

  // While both inputs length is greather than zero
  while (arr1.length && arr2.length) {
    // Remove fist element of first input, push to result
    result.push(arr1.shift());
    // Remove first element of second input, push to result
    result.push(arr2.shift());
  };

  return result;

};

console.log(zipArray(array1, array2));