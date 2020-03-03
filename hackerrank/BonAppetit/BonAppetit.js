function bonAppetit(bill, k, b) {
  let sum = bill.reduce((a, b) => {
    return a + b;
  });

  sum = (sum - bill[k]) / 2;

  if (sum === b) {
    return 'Bon Appetit';
  } else {
    return b - sum;
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
