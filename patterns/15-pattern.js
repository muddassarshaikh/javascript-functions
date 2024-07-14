// 15.      *
//         * *
//        *   *
//       *     *
//      *       *
//       *     *
//        *   *
//         * *
//          *

function pattern(num) {
  for (let i = 0; i < 2 * num - 1; i++) {
    let str = '';

    if (i < num) {
      for (let j = 0; j < num - i - 1; j++) {
        str += ' ';
      }

      for (let k = 0; k < 2 * i + 1; k++) {
        if (k === 0 || k === 2 * i) {
          str += '*';
        } else {
          str += ' ';
        }
      }
      console.log(str);
    } else {
      for (let j = 0; j <= i - num; j++) {
        str += ' ';
      }

      for (let k = 0; k < 2 * (2 * num - i) - 3; k++) {
        if (k === 0 || k === 2 * (2 * num - i) - 4) {
          str += '*';
        } else {
          str += ' ';
        }
      }
      console.log(str);
    }
  }
}

// Example usage:
pattern(6);
