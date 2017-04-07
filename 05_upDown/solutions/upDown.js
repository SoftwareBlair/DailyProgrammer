// Returns ['down', 'up', 'down', 'down', 'up', 'even', 'up']
const arrOne = [6, 3, 5, 4, 3, 4, 4, 5];
// Returns ['down', 'even', 'down', 'down', 'up', 'down', 'even']
const arrTwo = [5, 4, 4, 2, 1, 6, 3, 3];

function upDown(arr) {
  result = [];

  // Loop through array to grab individual numbers
  for (var i = 0; i < arr.length; i++) {
    // If same as previous, push 'even' into result
    if (arr[i] === arr[i + 1]) result.push('even');
    // If higher than previous, push 'up' into result
    if (arr[i] < arr[i + 1]) result.push('up');
    // If lower than previous, push 'down' into result
    if (arr[i] > arr[i + 1]) result.push('down');

  };

  return result;

};

console.log(upDown(arrOne));
console.log(upDown(arrTwo));