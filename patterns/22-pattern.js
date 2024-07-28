// 22.    1
//        0 1
//        1 0 1
//        0 1 0 1
//        1 0 1 0 1

function pattern(n) {
  let iCount = 1;
  for (let i = 0; i < n; i++) {
    let str = '';
    let jCount = iCount;
    for (let j = 0; j <= i; j++) {
      str += `${jCount} `;
      jCount = jCount === 1 ? 0 : 1;
    }
    console.log(str);
    iCount = iCount === 1 ? 0 : 1;
  }
}

pattern(5);


function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';

    // Add the alternating 1s and 0s
    for (let j = 0; j < i; j++) {
      str += (i + j) % 2 + ' ';
    }

    console.log(str.trim());
  }
}

printPattern(5);

