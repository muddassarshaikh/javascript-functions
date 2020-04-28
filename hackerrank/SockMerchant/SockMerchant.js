function sockMerchant(n, ar) {
  let obj = {};
  let totalPairs = 0;

  for (let i = 0; i < ar.length; i++) {
    if (obj[ar[i]]) {
      obj[ar[i]]++;

      if (obj[ar[i]] === 2) {
        totalPairs++;
        obj[ar[i]] = 0;
      }
    } else {
      obj[ar[i]] = 1;
    }
  }

  return totalPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
