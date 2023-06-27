const checkMark = '\u2705';
const redMark = '\u{1F6D1}';
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('hello', 'hello');
assertEqual('hi', 'hello');
assertEqual(2, 2);
assertEqual(1, 2);