// 7.   * * * * *
//        * * * *
//          * * *
//            * *
//              *

function pattern(num) {
  for (let i = num; i > 0; i--) {
    let str = '';
    let counter = num - i - 1;
    for (j = 0; j < num; j++) {
      str += counter >= j ? '  ' : ' *';
    }
    console.log(str);
  }
}

pattern(5);
