const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeys = function(object, callback) {
  const objArray = Object.keys(object);
  for (let arrayElement of objArray) {
    if (callback(object[arrayElement])) {
      return arrayElement;
    }
  }
};

// TEST ONE
const result1 = findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { moonName: 'Victorio' },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.moonName === 'Victorio');

assertEqual(result1, 'noma');

//TEST TWO
const result2 = findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result2, 'noma');

//TEST THREE
const result3 = findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
}, x => x.stars === 5);

assertEqual(result3, 'Akelarre');

module.exports = findKeys;