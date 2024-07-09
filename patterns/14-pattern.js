// 14.  *********
//       *     *
//        *   *
//         * *
//          *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';

    // Add leading spaces for the current row
    for (let j = 0; j < i; j++) {
      str += ' ';
    }

    for (let k = 0; k < 2 * (num - i) - 1; k++) {
      if(i===0 || k===0 || k === 2*(num - i) -2) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

// Example usage:
pattern(6);