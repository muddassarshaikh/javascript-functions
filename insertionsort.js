const insertionSort = array => {
  for (i = 1; i < array.length; i++) {
    let k = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > k) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = k;
  }
  return array;
};

console.log(insertionSort([12, 54, 23, 1, 67, 43, 2]));
