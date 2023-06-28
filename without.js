const checkMark = '\u2705';
const redMark = '\u{1F6D1}';
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`${checkMark}${checkMark}${checkMark}Arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Arrays are not equal: ${arr1} !== ${arr2}`);
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

const without = function(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};

// Example usage
console.log(without([1, 2, 3], [1])); // Output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Output: ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);