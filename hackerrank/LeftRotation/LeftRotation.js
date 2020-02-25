const LeftRotation = (arr, n) => {
  const newArr = [];

  const newIndex = Math.abs((arr.length - n) % arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr[(i + newIndex) % arr.length] = arr[i];
  }
  return newArr.join(' ');
};

console.log(LeftRotation([1, 2, 3, 4, 5], 4));
