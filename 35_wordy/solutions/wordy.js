const math = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'divided': (a, b) => a / b,
  'multiplied': (a, b) => a * b,
  'times': (a, b) => a * b
};

const wordy = (str) => {
  const operator = str.match(/-?\d+|(plus|minus|divided|multiplied|times)/g);
  let result, i;

  if (!operator) return 42;

  result = parseInt(operator[0]);

  for (i = 0; i < operator.length; i++) {
    let op = operator[i];
    let opPlus = operator[i + 1]

    if (op in math) result = math[op](result, parseInt(opPlus));

  };

  return result;

};

module.exports = wordy;
