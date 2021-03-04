function lonelyinteger(a) {
  const obj = {};
  const arr = [];

  for (let i = 0; i < a.length; i++) {
    if (!obj[a[i]]) {
      obj[a[i]] = 1;
    } else {
      obj[a[i]] += 1;
    }
  }

  for (key in obj) {
    if (obj[key] == 1) {
      arr.push(key);
    }
  }

  return arr.join(' ');
}

function lonelyinteger1(a) {
  let unique = a.filter(function (value) {
    return a.indexOf(value) === a.lastIndexOf(value);
  });
  return unique;
}

console.log(lonelyinteger1([1, 1, 2, 3]));
