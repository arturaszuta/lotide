const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const test = countLetters('This is sparta');
console.log(assertEqual(test['s'], 3));

module.exports = countLetters;

