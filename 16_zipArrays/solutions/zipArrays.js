const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const zipArray = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    result.push(arr1.shift());
    result.push(arr2.shift());
  }

  return result;

}

console.log(zipArray(array1, array2));