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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
