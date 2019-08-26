const countLetters = function(string) {
  let cleanedString = string.split(" ").join('');
  let results = {};
  for (let letter of cleanedString) {
    results[letter] ? results[letter] += 1 : results[letter] = 1;
  }
  return results;
};

module.exports = countLetters; 

