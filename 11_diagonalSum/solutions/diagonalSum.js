// Returns 4
const square4 = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]

// Returns 5
const square5 = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1]
]

// Returns 19
const square19 = [
  [2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]
]

function diagonalSum(arr) {
  let temp = arr;
  let tempLen = temp.length;
  let i = 0;
  let result = 0;

  while (tempLen) {
    result += temp[0][i];
    tempLen--;
    i++;
    temp.shift();
  }

  return result;
}

console.log(diagonalSum(square4));
console.log(diagonalSum(square5));
console.log(diagonalSum(square19));