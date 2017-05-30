const smallLarge = (small, large) => {
  let count = large;
  let numArr = [];

  while (count) {
   numArr.push(Math.floor(Math.random() * (large - small)) + small);
   count--;
  }

  let minNum = Math.min(...numArr);
  let maxNum = Math.max(...numArr);

  return [minNum, maxNum];

};

console.log(smallLarge(1, 20));