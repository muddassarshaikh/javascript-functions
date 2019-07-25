/**
 * Title - Format Number with Comma(s) Separating Thousands
 *
 * Description - Create a function that takes a number as an argument and
 *               returns a string formatted to separate thousands.
 *
 * Example - 1000 ➞ "1,000"
 *           100000 ➞ "100,000"
 *           20 ➞ "20"
 *
 * Notes - You can expect a valid number for all test cases.
 */

function formatNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

//OR

function formatNum(num) {
  return num.toLocaleString('en');
}

const num = 1234;

console.log(formatNum(num));

/**
 * Title - Return the Sum of the Two Smallest Numbers
 *
 * Description - Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
 *
 * Example - sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
 *           sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
 *           sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
 *           sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
 *           sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
 *
 * Notes - Don't count negative numbers.
 *         Floats and empty arrays will not be used in any of the test cases.
 */

function sumTwoSmallestNums(arr) {
  const arr1 = arr.filter(x => x > 0).sort((a, b) => a - b);
  return arr1[0] + arr1[1];
}

console.log(sumTwoSmallestNums(2902));
