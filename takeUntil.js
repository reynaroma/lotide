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
};
const takeUntil = function(array, callback) {
  const arr = [];
  
  for (let item of array) {
    if(callback(item)) {
      break;
    }
    arr.push(item)
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results1, [ 1, 0, 'a', 7, 'k' ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results2, [ "I've", "been", "to", "Redwood" ])
