/**
 * Given an array of integers, find the most frequent integer.
 * Write a method that takes an array of integers and returns an interger.
 * {1, 2, 3, 3} => 3
 * {1, 2, 3 } => 1 {or 2 or 3}
 * {3, 1, 3, 4, 57, 4} => 4
 */
let max = [0, 0];
const frequentNumber = array => {
  const numberObject = {};
  for (let i = 0; i < array.length; i++) {
    if (numberObject.hasOwnProperty(array[i])) {
      numberObject[array[i]] = ++numberObject[array[i]];
    } else {
      numberObject[array[i]] = 1;
    }

    if (max[1] < numberObject[array[i]]) {
      max[0] = array[i];
      max[1] = numberObject[array[i]];
    }
  }
  return max[0];
};

console.log(frequentNumber([3, 1, 4, 57, 4, 1, 1]));
