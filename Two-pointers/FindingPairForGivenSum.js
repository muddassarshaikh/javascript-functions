// Finding a Pair with a Given Sum

// Question: Given an array of integers arr and a target sum target, return indices of the two numbers such that they add up to target.

// Example:
// Input: arr = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because arr[0] + arr[1] = 2 + 7 = 9, we return [0, 1].

function findingPairGivenSum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return null; // Return null if no pair is found
}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(findingPairGivenSum(arr, target)); // Output: [0, 1]