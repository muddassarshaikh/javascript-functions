function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let total = 0;
  let totalprice = 0;

  for (let i = 0; i < prices.length; i++) {
    if (totalprice + prices[i] >= k) {
      break;
    } else {
      total++;
      totalprice += prices[i];
    }
  }

  return total;
}
maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
