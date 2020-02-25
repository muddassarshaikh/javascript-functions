function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOrange = 0;
  apples = apples.map(item => {
    return a + item;
  });

  oranges = oranges.map(item => {
    return b + item;
  });

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] >= s && apples[i] <= t) {
      countApples++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] >= s && oranges[i] <= t) {
      countOrange++;
    }
  }

  return `${countApples} ${countOrange}`;
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
