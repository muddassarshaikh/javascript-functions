const bubbleSort = array => {
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([12, 54, 23, 1, 67, 43, 2]));
