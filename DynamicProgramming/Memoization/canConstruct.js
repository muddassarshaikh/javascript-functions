/**
 * Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
 * 
 * The function should return a boolean indicating whether or not the `target` can be constructed by
 * concatenating elements of the `wordBank` array.
 * 
 * You may reuse elements of `wordBank` as many times as needed.
 * 
 * canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true
 * canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) -> false
 * canConstruct('', [cat, dog, mouse]) -> true
 * 
 * To get deep understanding please refer https://www.youtube.com/watch?v=oBt53YbR9Kk
 */

const canConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target];
  if(target === '') return true;

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // false
