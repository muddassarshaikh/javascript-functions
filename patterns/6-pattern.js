// 6.           *
//            * *
//          * * *
//        * * * *
//      * * * * *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    let counter = num - i - 1;
    for (j = 0; j < num; j++) {
      str += counter <= j ? '* ' : '  ';
    }
    console.log(str);
  }
}

pattern(5);
