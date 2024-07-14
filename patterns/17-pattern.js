// 17.      1
//         212
//        32123
//       4321234
//        32123
//         212
//          1

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }

    for (let k = -i; k <= i; k++) {
      if (k < 0) {
        str += Math.abs(k - 1);
      } else {
        str += k + 1;
      }
    }
    console.log(str);
  }

  for (let i = n - 1; i > 0; i--) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += ' ';
    }

    for (let k = -i; k < i - 1; k++) {
      if (k < 0) {
        str += Math.abs(k);
      } else {
        str += k + 2;
      }
    }
    console.log(str);
  }
}

pattern(4);
