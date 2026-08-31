// Partition Array Around a Pivot

// Question: Given an array arr and a pivot value pivot, partition the array such that all elements less 
// than the pivot come before the pivot, and all elements greater than the pivot come after the pivot.

// Example:

// Input: arr = [3, 8, 6, 7, 2, 1, 9, 0, 12], pivot = 7
// Output: [3, 2, 1, 6, 7, 8, 9, 0, 12]
// Explanation: Partition the array around the pivot 7.


function partitionPivot(arr, pivot) {
  let left = 0;
  let right = arr.length - 1; 

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

function partitionPivot(arr, pivot) {
  let left = 0;
  let right = arr.length - 1; 

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

const arr = [3, 8, 6, 7, 2, 1, 9, 0, 12];
const pivot = 7;
console.log(partitionPivot(arr, pivot)); // Output: [3, 2, 1, 6, 7, 8, 9, 0, 12]


// Partition Array Around a Pivot

// Question: Given an array arr and a pivot value pivot, partition the array such that all elements less 
// than the pivot come before the pivot, and all elements greater than the pivot come after the pivot.

// Example:

// Input: arr = [3, 8, 6, 7, 2, 1, 9, 0, 12], pivot = 7
// Output: [3, 2, 1, 6, 7, 8, 9, 0, 12]
// Explanation: Partition the array around the pivot 7.


function partitionPivot1(arr, pivot) {
  let i=0;
  let j= arr.length - 1;

  while(i <= arr.indexOf(pivot) && j >= arr.indexOf(pivot)) {
    console.log(arr);
    if(arr[i] < pivot) {
      i++;
    } else {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

const arr = [3, 8, 6, 7, 2, 1, 9, 0, 12];
const pivot = 7;
console.log(partitionPivot1(arr, pivot)); // Output: [3, 2, 1, 6, 7, 8, 9, 0, 12]