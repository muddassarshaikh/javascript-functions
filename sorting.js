/**
 * Bubble Sorting
 */
const bubbleSort = array => {
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
console.log(bubbleSort([12, 54, 23, 1, 67, 43, 2]));

/**
 * Insertion Sorting
 */
const insertionSort = array => {
  for (i = 1; i < array.length; i++) {
    let k = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > k) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = k;
  }
  return array;
};
console.log(insertionSort([12, 54, 23, 1, 67, 43, 2]));

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
console.log(sortDecending(123));
