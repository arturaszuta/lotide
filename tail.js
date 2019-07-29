const assertEqual = require('./assertEqual')

const tail = function(array) {
  const newArray = array.slice(1, array.length);
  return newArray;
};

module.exports = tail;







