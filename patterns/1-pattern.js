// 1.  * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < num; j++) {
      str += '* ';
    }
    console.log(str);
  }
}

pattern(5);
