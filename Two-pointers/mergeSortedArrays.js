// Merge Sorted Arrays

// Question: Given two sorted arrays arr1 and arr2, merge them into a single sorted array.

// Example:
// Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: Merge the two sorted arrays to get [1, 2, 3, 4, 5, 6].

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  for (let k = 0; k < arr1.length + arr2.length; k++) {
    if (i < arr1.length && (j >= arr2.length || arr1[i] <= arr2[j])) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]