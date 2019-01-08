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

/*******************************************************************************************/

/**
 * Title - Is the Number Symmetrical?
 * 
 * Description - Create a function that takes a number as an argument and 
 *               returns true or false depending on whether the number is symmetrical or not. 
 *               A number is symmetrical when it is the same as its reverse.
 * 
 * Example - isSymmetrical(7227) ➞ true
 *           isSymmetrical(12567) ➞ false
 *           isSymmetrical(44444444) ➞ true
 *           isSymmetrical(9939) ➞ false
 *           isSymmetrical(1112111) ➞ true
 */

function isSymmetrical(num) {
    return num.toString().split('').reverse().join('') == num
}

const num = "ooxxx";

console.log(isSymmetrical(num));

/*******************************************************************************************/

/**
 * Title - H4ck3r Sp34k
 * 
 * Description - Create a function that takes a string as an argument and 
 *               returns a coded (h4ck3r 5p34k) version of the string.
 * 
 * Example - hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
 *           hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
 *           hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
 * 
 * Note - In order to work properly, the function should replace all 'a's with 4, 
 *        'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
 */

const hackerSpeak = (str) => {
    const replaceObj = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5
    };
    const regex = /[aeios]/g;

    return str.replace(regex, match => {
        return replaceObj[match];
    });
};

const string = "javascript is cool";

console.log(hackerSpeak(string));

/*******************************************************************************************/

/**
 * Title - Capitalize the Names
 * 
 * Description - Create a function that takes an array of names and 
 *               returns an array with the first letter capitalized.
 * 
 * Example - ["mavis", "senaida", "letty"] ➞ ["Mavis", "Senaida", "Letty"]
 *           ["samuel", "MABELLE", "letitia", "meridith"] ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
 *           ["Slyvia", "Kristal", "Sharilyn", "Calista"] ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
 * 
 * Note - Don't change the order of the original array.
 *        Notice in the second example above, "MABELLE" is returned as "Mabelle".
 */

const capMe = (arr) => {
	return arr.map(ele => ele.charAt(0).toUpperCase() + ele.substr(1).toLowerCase());
}

const arr = ["mavis", "senaida", "letty"];

console.log(capMe(arr));





