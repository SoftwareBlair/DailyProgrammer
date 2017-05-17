const NUM_HELPERS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninty'
};

const LARGE_NUM_HELPERS = ['hundred', 'thousand', 'million', 'billion'];

const say = {
  inEnglish: (num) => {
    let result = null;

    if (num < 0 || num > 999999999999) result = 'Number must be between 0 and 999,999,999,999.';

    if (NUM_HELPERS[num]) {
      result = NUM_HELPERS[num];
    } 
    else {
      const numArr = num.toString().split('');
      const numLen = numArr.length;

      if (!NUM_HELPERS[num]) {
        if (numLen === 2) {
          
        }
        if (numLen === 3) {
          
        }
        if (numLen === 4) {
          
        }
        if (numLen === 5) {
          
        }
        if (numLen === 6) {
          
        }
        if (numLen === 7) {
          
        }
        if (numLen === 8) {
          
        }
        if (numLen === 9) {
          
        }
        if (numLen === 10) {
          
        }
        if (numLen === 11) {
          
        }
        if (numLen === 12) {
          
        }
      }
    }

    return result;

  }

};

// Helper Functions
const LESS_THAN_EQUAL = (input, object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return object[input];
    }
  }
};

module.exports = say;