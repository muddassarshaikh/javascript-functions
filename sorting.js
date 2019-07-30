/**
 * Title - Sort Numbers in Descending Order
 *
 * Description - Create a function that takes any nonnegative number as an argument
 *               and return it with it's digits in descending order.
 *               Descending order is when you sort from highest to lowest.
 *
 * Example - 123 ➞ 321
 *           1254859723 ➞ 9875543221
 *           73065 ➞ 76530
 *
 * Notes - You can expect non-negative numbers for all test cases.
 */

const sortDecending = num => {
  return Number(
    Array.from(num.toString())
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  );
};

const num = 123;

console.log(sortDecending(num));
