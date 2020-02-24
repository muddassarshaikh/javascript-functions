/**
 * River Records
 * A meterologist maintains a record of water level readings taken on a nearby river.
 * Initially, there was an average level that is considered to be level 0.
 * Subsequent readings show the height in millimeters above or below that zero level, at regular intervals.
 * One of the figures to determine is the maximum height above a previously recorded value that has been achieved to date.
 * Given the complete array of records collected, any prior reading, the trailing record. If there is never a lower prior reading, return -1.
 *
 * Example 1
 * levels = [5, 3, 6, 7, 4]
 * There are no earlier readings than levels[0].
 * There are two lower earlier readings with a value lower than levels[2] = 6
 * levels[2] - levels[1] = 6 - 3 = 3
 * levels[2] - levels[0] = 6 - 5 = 1
 * There are three lower earlier readings with a lower value than levels[3] = 7
 * levels[3] - levels[2] = 7 - 6 = 1
 * levels[3] - levels[1] = 7 - 3 = 4
 * levels[3] - levels[0] = 7 - 5 = 2
 * There is one lower earlier reading with a lower value than arr[4] = 4
 * levels[4] - levels[1] = 4 - 3 = 1
 * The maximum trailing record is levels[3] - levels[1] = 4.
 *
 * Example 2
 * levels = [4, 3, 2, 1]
 * No item in levels has a lower earlier reading, therefore return -1
 *
 * Function Description
 * Complete the function maximumTrailing in the editor below.
 *
 * maximumTrailing has the following parameters:
 * int levels[n]: an array of integers
 * Returns:
 * int: an integer that represents the maximum trailing record, or -1 if no element in levels has a lower earlier reading
 *
 * Constraints
 * 1<=n<=2*10^5
 * -10^6 <= levels[i] <= 10^6 and 0 <= i < n
 *  in the editor below.
 *
 *
 */

const maximumTrailing = arr => {
  let min = 0;
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] && maxIndex > i) {
      min = arr[i];
    }
    if (max < arr[i]) {
      maxIndex = i;
      max = arr[i];
    }
  }

  if (min === 0) {
    return -1;
  }

  return max - min;
};

console.log(maximumTrailing([2, 3, 10, 2, 4, 8, 1]));
