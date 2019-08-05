// For strings S and T, we say "T divides S" if and only if S = T + ... + T (T concatenated with itself 1 or more times)
// Return the largest string X such that X divides str1 and X divides str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

const divideStr = (str1, str2) => {
  let commonindex = 0;
  let flag = true;
  str1.split('').forEach((str1Item, str1Index) => {
    str2.split('').forEach((str2Item, str2Index) => {
      if (str1Item === str2Item && str1Index === str2Index) {
        if (str1Index > 0 && commonindex === 0) {
          flag = false;
        }
        commonindex++;
      }
    });
  });
  return flag === false
    ? '""'
    : commonindex === 0 || commonindex === str1.length
    ? '""'
    : str1.substr(commonindex);
};
console.log(divideStr('ABCGEF', 'ABC'));

// solution from vaibhav

// /**
//  * @param {string} str1
//  * @param {string} str2
//  * @return {string}
//  */
var gcdOfStrings = function(str1, str2) {
  const lenGCD = gcdNum(str1.length, str2.length);
  const com = str1.substr(0, lenGCD);
  if (com === str2.substr(0, lenGCD)) {
    return com;
  }
  return '';
};

var gcdNum = function(a, b) {
  if (!b) return a;
  return gcdNum(b, a % b);
};

console.log(gcdOfStrings('ABCGEF', 'ABC'));
