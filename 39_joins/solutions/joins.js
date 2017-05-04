const cities = [
  {id: 1, name: "Denver", state_id: 1},
  {id: 2, name: "Milwaukee", state_id: 3},
  {id: 9, name: "Pella", state_id: 9},
  {id: 4, name: "Jasper", state_id: 7},
  {id: 11, name: "Greenville", state_id: 10},
  {id: 8, name: "West Lafayette", state_id: 7},
  {id: 45, name: "Chicago", state_id: 22}
];

const states = [
  {id: 1, name: "Colorado"},
  {id: 3, name: "Wisconsin"},
  {id: 9, name: "Iowa"},
  {id: 7, name: "Indiana"},
  {id: 22, name: "Illinois"},
  {id: 10, name: "South Carolina"}
];

const join = (left, right, foreignKey, primaryKey, newKey) => {

  // Copy left object
  let leftCopy = left.map(obj => Object.assign({}, obj));

  // Join left and right objects
  let leftRightJoin = leftCopy.map(leftObj => {
      // Set right object to new key
      leftObj[newKey] = right.find(key => leftObj[foreignKey] === key[primaryKey]);
      return leftObj;
    });

  // Delete foreignKey from object
  let delKey = leftRightJoin.map(obj => {
    delete obj[foreignKey];
    return obj;
  });

  const final = delKey;

  return final;

};

console.log(join(cities, states, 'state_id', 'id', 'state'));
