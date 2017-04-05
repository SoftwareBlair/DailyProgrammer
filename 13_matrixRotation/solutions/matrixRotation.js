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

const matrixDimension = (arr) => `${arr.length} x ${arr[0].length}`;

const matrixRotate = (arr) => {
  let result = [];
  let i, j;

  for (i = 0; i < arr[0].length; i++) {
    let newArray = [];

    for (j = 0; j < arr.length; j++) {

      if (arr[j]) newArray.unshift(arr[j][i]);

    }

    result.push(newArray);

  }

  return result;

};

console.log(matrixDimension(matrix1));
console.log(matrixRotate(matrix1));

console.log(matrixDimension(matrix2));
console.log(matrixRotate(matrix2));
