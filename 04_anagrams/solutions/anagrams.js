const string1 = 'pameesxl';
const string2 = 'examples';
const string3 = 'something';

function anagram(str1, str2) {
  // Compare each sorted input, if they match then return true
  return sortString(str1) === sortString(str2) ? true : false;

};

function sortString(str) {
  return str.split('') // Split string into array
            .sort() // Sort alphabetically
            .join(''); // Join array back into string
};

console.log(anagram(string1, string2));
console.log(anagram(string1, string3));