// 30.         1
//           2 1 2
//         3 2 1 2 3
//       4 3 2 1 2 3 4
//     5 4 3 2 1 2 3 4 5

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n - i; j++) {
      str += '  ';
    }

    for (let j = i; j >= 0; j--) {
      str += `${j + 1} `;
    }

    for (let j = 1; j <= i; j++) {
      str += `${j + 1} `;
    }

    console.log(str);
  }
}

// Example usage:
pattern(5);
