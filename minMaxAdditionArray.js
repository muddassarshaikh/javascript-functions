/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * For example arr = [1,3,5,7,9]. Our minimum sum is 1+3+5+7  and our maximum sum is 3+5+7+9 . We would print
 * 16 24
 * Function Description
 * Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
 * miniMaxSum has the following parameter(s):
 * arr: an array of  integers
 *
 * Input Format
 * A single line of five space-separated integers.
 * Output Format
 * Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
 * Sample Input
 * 1 2 3 4 5
 *
 * Sample Output
 * 10 14
 */

function miniMaxSum(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let min = 0,
    max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      min += arr[i];
    }

    if (i > 0) {
      max += arr[i];
    }
  }

  return [min, max];
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
