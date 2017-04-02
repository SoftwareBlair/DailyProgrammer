let testInput = 'Hello, World!'
let challengeInput = 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day!!!';

function countLetters(input) {
  let result = {};
      newString = flattenString(input);

  newString.forEach(increment => {
    // Check if result has letter as a key
    // If so, increment count : else set key and count to 1
    result.hasOwnProperty(increment) ? result[increment]++ : result[increment] = 1;
  });

  return result;

}

function flattenString(str) {
  return str.replace(/[^\w\s]|_/g, '') // Removes Punctuation
            .replace(/\s/g, '') // Removes Whitespace
            .toLowerCase()  // Converts all letters to lowercase
            .split('');
}

console.log(countLetters(testInput));
console.log(countLetters(challengeInput));