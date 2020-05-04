/**
 * Write a function min that takes two arguments and returns their minimum.
 */

// Solution 1
function min(a, b) {
  if (a < b) return a;
  else return b;
}

// Solution 2
const min = function (a, b) {
  return Math.min(a, b);
};
