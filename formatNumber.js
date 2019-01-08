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
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

//OR

function formatNum(num) {
	return (num).toLocaleString('en')
}

const num = 1234;

console.log(formatNum(num));