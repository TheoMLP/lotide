const letterPositions = function(sentence) {
  let cleanedSentence = sentence.split('');
  let results = {};
  cleanedSentence.forEach(function(letter, index) {
    if (letter !== " ") {
      results[letter] ? results[letter].push(index) : results[letter] = [index];
    }
  });
  return results;
};

module.exports = letterPositions; 

