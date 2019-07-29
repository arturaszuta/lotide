const assertEqual = require('../assertEqual')
const tail = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const testCase2 = tail([1,5,6,7,8]);
assertEqual(testCase2.length, 4); // ensure we get back two elements
assertEqual(testCase2[0], 5); // ensure first element is "Lighthouse"
assertEqual(testCase2[1], 6); // ensure second element is "Labs"
assertEqual(testCase2[2], 7); // ensure second element is "Labs"
assertEqual(testCase2[3], 8); // ensure second element is "Labs"