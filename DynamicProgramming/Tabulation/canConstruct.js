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

const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for(let i=0; i<=target.length; i++) {
    if(table[i] === true) {
      for(let word of wordBank) {
        if(target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // false
