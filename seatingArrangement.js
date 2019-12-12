/**
 * Seating Arrangement
 * You are given a row of seats.
 * Each seats is either occupied by a woman (denoted by xx) or man (denoted by xy).
 * The objective is to find minimum number of seat exchanges required
 * such that the men and women are seated alternately
 *
 * Sample Input
 * ['xx', 'xx', 'xx']
 * ['xx', 'xy']
 * ['xx', 'xx', 'xy', 'xy']
 * ['xx', 'xx', 'xy', 'xy', 'xy', 'xx', 'xx', 'xy']
 * ['xx', 'xy', 'xx', 'xy', 'xx', 'xy', 'xy']
 *
 * Sample Output
 * -1
 * 0
 * 1
 * 2
 * 3
 */

const seatingArrangement = arr => {
  const counts = {};
  arr.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  if (Math.abs(counts['xx'] - counts['xy']) > 1) {
    return -1;
  } else {
    let finalCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] !== arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            finalCount += 1;
            break;
          }
        }
      }
    }
    return finalCount;
  }
};

console.log(seatingArrangement(['xx', 'xx', 'xy', 'xy', 'xy', 'xx', 'xx', 'xy']));
