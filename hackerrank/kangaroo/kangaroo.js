function kangaroo(x1, v1, x2, v2) {
  if (x2 > x1 || v2 > v1) {
    while (!(x2 > x1 && v2 > v1)) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
        return 'YES';
      }
    }
  } else {
    while (!(x2 < x1 && v2 < v1)) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
        return 'YES';
      }
    }
  }

  return 'NO';
}

function kangaroo2(x1, v1, x2, v2) {
  if ((x2 > x1 && v2 >= v1) || (x1 > x2 && v1 >= v2)) {
    return 'NO';
  } else {
    while (!(x2 <= x1 && v2 <= v1) && !(x1 <= x2 && v1 < v2)) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
        return 'YES';
      }
    }
  }
  return 'NO';
}

console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 3, 4, 2));

console.log(kangaroo2(0, 2, 5, 3));
console.log(kangaroo2(0, 3, 4, 2));
