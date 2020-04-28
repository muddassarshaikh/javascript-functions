function pageCount(n, p) {
  p = p % 2 === 0 ? p + 1 : p;
  n = n % 2 === 0 ? n + 1 : n;
  return Math.abs(p - n) / 2 < Math.abs(p - 1) / 2 ? Math.abs(p - n) / 2 : Math.abs(p - 1) / 2;
}

console.log(pageCount(6, 2));
console.log(pageCount(3, 11));
console.log(pageCount(5, 4));
console.log(pageCount(2, 3));
console.log(pageCount(3, 2));
console.log(pageCount(3, 4));
