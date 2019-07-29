const findKeys = function(object, callback) {
  const objArray = Object.keys(object);
  for (let arrayElement of objArray) {
    if (callback(object[arrayElement])) {
      return arrayElement;
    }
  }
};

module.exports = findKeys;