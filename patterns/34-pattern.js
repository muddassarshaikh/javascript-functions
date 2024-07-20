// 34.    E D C B A
//        D C B A
//        C B A
//        B A
//        A

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let char = 'A'.charCodeAt() + n - i - 1;
    for (let j = 0; j < n - i; j++) {
      str += String.fromCharCode(char - j) + ' ';
    }
    console.log(str);
  }
}

pattern(5);
