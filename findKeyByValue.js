// const assertEqual = function(actual, expected) {
//   const checkMark = '\u2705';
//   const redMark = '\u{1F6D1}';
  
//   if (actual === expected) {
//     console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(obj, val) {
  
  for (const key of Object.keys(obj)) {
   if(obj[key] === val) {
     return key;
   } 
  }
  return undefined;
  // console.log(Object.keys(bestTVShowsByGenre))
}

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   romance: "Serendipity",
//   fantasy: "Meet Joe Black",
//   action: "Mission Impossible"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Meet Joe Black"), "fantasy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Serendipity"), "undefined");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Mission Impossible"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Avengers"), undefined);

module.exports = findKeyByValue;