/**
 * Write a function called countChar that behaves like countBs ,
 * except it takes a second argument that indicates the character that is to be counted
 * (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
 */
const countChar = function (str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  return counter;
};

const countBs = function (str) {
  countChar(str, 'B');
};
