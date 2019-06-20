const arrayLength = (array, count = 0) => {
  if (array[count] == undefined) {
    return count;
  } else {
    return arrayLength(array, ++count);
  }
};

const array = [1, 2, 3, 4, 5, 6, 10];

console.log(arrayLength(array, 0));
