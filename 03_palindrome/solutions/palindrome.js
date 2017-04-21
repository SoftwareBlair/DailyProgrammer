const string1 = 'A man, a plan, a canal, Panama!'; // True
const string2 = 'race car'; // True
const string3 = 'Am I a palindrome?'; // False

const palindrome = (str) => {

  // Check to make sure input is a string. If not, return an error
  if (typeof str !== 'string') return new Error('Input is not a String');

  let newString = flattenString(str);
  let stringRev = reverseString(newString);

  // If strings are equal, then it's a Palindrom
  return newString === stringRev ? true : false;

};

const flattenString = (str) => {
  return str.replace(/[^\w\s]|_/g, '') // Removes Punctuation
            .replace(/\s/g, '') // Removes Whitespace
            .toLowerCase();  // Converts all letters to lowercase
};

const reverseString = (str) => {
  return str.split('') // Split string into new array
            .reverse() // Reverse Array
            .join(''); // Join reversed array into a string
};

console.log(palindrome(string1));
console.log(palindrome(string2));
console.log(palindrome(string3));
console.log(palindrome(4));