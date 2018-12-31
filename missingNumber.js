/**
 * Title - Find the Missing Number
 * Description - Create a function that takes an array of numbers between 1 and 10 
 *               (excluding one number) and returns the missing number.
 * Example - [1, 2, 3, 4, 6, 7, 8, 9, 10] ➞ 5
 *           [7, 2, 3, 6, 5, 9, 1, 4, 8] ➞ 10
 *           [10, 5, 1, 2, 4, 6, 8, 3, 9] ➞ 7
 * Notes - The array of numbers will be unsorted (not in order).
 *         Only one number will be missing.
 */

const missingNums = (arr) => {
	return arr.sort((a, b) => a - b).reduce((a, b, index) => { 
        return arr.indexOf(b-1) == -1 ? b-1 : a });
}

const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

console.log(missingNums(arr));