const flatten = function(inputArray) {
  let answerArray = [];
  for (let element of inputArray) {
    if (Array.isArray(element)) {
      answerArray.push(...element);
    } else {
      answerArray.push(element);
    }
  }
  return answerArray;
};

module.exports = flatten;

