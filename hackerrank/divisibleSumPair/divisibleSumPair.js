function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
