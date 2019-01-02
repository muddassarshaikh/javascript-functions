/**
 * Title - Head-Body-Tail
 * 
 * Description - Write a function that takes four string arguments. 
 *               You will be comparing the first string to the three next strings. 
 *               Verify if the first string starts with the second string, 
 *               includes the third string, and ends with the fourth string. 
 *               If the first string passes all checks, 
 *               return the string "My head, body, and tail.", 
 *               otherwise, return "Incomplete.".
 * 
 * Example - "Onomatopeia", "on", "mato", "ia" ➞ "Incomplete."
 *           "Centipede", "Cent", "tip", "pede" ➞ "My head, body, and tail."
 *           "apple", "AP", "PPL", "LE" ➞ "Incomplete."
 * 
 * Notes - You'll always get exactly four strings as arguments.
 *         Tests are case sensitive.
 */

const verifySubstrs = (mainStr, head, body, tail) => {
	return mainStr.startsWith(head) && mainStr.endsWith(tail) && mainStr.includes(body) ? "My head, body, and tail." : "Incomplete."; 
};

const mainStr = "Onomatopeia";
const head = "on";
const body = "mato";
const tail = "ia";
console.log(verifySubstrs(mainStr, head, body, tail));

/*********************************************************************************************/

/**
 * Title - X's and O's
 * 
 * Description - Create a function that takes a string, 
 *               checks if it has the same number of 'x's and 'o's 
 *               and returns either true or false.
 *               Return a boolean value (true or false).
 *               The string can contain any character.
 *               When neither an x nor an o is in the string, return true.
 * 
 * Example - "ooxx" ➞ true
 *           "xooxx" ➞ false
 *           "ooxXm" ➞ true (case insensitive)
 *           "zpzpzpp" ➞ true (returns true if no x and o)
 *           "zzoo" ➞ false
 * 
 * Notes - Remember to return true if there aren't any x's or o's.
 *         Must be case insensitive.
 */

const XO = (str) => {
    return str.toLowerCase().split("x").length == str.split("o").length;
}

const str = "ooxxx";

console.log(XO(str));
