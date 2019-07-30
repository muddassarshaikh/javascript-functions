const arr = [10, 20, 30, 40, 50];

/**
 * Slice
 * Note --
 * 1) The Slice method takes 2 arguments.
 * 2) 1st Argument: Specifies from where the selection should be started.
 * 3) 2nd Argument: Specifies at which level the endpoint should be.
 * If you didn’t put this in the parenthesis while calling the slice method,
 * it will return the elements from the starting index to the end of the array.
 * 3) If you put a negative number while calling,
 * the selection will be selected from the end of the array.
 * 4) Slice always returns the selected elements from the array.
 * 5) Slice won’t change the array. The array remains intact
 */

arr.slice(-2);
arr.slice(1, 5);
const arr1 = arr.slice(-2);
console.log('TCL: arr2', arr1);
console.log('TCL: arr1', arr);

/**
 * Splice
 * Note --
 * 1) The Splice method takes 3 arguments.
 * 2) 1st Argument: Specifies from where the selection should be started.
 * 3) 2nd Argument: Specifies at which level the endpoint should be.
 * If you didn’t put this in the parenthesis while calling the splice method,
 * it will return the elements from the starting index to the end of the array.
 * 3) If you put a negative number while calling,
 * the selection will be selected from the end of the array.
 * 4) Splice always returns the selected elements from the array.
 * 5) Splice change the array. It remove the element from the original array
 * 6) 3rd Argument: If you want to add new element to the array
 */

const array = [10, 20, 30, 40, 50];
console.log(array.splice(0, 1, 'Hi'));
console.log(array.splice(-2));
console.log(array.splice(1));
console.log('TCL: array', array);
