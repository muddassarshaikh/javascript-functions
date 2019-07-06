const primeNumber = (number) => {
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
}

console.log(primeNumber(17));