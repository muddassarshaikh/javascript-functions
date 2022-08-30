function missingNumbers(arr, brr) {
  let arrHashMap = {};
  let brrHashMap = {};

  arr.forEach((element) => {
    if (!arrHashMap[element]) {
      arrHashMap[element] = 1;
    } else {
      arrHashMap[element] = arrHashMap[element] + 1;
    }
  });

  brr.forEach((element) => {
    if (!brrHashMap[element]) {
      brrHashMap[element] = 1;
    } else {
      brrHashMap[element] = brrHashMap[element] + 1;
    }
  });

  const missingNumbers = [];

  for (key in brrHashMap) {
    let countB = brrHashMap[key];
    if (!arrHashMap[key] || countB > arrHashMap[key]) {
      missingNumbers.push(key);
    }
  }

  return missingNumbers;
}

console.log(
  missingNumbers(
    [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
  )
);
