// 21.    1
//        2  3
//        4  5  6
//        7  8  9  10
//        11 12 13 14 15

function pattern(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += `${count++}  `;
    }
    console.log(str);
  }
}

pattern(5);
