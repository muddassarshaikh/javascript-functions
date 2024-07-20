// 35.    1      1
//        12    21
//        123  321
//        12344321

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += `${j + 1}`;
    }
    for (let j = 0; j < 2 * (n - i) - 2; j++) {
      str += ' ';
    }
    for (let j = i + 1; j > 0; j--) {
      str += `${j}`;
    }
    console.log(str);
  }
}

pattern(6);
