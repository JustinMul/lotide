const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🌼Assertion Passed ' + actual + ' === ' + expected);
  
  } else {
    console.log('🌚Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual('Lighthouse Labs','Bootcamp');
assertEqual('hi','Hi');
assertEqual('Hi','Hi');
assertEqual(3,2);
assertEqual(3,3);