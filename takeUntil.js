const takeUntil = function(array, callback) {
  let answer = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      answer.push(element);
    }
  }
  return answer;
};

module.exports = takeUntil;