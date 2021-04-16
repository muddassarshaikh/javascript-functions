// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  let total = 0;
  c.sort((a, b) => b - a);
  if (k >= c.length) {
    return c.reduce((prev, curr) => prev + curr);
  } else {
    for (let i = 0; i < c.length; i++) {
      total += Math.floor(i / k + 1) * c[i];
    }
    return total;
  }
}

// getMinimumCost(3, [2, 5, 6]);
console.log('getMinimumCost', getMinimumCost(2, [2, 5, 6]));
console.log('getMinimumCost', getMinimumCost(2, [1, 3, 5, 7, 9]));
