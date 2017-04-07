const matrix1 = [
  [44, 23],
  [21, 10],
  [19, 28],
  [85, 16],
  [33, 18]
];

const matrix2 = [
  [29, 62, 18],
  [12, 60, 31],
  [99, 79, 12]
];

// Print out total length and the length of sub arrays to get the N x N dimensions
const matrixDimension = (arr) => `${arr.length} x ${arr[0].length}`;

const matrixRotate = (arr) => {
  let result = [];
  let i, j;

  // Loop the first sub array
  for (i = 0; i < arr[0].length; i++) {
    let newArray = [];

    // Then loop through parent array
    for (j = 0; j < arr.length; j++) {

      // Put first number of each array into new array
      if (arr[j]) newArray.unshift(arr[j][i]);

    };

    // Add new array to result
    result.push(newArray);

  };

  return result;

};

console.log(matrixDimension(matrix1));
console.log(matrixRotate(matrix1));

console.log(matrixDimension(matrix2));
console.log(matrixRotate(matrix2));
