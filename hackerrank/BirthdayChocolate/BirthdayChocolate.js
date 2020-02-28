const birthday = (s, d, m) => {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = 0;
    for (let j = 0; j < m; j++) {
      temp += s[i + j];
    }

    if (temp === d) {
      counter++;
    }
  }
  return counter;
};

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(
  birthday(
    [
      3,
      5,
      4,
      1,
      2,
      5,
      3,
      4,
      3,
      2,
      1,
      1,
      2,
      4,
      2,
      3,
      4,
      5,
      3,
      1,
      2,
      5,
      4,
      5,
      4,
      1,
      1,
      5,
      3,
      1,
      4,
      5,
      2,
      3,
      2,
      5,
      2,
      5,
      2,
      2,
      1,
      5,
      3,
      2,
      5,
      1,
      2,
      4,
      3,
      1,
      5,
      1,
      3,
      3,
      5
    ],
    18,
    6
  )
);
