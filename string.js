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

/*******************************************************************************************/

/**
 * Title - Remove the Special Characters from a String
 * 
 * Description - Create a function that takes a string, removes all "special" characters 
 *               (e.g. ! @ # $ % ^ & \ *) and returns the new string. The only 
 *               non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
 * 
 * Example - "The quick brown fox!" ➞ "The quick brown fox"
 *           "%fd76$fd(-)6GvKlO." ➞ "fd76fd-6GvKlO"
 *           "D0n$c sed 0di0 du1" ➞ "D0nc sed 0di0 du1"
 */

const removeSpecialCharacters = (str) => {
	return str.replace(/[^a-zA-Z0-9-_ ]/g, "");
};

function removeSpecialCharacters(str) {
    return str.replace(/[^\w- ]/gi, "");
}

const str2 = "The quick brown fox!";

console.log(removeSpecialCharacters(str2));

/*******************************************************************************************/

/**
 * Title - AlTeRnAtInG CaPs​​​​​
 * 
 * Description - Create a function that alternates the case of the characters in a string.
 * 
 * Example - "Hello" ➞ "HeLlO"
 *           "Hey, how are you?" ➞ "HeY, hOw aRe yOu?"
 *           "OMG!!! This website is awesome!!" ➞ "OmG!!! tHiS WeBsItE Is aWeSoMe!!"
 */

function alternatingCaps(str) {
	return str.split('').map((ele, index) => index%2 == 0 ? ele.toUpperCase() : ele.toLowerCase()).join('')
}

const str3 = "The quick brown fox!";

console.log(alternatingCaps(str3));

/*********************************************************************************************************************************/

/**
 * Title - Sort an Array by String Length
 * 
 * Description - Create a function that takes an array of strings and return an array, sorted from shortest to longest.
 * 
 * Example - sortByLength(["Google", "Apple", "Microsoft"]) ➞ ["Apple", "Google", "Microsoft"]
 *           sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]) ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
 *           sortByLength(["Turing", "Einstein", "Jung"]) ➞ ["Jung", "Turing", "Einstein"]
 * 
 * Note - All test cases contain arrays with strings of different lengths, 
 *        so you won't have to deal with multiple strings of the same length.
 */

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length)
}

const arr = ["Google", "Apple", "Microsoft"];

console.log(sortByLength(arr));

/*********************************************************************************************************************************/

/**
 * Title - Return the Middle Character(s) of a String
 * 
 * Description - Create a function that takes a string and returns the middle character(s). 
 *               If the word's length is odd, return the middle character. If the word's length is even, 
 *               return the middle two characters.
 * 
 * Example - getMiddle("test") ➞ "es"
 *           getMiddle("testing") ➞ "t"
 *           getMiddle("middle") ➞ "dd"
 *           getMiddle("A") ➞ "A"
 * 
 * Note - All test cases contain a single word (as a string).
 */

function getMiddle(str) {
	return str.length % 2 === 0 ? str.substr((str.length -1)/2, 2) : str.substr((str.length - 1) /2, 1);
}

console.log(getMiddle("testing"));

