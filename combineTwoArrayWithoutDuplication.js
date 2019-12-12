const arr = [1, 2];
const arr1 = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  const arrIndex = arr1.findIndex(element => element === arr[i]);
  arr1[arrIndex] = '4';
  console.log('TCL: arrIndex', arr1);
}
