const array1 = ['cat', 'dog', 'fish', 'zebra'];
const array2 = ['lion', 'aardvark', 'gorilla'];

function combineAndSort(arr1, arr2) {
  let newArr = [];

  // Loop through each array and push into new array
  arr1.forEach(word => newArr.push(word));
  arr2.forEach(word => newArr.push(word));

  // Sort array in alphabetical oder
  let result = newArr.sort();

  return result;

};

console.log(combineAndSort(array1, array2));