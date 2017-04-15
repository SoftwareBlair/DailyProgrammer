const gameOfThrees = (int) => {

  while (int > 1) {

    if (int % 3 === 0) {
      console.log(`${int}: ${int} / 3 = ${int / 3}`);
      int = int / 3;
    }
    else
    if ((int + 1) % 3 === 0) {
      console.log(`${int}: (${int} + 1) / 3 = ${(int + 1) / 3}`);
      int = (int + 1) / 3;
    }
    else
    if ((int - 1) % 3 === 0) {
      console.log(`${int}: (${int} - 1) / 3 = ${(int - 1) / 3}`);
      int = (int - 1) / 3;
    };

  };

  console.log(`Result: ${int} \n`);
  return int;

};

gameOfThrees(100);
gameOfThrees(1000);
gameOfThrees(2000);