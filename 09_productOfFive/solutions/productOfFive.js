let shortNum = 111333321; // Returns 162
let longNum = 127289373913828309127381263; // Returns 5103

function productOfFive(num) {
  let numArr = num.toString(); // Convert integer into string
  let numLength = numArr.length;
  let temp;
  let index = 0;
  let result = 0;

  // Loop through the length of the string starting at first index positon
  while (index <= numLength) {
    // Mulitply the four adjacent numbers to current current number
    temp = numArr[index] * numArr[index + 1] * numArr[index + 2] * numArr[index + 3] * numArr[index + 4];

    // Set current temporary number to result if larger
    if (temp > result) result = temp;

    // Incriment index by one after each loop
    index++
  }

  return result;

}

console.log(productOfFive(shortNum));
console.log(productOfFive(longNum));