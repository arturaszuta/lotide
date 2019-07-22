const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`);
    }
};

const tail = function(array) {
  const newArray = array.slice(1, array.length);
  return newArray;
}

console.log(tail([1]));
console.log(tail([]));

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const testCase2 = tail([1,5,6,7,8])
assertEqual(testCase2.length, 4); // ensure we get back two elements
assertEqual(testCase2[0], 5); // ensure first element is "Lighthouse"
assertEqual(testCase2[1], 6); // ensure second element is "Labs"
assertEqual(testCase2[2], 7); // ensure second element is "Labs"
assertEqual(testCase2[3], 8); // ensure second element is "Labs"
