/*const assertEqual = function(actual, expected) {
  const checkMark = '\u2705';
  const redMark = '\u{1F6D1}';
  // Helper function to compare arrays for equality
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
  }
  // AssertEqual own
  if (actual === expected) {
    console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

const tail = function(array) {
  let arr = [];

  arr = array.slice(1);

  return arr;
};

// assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3); // original array should still have 3 elements!
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
module.exports = tail;