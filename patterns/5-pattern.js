// 5.  *
//     * *
//     * * *
//     * * * *
//     * * * * *
//     * * * *
//     * * *
//     * *
//     *
function pattern(num) {
  for (let i = 0; i <= 2 * num - 1; i++) {
    let str = '';
    let counter = i < num ? i : 2 * (num - 1) - i;
    for (let j = 0; j <= counter; j++) {
      str += '* ';
    }
    console.log(str);
  }
}

pattern(5);