// 12.  * * * * *
//       * * * *
//        * * *
//         * *
//          *
//          *
//         * *
//        * * *
//       * * * *
//      * * * * *

function pattern(num) {
  for (let i = 0; i < 2*num; i++) {
    let str = '';
    let counter = i >= num ? i - num : num - i - 1;
    let spaceCounter = i < num ? i : 2*num-i-1;

    for (let j = 0; j < spaceCounter; j++) {
      str += ' ';
    }

    for (let k = 0; k <= counter; k++) {
      str += '* ';
    }
    
    console.log(str);
  }
}

// Example usage:
pattern(5);
