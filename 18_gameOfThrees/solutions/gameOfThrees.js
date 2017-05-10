const gameOfThrees = (int) => {
  // While input is greater than one
  while (int > 1) {
    // If input divided by three has no remainder
    if (int % 3 === 0) {
      console.log(`${int}: ${int} / 3 = ${int / 3}`); // Logs current number and the math being performed
      int = int / 3; // Set input to input divided by three
    }
    else // If input plus one and then divided by three has no remainder
    if ((int + 1) % 3 === 0) {
      console.log(`${int}: (${int} + 1) / 3 = ${(int + 1) / 3}`); // Logs current number and the math being performed
      int = (int + 1) / 3; // Set input to input plus one then divide by three
    }
    else // If input minus one and then divided by three has no remainder
    if ((int - 1) % 3 === 0) {
      console.log(`${int}: (${int} - 1) / 3 = ${(int - 1) / 3}`); // Logs current number and the math being performed
      int = (int - 1) / 3; // Set input to input minus one then divide by three
    };

  };

  console.log(`Result: ${int} \n`); // Log input when it gets to one
  return int;

};

gameOfThrees(100);
gameOfThrees(1000);
gameOfThrees(2000);