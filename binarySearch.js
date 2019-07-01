const sort = (arr) => {
  return arr.sort((a, b) => a - b);
};

const binarySearch = (array, low, high, searchnumber) => {

  const mid = parseInt((low + high) / 2);

  while (low <= high) {
    if (array[mid] === searchnumber) {
      return mid;
    } else if (array[mid] > searchnumber) {
      return binarySearch(array, low, mid + 1, searchnumber);
    } else {
      return binarySearch(array, mid + 1, high, searchnumber );
    }
  }
};

const array = sort([12, 24, 32, 45, 77]);
console.log(binarySearch(array, 0, array.length, 32));