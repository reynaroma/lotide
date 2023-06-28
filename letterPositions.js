const assertArraysEqual = function(actual, expected) {
  const checkMark = '\u2705';
  const redMark = '\u{1F6D1}';
  
  if (eqArrays(actual, expected)) {
    console.log(`${checkMark}${checkMark}${checkMark}Arrays are equal: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Arrays are not equal: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // check if the lengths of array are equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Iterate over the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // check if the the current elements are not equal
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    str = sentence[i];
    // exclude spaces
    if(str !== ' ') {
      if(!results[str]) {
        results[str] = [];
      }
        results[str].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("letter positions").o, [8]);