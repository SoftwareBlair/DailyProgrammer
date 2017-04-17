const operations = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'divided': (a, b) => a / b,
  'multiplied': (a, b) => a * b,
  'times': (a, b) => a * b
};

const wordy = (str) => {
  let operator = str.match(/-?\d+|(plus|minus|divided|multiplied|times)/g);

  if (!operator) return 42;

  let result = parseInt(operator[0]);

  for (let i = 0; i < operator.length; i++) {

    if (operator[i] in operations) result = operations[operator[i]](result, parseInt(operator[i + 1]));

  };

  return result;

};

module.exports = wordy;
