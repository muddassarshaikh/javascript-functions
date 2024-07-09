// 13.      *
//         * *
//        *   *
//       *     *
//      *********

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';

    // Add leading spaces for the current row
    for (let j = 0; j < num - i - 1; j++) {
      str += ' ';
    }

    // Add stars and spaces in between
    for (let k = 0; k < 2 * i + 1; k++) {
      if (k === 0 || k === 2 * i || i === num - 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }

    console.log(str);
  }
}

// Example usage:
pattern(5);