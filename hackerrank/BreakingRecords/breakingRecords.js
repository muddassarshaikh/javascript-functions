const breakingRecords = scores => {
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxScoreCount = 0;
  let minScoreCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (maxScore < scores[i]) {
      maxScore = scores[i];
      maxScoreCount++;
    }

    if (minScore > scores[i]) {
      minScore = scores[i];
      minScoreCount++;
    }
  }
  console.log('TCL: maxScoreCount', maxScoreCount);

  return [maxScoreCount, minScoreCount];
};
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
