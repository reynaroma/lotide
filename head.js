const checkMark = '\u2705';
const redMark = '\u{1F6D1}';
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result = array[0];
  }
  return result;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");