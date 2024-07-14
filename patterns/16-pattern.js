// 16.           1
//             1   1
//           1   2   1
//         1   3   3   1
//       1   4   6   4   1

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n - i - 1; j++) {
      str += '  ';
    }

    let arr = [];

    if (i === 0) {
      arr.push(1);
    } else {
      let power = 11 ** i;
      arr = `${power}`.split('');
    }

    for (let k = 0; k < arr.length; k++) {
      str += `${arr[k]}   `;
    }
    console.log(str);
  }
}

pattern(5);
