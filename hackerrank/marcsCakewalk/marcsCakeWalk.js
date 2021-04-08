function marcsCakewalk(calorie) {
  calorie.sort((a, b) => b - a);
  const calculate = (accumulator, currentValue, index) => accumulator + 2 ** index * currentValue;
  return calorie.reduce(calculate);
}

console.log('marcsCakewalk(calorie)', marcsCakewalk([7, 4, 9, 6]));
