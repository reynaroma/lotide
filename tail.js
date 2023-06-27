const checkMark = '\u2705';
const redMark = '\u{1F6D1}';
const assertEqual = function(actual, expected) {
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
};

let arr = [];

const tail = function(array) {
  arr = array.slice(1);
  return arr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!