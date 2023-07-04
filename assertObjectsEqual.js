const { assertObjectsEqual } = require(".");

const eqObjects = function(object1, object2) {
  obj1Keys = Object.keys(object1);
  obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect;
//   const checkMark = '\u2705';
//   const redMark = '\u{1F6D1}';

//   if (eqObjects(actual, expected)) {
//     console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
//   } else {
//     console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
//   }
// };

// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
// assertObjectsEqual({ a: '3', b: 2 }, { b: 2, a: '1' });
// assertObjectsEqual({ a: '2', b: 2 }, { b: 2, a: '2' });
module.exports = assertObjectsEqual;