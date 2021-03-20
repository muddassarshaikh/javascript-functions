function gradingStudents(grades) {
  // Write your code here
  const result = grades.map((element) => {
    const number = element % 5;

    if (5 - number < 3 && element >= 38) {
      return element + 5 - number;
    } else {
      return element;
    }
  });

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
