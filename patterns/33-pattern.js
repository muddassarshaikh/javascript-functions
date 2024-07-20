// 33.    a
//        B c
//        D e F
//        g H i J
//        k L m N o

function pattern(n) {
  let count = 1;
  let char = 'a'.charCodeAt();
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      if (count % 2 === 0) {
        str += String.fromCharCode(char).toUpperCase() + ' ';
      } else {
        str += String.fromCharCode(char).toLowerCase() + ' ';
      }
      char++;
      count++;
    }
    console.log(str);
  }
}

pattern(5);
