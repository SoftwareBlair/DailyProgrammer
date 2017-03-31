let testInput = 'Hello, World!'
let challengeInput = 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day!!!';

function countLetters(str) {
  let result = [];
      newString = str.replace(/[^\w\s]|_/g, '') // Removes Punctuation
                     .replace(/\s/g, '') // Removes Whitespace
                     .toLowerCase()  // Converterts all letters to lowercase

  for (var i = 0; i < newString.length; i++) {
    let currentChar = newString[i];

    if (result.indexOf(currentChar) === -1) {
      let charCount = count(newString, currentChar);
      result.push(`${currentChar}:${charCount}`);
    }
  }
  return result;
}

function count(string, char) {
  let regEx = new RegExp(char, 'g');
  return string.match(regEx).length;
}

console.log(countLetters(testInput));