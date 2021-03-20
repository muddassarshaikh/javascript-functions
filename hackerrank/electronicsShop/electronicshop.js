function getMoneySpent(keyboards, drives, b) {
  let result = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (b >= keyboards[i] + drives[j] && result < keyboards[i] + drives[j]) {
        result = keyboards[i] + drives[j];
      }
    }
  }
  return result;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
