// Returns ['down', 'up', 'down', 'down', 'up', 'even', 'up']
let arrOne = [6, 3, 5, 4, 3, 4, 4, 5];
// Returns ['down', 'even', 'down', 'down', 'up', 'down', 'even']
let arrTwo = [5, 4, 4, 2, 1, 6, 3, 3];

function upDown(arr) {
  result = [];

  // Loop through array to grab individual numbers
  // Compare current number to previous number
  // If higher than previous, push 'up' into result
  // If lower than previous, push 'down' into result
  // If same as previous, push 'even' into result

  return result;

}

console.log(upDown(arrOne));
console.log(upDown(arrTwo));