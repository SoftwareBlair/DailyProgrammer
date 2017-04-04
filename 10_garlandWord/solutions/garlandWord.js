const garland1 = 'programmer'; // Returns 0
const garland2 = 'ceramic'; // Returns 1
const garland3 = 'onion'; // Returns 2
const garland4 = 'alfalfa'; // Returns 4

function garlandWord(str) {
  // Set two variables from input to modify and compare
  let first = str.split('');
  let last = str.split('');
  let result = 0;

  // Helper function to modify local strings
  let shiftPop = () => {
    first.pop(); // Remove last element of array
    last.shift(); // Remove first element of array
    return first.length;
  }

  // While shiftPop function returns greater than zero
  while (shiftPop()) {

    // Compare each string, if they match then return the length
    if (first.join('') === last.join('')) return first.length;

  }

  // Returns 0 if a match is not found in while loop
  return result;
}

console.log(garlandWord(garland1));
console.log(garlandWord(garland2));
console.log(garlandWord(garland3));
console.log(garlandWord(garland4));