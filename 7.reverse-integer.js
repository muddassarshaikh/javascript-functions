/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const reverseN = +String(Math.abs(x))
    .split("")
    .reverse()
    .join("");
  if (reverseN > 0x7fffffff) {
    return 0;
  }
  return x < 0 ? -reverseN : reverseN;
};
