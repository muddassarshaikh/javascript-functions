// Removing Duplicates from Sorted Array

// Question: Given a sorted array arr, remove the duplicates in-place and return the new length.

// Example:
// Input: arr = [1, 1, 2, 2, 3]
// Output: 3, arr = [1, 2, 3]
// Explanation: After removing duplicates, arr = [1, 2, 3] and the new length is 3.

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let uniqueIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  return uniqueIndex + 1; // Return the new length of the array
}

const arr = [1, 1, 2, 2, 3];
const newLength = removeDuplicates(arr);
console.log(newLength);