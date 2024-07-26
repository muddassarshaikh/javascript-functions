// 32.    E
//        D E
//        C D E
//        B C D E
//        A B C D E

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let char = 'E'.charCodeAt() - i;
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(char + j) + ' ';
    }
    console.log(str);
  }
}

pattern(5);
