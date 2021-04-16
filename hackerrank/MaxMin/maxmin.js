// Complete the maxMin function below.
function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let unfairness = arr[arr.length - 1];

  for (let i = 0; i < arr.length - k + 1; i++) {
    if (arr[i + k - 1] - arr[i] < unfairness) {
      unfairness = arr[i + k - 1] - arr[i];
    }
  }
  return unfairness;
}
console.log('maxMin1', maxMin(2, [1, 2, 1, 2, 1]));
console.log('maxMin2', maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
