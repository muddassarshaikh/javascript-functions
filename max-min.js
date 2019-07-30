/**
 * Title - Return the Highest and Lowest Numbers
 *
 * Description - Create a function that accepts a string of space separated numbers
 *               and returns the highest and lowest number (as a string).
 *
 * Example - "1 2 3 4 5" ➞ "5 1"
 *           "1 2 -3 4 5" ➞ "5 -3"
 *           "1 9 3 4 -5" ➞ "9 -5"
 *           "13" ➞ "13 13"
 *
 * Notes - All numbers are valid Int32, no need to validate them.
 *         There will always be at least one number in the input string.
 *         Output string must be two numbers separated by a single space, and highest number is first.
 */

const highLow = str => {
  return '' + Math.max(...str.split(' ')) + ' ' + Math.min(...str.split(' ')) + '';
};

const str = '1 2 3 4 5';

console.log(highLow(str));

/***********************************************************************************************************************/

/**
 * Title - Find the Minimum, Maximum, Length and Average Values
 *
 * Description - Create a function that takes an array of numbers and returns the following statistics:
 *               Minimum Value
 *               Maximum Value
 *               Sequence Length
 *               Average Value
 *
 * Example - [6, 9, 15, -2, 92, 11] ➞ [-2, 92, 6, 21.833333333333332]
 *           [30, 43, 20, 92, 3, 74] ➞ [3, 92, 6, 43.666666666666664]
 *           [4.54, 8.32, 5.20] ➞ [4.54, 8.32, 3, 6.02]
 */

const minMaxLengthAverage = arr => {
  return [Math.min(...arr), Math.max(...arr), arr.length, arr.reduce((a, b) => a + b) / arr.length];
};

const arr = [6, 9, 15, -2, 92, 11];

console.log(minMaxLengthAverage(arr));
