function MigratoryBirds(arr) {
  let max = [0, 0];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }

    if (obj[arr[i]] > max[0]) {
      max[0] = obj[arr[i]];
      max[1] = arr[i];
    } else if (obj[arr[i]] === max[0]) {
      if (max[1] > arr[i]) {
        max[1] = arr[i];
      }
    }
  }
  return max[1];
}

console.log(MigratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 4, 3]));
