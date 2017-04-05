const parensChecker = (str) => {
  let strArray = str.split('');
  let counter = 0;
  let result = true;

  // Loop through each element in array
  strArray.forEach(par => {
    // Increase counter on instance of '('
    if (par === '(') counter++;
    // Decrease counter on instance of ')'
    if (par === ')') counter--;
    // Result if false if counter is less than zero
    if (counter < 0) result = false;
  });

  return result;
};

module.exports = parensChecker;