function catAndMouse(x, y, z) {
  const catADistance = Math.abs(z - x);
  const catBDistance = Math.abs(z - y);

  if (catADistance === catBDistance) {
    return 'Mouse C';
  } else if (catADistance > catBDistance) {
    return 'Cat B';
  } else {
    return 'Cat A';
  }
}

console.log('🚀 ~ file: CatsMouse.js', catAndMouse(1, 2, 3));
console.log('🚀 ~ file: CatsMouse.js', catAndMouse(1, 3, 2));
