const arr = ['a1', 'a2', 'a3', 'a4'];

const value = arr.reduce((prev, curr) => {
  return curr === 'a2' ? curr : prev;
}, 0);

console.log('TCL: value', value);
