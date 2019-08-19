/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const reverseX = +String(Math.abs(x))
    .split("")
    .reverse()
    .join("");
  if (reverseX === x) {
    return true;
  } else {
    return false;
  }
};
