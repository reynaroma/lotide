/*const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(actual, expected) {
  const checkMark = '\u2705';
  const redMark = '\u{1F6D1}';

  if (eqArrays(actual, expected)) {
    console.log(`${checkMark}${checkMark}${checkMark}Arrays are equal: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Arrays are not equal: ${actual} !== ${expected}`);
  }
};*/

const middle = function(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const len = arr.length;
    const median = Math.floor(arr.length/2);
    const mdn = arr.length/2;

    if(len % 2 === 1 && arr.length > 1) {
      if(median === i) {
        // console.log(`Median ${median} and [${arr[i]}]`)
        result.push(arr[i])
      }
    } else if (len % 2 === 0 && arr.length > 2) {
      if(mdn === i && median === i) {
        result.push(arr[i - 1]);
        result.push(arr[i]);
      }
    }
  } 
  return result
};

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]()
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
module.exports = middle;