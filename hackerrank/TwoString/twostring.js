function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      return 'YES';
    }
  }
  return 'NO';
}

console.log('twoStrings(s1, s2)', twoStrings('hello', 'world'));
console.log('twoStrings(s1, s2)', twoStrings('hi', 'world'));
