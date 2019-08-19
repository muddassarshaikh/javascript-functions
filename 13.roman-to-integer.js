/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const arr = s.split("");
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (romanObj[arr[i - 1]] < romanObj[arr[i]]) {
      num =
        num + (romanObj[arr[i]] - romanObj[arr[i - 1]] - romanObj[arr[i - 1]]);
    } else {
      num = num + romanObj[arr[i]];
    }
  }
  return num;
};
