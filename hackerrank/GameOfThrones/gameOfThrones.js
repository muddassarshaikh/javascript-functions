function gameOfThrones(s) {
  const hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashMap[s[i]]) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]] = hashMap[s[i]] + 1;
    }
  }

  let count = 0;
  const keys = Object.keys(hashMap);
  if (s.length % 2 === 0) {
    for (let i = 0; i < keys.length; i++) {
      if (!(hashMap[keys[i]] % 2 === 0)) {
        return 'No';
      }
    }
    return 'Yes';
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (!(hashMap[keys[i]] % 2 === 0)) {
        count++;
      }
    }

    if (count === 1) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}
console.log('gameOfThrones', gameOfThrones('aaabbbb'));
console.log('gameOfThrones', gameOfThrones('cdefghmnopqrstuvw'));
console.log('gameOfThrones', gameOfThrones('cdcdcdcdeeeef'));
