/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);

console.log(getSum(4, 5));
