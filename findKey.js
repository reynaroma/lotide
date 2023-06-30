const assertEqual = function(actual, expected) {
  const checkMark = '\u2705';
  const redMark = '\u{1F6D1}';
  
  if (actual === expected) {
    console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const test2 = findKey({
  apple: { color: "red" },
  banana: { color: "yellow" },
  orange: { color: "orange" },
  grape: { color: "purple" }
}, x => x.color === "green");

const test3 = findKey({
  "Meredith Grey": {age: 20, occupation: "General Surgeon"},
  "Derek Shepherd": {age: 20, occupation: "Neuro Surgeon"},
  "Anne Hathaway": {age: 20, occupation: "Actress"},
  "Bill Gates": {age: 20, occupation: "Application Developer"}
}, x => x.occupation === 'Application Developer');

const test4 = findKey({
  apple: { color: "red" },
  banana: { color: "yellow" },
  orange: { color: "orange" },
  grape: { color: "purple" }
}, x => x.color === "purple");

assertEqual(test1, "noma");
assertEqual(test2, "green");
assertEqual(test3, "Bill Gates");
assertEqual(test4, "grape");