// 4.  1
//     1 2
//     1 2 3
//     1 2 3 4
//     1 2 3 4 5

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += `${j + 1} `;
    }
    console.log(str);
  }
}

pattern(5);
