/* Created by David Adams January 4 2016 */
function sumDigits(number) {
  var sum = sumNumber(number);

  while(sum > 9) {
    sum = sumNumber(sum);
  }

  return sum;
}

function sumNumber(number) {
  return number.toString(10).split("")
    .reduce(function(previousValue, currentValue) {
      return parseInt(previousValue) + parseInt(currentValue);
    })
}

console.log(sumDigits(12));
console.log(sumDigits(12345));
console.log(sumDigits(667));
