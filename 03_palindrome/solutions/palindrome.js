const string1 = 'A man, a plan, a canal, Panama!'; // True
const string2 = 'race car'; // True
const string3 = 'Am I a palindrome?'; // False

function palindrome(str) {
  let newString = flattenString(str);
  let stringRev = reverseString(newString);

  // If strings are equal, then it's a Palindrom
  if (newString === stringRev) return true;

  return false;

};

function flattenString(str) {
  return str.replace(/[^\w\s]|_/g, '') // Removes Punctuation
            .replace(/\s/g, '') // Removes Whitespace
            .toLowerCase();  // Converts all letters to lowercase
};

function reverseString(str) {
  return str.split('') // Split string into new array
            .reverse() // Reverse Array
            .join(''); // Join reversed array into a string
};

console.log(palindrome(string1));
console.log(palindrome(string2));
console.log(palindrome(string3));