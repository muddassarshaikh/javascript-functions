function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const total = arr.reduce((acc, curr) => acc + curr);

  const max = total - arr[0];
  const min = total - arr[arr.length - 1];
  console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);
