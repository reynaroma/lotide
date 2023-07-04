// const assertArraysEqual = function(actual, expected) {
//   const checkMark = '\u2705';
//   const redMark = '\u{1F6D1}';
  
//   if (eqArrays(actual, expected)) {
//     console.log(`${checkMark}${checkMark}${checkMark}Arrays are equal: ${actual} === ${expected}`);
//   } else {
//     console.error(`${redMark}${redMark}${redMark}Arrays are not equal: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   // check if the lengths of array are equal
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // Iterate over the elements of the arrays
//   for (let i = 0; i < arr1.length; i++) {
//     // check if the the current elements are not equal
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const flatten = function(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        arr.push(array[i][j]);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
};

//flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 3, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 3, [3, 4], 5, [6]]), [1, 3, 3, 4, 5, 6]);
module.exports = flatten;