// 18.   **********
//       ****  ****
//       ***    ***
//       **      **
//       *        *
//       *        *
//       **      **
//       ***    ***
//       ****  ****
//       **********

function pattern(n) {
  for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }

    for (let j = 0; j < 2 * (n - i); j++) {
      str += ' ';
    }

    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
  }

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += '*';
    }

    for (let j = 0; j < 2 * (n - i - 1); j++) {
      str += ' ';
    }

    for (let j = 0; j < i + 1; j++) {
      str += '*';
    }
    console.log(str);
  }
}

pattern(5);
