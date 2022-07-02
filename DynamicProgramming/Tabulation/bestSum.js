/**
 * Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers
 * as arguments.
 * The function should return an array containing the shortest combination of numbers that add up to exactly
 * the targetSum. If there is a tie for the shortest combination, you may return any one of the shortest
 * 
 * bestSum(7, [5, 3, 4, 7]) -> [7]
 * bestSum(8, [2, 3, 5]) -> [3, 5]
 * 
 * To get deep understanding please refer https://www.youtube.com/watch?v=oBt53YbR9Kk
 */

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for(let i=0; i<=targetSum; i++) {
    if(table[i] !== null) {
      for(let num of numbers) {
        const combination = [...table[i], num];
        if(!table[num + i] || table[num + i].length > combination.length) {
          table[num + i] = [...table[i], num];
        }
      }
    }
  }
  return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]