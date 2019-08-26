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

module.exports = countOnly;

//given an array and object with condition
//return an object with count
//define an object
//object.keys the true one
//if the object.keys array includes elements of the array add it or add 1 to it
//return the object