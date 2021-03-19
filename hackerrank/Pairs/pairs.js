function pairs(k, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        counter++;
      }
    }
  }
  return counter;
}

// Optimize method
function pairs1(k, arr) {
  let counter = 0;
  let i = 0;
  let j = 0;

  arr.sort((a, b) => a - b);
  console.log('🚀 ~ file: pairs.js ~ line 15 ~ pairs1 ~ arr', arr);

  while (i < arr.length && j < arr.length) {
    if (arr[j] - arr[i] === k) {
      counter++;
      j++;
    } else if (arr[j] - arr[i] > k) {
      i++;
    } else {
      j++;
    }
  }
  return counter;
}

console.log('🚀 ~ file: pairs.js ~ line 3 ~ pairs', pairs1(2, [1, 5, 3, 4, 2]));
