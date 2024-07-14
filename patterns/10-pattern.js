// 10.      *
//         * *
//        * * *
//       * * * *
//      * * * * *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < num - i; j++) {
      str += ' ';
    }

    for (let k = 0; k <= i; k++) {
      str += '* ';
    }

    console.log(str);
  }
}

// Example usage:
pattern(5);
