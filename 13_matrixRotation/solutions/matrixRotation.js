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
  alterMatrix(arr);
  reverseMatrix(arr);
  return arr;
}

function reverseMatrix(arr) {
  for (i in arr) {
    arr[i] = arr[i].reverse();
  }
}

function alterMatrix(arr) {
  let arrLen = arr[0].length;
  let temp, i, j;

  for (i = 0, j = 0; i < arrLen; i++) {

    while (j < arrLen) {
      if (i !== j) {
        temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
      j++;
    }
  }
}

console.log(matrixDimension(matrix1));
console.log(matrixRotate(matrix1));

console.log(matrixDimension(matrix2));
console.log(matrixRotate(matrix2));
