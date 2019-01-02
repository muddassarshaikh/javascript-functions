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