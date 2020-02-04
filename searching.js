/**
 * Linear Search
 */
const linearSearch = (array, index, searchnumber) => {
  if (array[index] === searchnumber) {
    return index;
  } else if (array.length <= index) {
    return 'Not Found';
  } else {
    return linearSearch(array, ++index, searchnumber);
  }
};
console.log(linearSearch([23, 54, 23, 44, 345, 7], 0, 44));

/**
 * Binary Search
 */
const sort = arr => {
  return arr.sort((a, b) => a - b);
};

const binarySearch = (array, low, high, searchnumber) => {
  if (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (array[mid] === searchnumber) {
      return mid;
    } else if (array[mid] > searchnumber) {
      return binarySearch(array, low, mid - 1, searchnumber);
    } else {
      return binarySearch(array, mid + 1, high, searchnumber);
    }
  } else {
    return 'Not found';
  }
};

const array = sort([12, 24, 32, 45, 77]);
console.log(binarySearch(array, 0, array.length, 45));
