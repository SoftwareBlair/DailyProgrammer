const smallLarge = (small, large) => {
  let count = large;
  let result = [];

  while (count) {
   result.push(Math.floor(Math.random() * (large - small)) + small);
   count--;
  }
  console.log(result.length);
  return result

};

console.log(smallLarge(0, 20));