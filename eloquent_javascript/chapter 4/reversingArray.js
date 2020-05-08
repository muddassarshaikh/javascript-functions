/**
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray , takes an array as argumentvand produces a new array
 * that has the same elements in the inverse order.
 * The second, reverseArrayInPlace , does what the reverse method does: it modifies
 * the array given as argument by reversing its elements. Neither may use the standard reverse method.
 */

const reverseArray = (arr) => {
  const newArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
