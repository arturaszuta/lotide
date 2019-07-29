const countLetters = function(word) {
  let answerObject = {};
  const noSpaces = word.split(' ').join('').toLowerCase();
  for (const letter of noSpaces) {
    if (answerObject[letter]) {
      answerObject[letter] += 1;
    } else {
      answerObject[letter] = 1;
    }
  }
  return answerObject;
};

console.log(countLetters('sparta'));

module.exports = countLetters;

