const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject, value) {
  const objectKeys = Object.keys(inputObject);
  for (const key of objectKeys) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror:  "Walking Dead",
  action:  "The 100",
  disappointing_ending:  "Game of Thrones",
};

module.exports = findKeyByValue;

// console.log(findKeyByValue(bestTVShowsByGenre, 'Game of Thrones'));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), 'disappointing_ending');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The 100"), 'action');
