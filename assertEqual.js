const assertEqual = function(actual, expected) {
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
};

// export the function to export and calling the function
module.exports = assertEqual;