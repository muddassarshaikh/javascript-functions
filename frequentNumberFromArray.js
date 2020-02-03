/**
 * Given an array of integers, find the most frequent integer.
 * Write a method that takes an array of integers and returns an interger.
 * {1, 2, 3, 3} => 3
 * {1, 2, 3 } => 1 {or 2 or 3}
 * {3, 1, 4, 57, 4} => 4
 */

const frequentNumber = array => {
  const numberObject = {};
  for (let i = 0; i < array.length; i++) {
    if (numberObject.hasOwnProperty(array[i])) {
      numberObject[array[i]] = ++numberObject[array[i]];
    } else {
      numberObject[array[i]] = 1;
    }
  }

  let value = 0;
  let number = 0;

  for (let keys in numberObject) {
    if (value < numberObject[keys]) {
      value = numberObject[keys];
      number = keys;
    }
  }
  return number;
};

console.log(frequentNumber([3, 1, 4, 57, 4]));
