const assertEqual = function(actual, expected) {
  const checkMark = '\u2705';
  const redMark = '\u{1F6D1}';
  
  if (actual === expected) {
    console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  for (const item of str) {
    if(result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1
    }
  }
  return result;
};

const result1 = countLetters('LHLAAA');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);
assertEqual(result1['A'], 2);
console.log(countLetters('lighthouse in the house'))