const flatten = function(array) {
  let newArray = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(element2) {
        newArray.push(element2);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

module.exports = flatten;

/* if (Array.isArray(element)) {
      array.splice(index, 1)
      for (var x = element.length - 1; x >= 0; --x) {
        console.log(element)
        array.splice(index, 0, element[x])
      }
    }*/
