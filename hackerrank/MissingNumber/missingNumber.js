function missingNumbers(array1, array2) {
  let numHash1 = new Map();
  let numHash2 = new Map();
  for (let i = 0; i < array1.length; i++) {
    let count = numHash1.get(array1[i]);
    if (!count) {
      numHash1.set(array1[i], 1);
    } else {
      numHash1.set(array1[i], count + 1);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let count = numHash2.get(array2[i]);
    if (!count) {
      numHash2.set(array2[i], 1);
    } else {
      numHash2.set(array2[i], count + 1);
    }
  }
  let missingNumbers = [];
  console.log(
    '🚀 ~ file: missingNumber.js ~ line 22 ~ missingNumbers ~ numHash2.keys()',
    numHash2.keys()
  );
  for (let key of numHash2.keys()) {
    let countB = numHash2.get(key);
    if (!numHash1.get(key) || countB > numHash1.get(key)) {
      missingNumbers.push(key);
    }
  }

  console.log(missingNumbers.sort((a, b) => a - b).join(' '));
}

console.log(
  missingNumbers(
    [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
  )
);
