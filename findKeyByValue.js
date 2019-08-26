//find the key that contains the value
//return the key
//if no key is found return undefined

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
