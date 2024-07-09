// 9.  * * * * * * * * * 
//       * * * * * * * 
//         * * * * *
//          * * * 
//            *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '  ';
    }

    for (let k = 0; k < 2 * (num - i) - 1; k++) {
      str += '* ';
    }
    
    console.log(str);
  }
}

// Example usage:
pattern(5);
