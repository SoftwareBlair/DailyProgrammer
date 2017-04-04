const array1 = ['truck', 'sidewald', 'book'];
const array2 = ['elf', 'wizard', 'dwarf'];

function longestString(arr) {
  let result = {};
  let longWord = arr[0];

  arr.forEach(word => {
    if (word.length > longWord.length) longWord = word;
  });

  result[longWord] = longWord.length;

  return result;
}

console.log(longestString(array1));
console.log(longestString(array2));