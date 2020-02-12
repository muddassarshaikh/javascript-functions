// Prime Number Solution 1
const primeNumber = number => {
  let count = 0;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
      break;
    }
  }

  if (count > 0) {
    return 'Not Prime Number';
  }
  return 'Prime Number';
};

// Prime Number Solution 2
const primeNumber2 = number => {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 'Not Prime Number';
    }
  }
  return 'Prime Number';
};

const primeNumberUsingRecursion = (number, index, count) => {
  if (count > 0) {
    return 'Not Prime Number';
  } else if (number === index) {
    return 'Prime Number';
  } else if (number % index === 0) {
    count++;
    return primeNumberUsingRecursion(number, ++index, count);
  } else {
    return primeNumberUsingRecursion(number, ++index, count);
  }
};

console.log(primeNumber(403));
console.log(primeNumber2(29));
console.log(primeNumberUsingRecursion(7, 2, 0));
