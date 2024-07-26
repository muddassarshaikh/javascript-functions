// 31.      4 4 4 4 4 4 4
//          4 3 3 3 3 3 4
//          4 3 2 2 2 3 4
//          4 3 2 1 2 3 4
//          4 3 2 2 2 3 4
//          4 3 3 3 3 3 4
//          4 4 4 4 4 4 4

function pattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let str = '';

    for (let j = 0; j < 2 * n - 1; j++) {
      // Calculate the value based on the minimum distance to the edge
      const value = n - Math.min(Math.min(i, j), Math.min(2 * n - 2 - i, 2 * n - 2 - j));
      str += value + ' ';
    }

    console.log(str.trim());
  }
}

// Example usage:
pattern(4);
