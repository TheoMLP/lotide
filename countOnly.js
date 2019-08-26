const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

//given an array and object with condition
//return an object with count
//define an object
//object.keys the true one
//if the object.keys array includes elements of the array add it or add 1 to it
//return the object

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    //if (Object.keys(itemsToCount).includes(item))
    if (itemsToCount[item]) {
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;