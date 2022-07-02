/**
 * Say that you are a traveler on a 2D grid. You begin in the 
 * top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions m * n ?  
 * 
 * Write a function `gridTraveler(m, n)` that calculates this.
 * 
 * To get deep understanding please refer https://www.youtube.com/watch?v=oBt53YbR9Kk
 */

const gridTraveler = (m, n, memo = {}) =>{
  const key = m + ',' + n;
  if(memo[key]) return memo[key];
  if(m === 1 && n === 1 ) return 1;
  if(m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220