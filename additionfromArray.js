// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSumMethod1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; i++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
  return null;
};

const twoSumMethod2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const remainingvalue = target - nums[i];
    const indexOf = nums.indexOf(remainingvalue);
    if (indexOf !== -1 && indexOf !== i) {
      return [i, nums.indexOf(remainingvalue)];
    }
  }
  return null;
};

const twoSumMethod3 = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

console.log('TCL: twoSum', twoSumMethod3([2, 7, 11, 15, 5], 9));
