const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌼Assertion Passed ${actual} === ${expected}`);
  
  } else {
    console.log(`🌚Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let removeSpaceSentence = sentence.replaceAll(' ','');
  let letterCounter = {};
  for (const letter of removeSpaceSentence) {
    if (letterCounter[letter]) {
      letterCounter[letter]++;
    } else {
      letterCounter[letter] = 1;
    }
  }
  return letterCounter;
};

console.log(countLetters("lighthouse in the house"));