// function betweenTwoSets(a, b) {
//   let potential = [],
//     final = [];
//   for (let i = a[a.length - 1]; i <= b[0]; i++) {
//     if (a.every((x) => i % x === 0)) {
//       potential.push(i);
//     }
//   }
//   for (let i = 0, len = potential.length; i < len; i++) {
//     if (b.every((x) => x % potential[i] === 0)) {
//       final.push(potential[i]);
//     }
//   }
//   return final.length;
// }

function betweenTwoSets(a, b) {
  let potential = [],
    final = [];
  for (let i = a[a.length - 1]; i <= b[0]; i = i + a[a.length - 1]) {
    if (a.every((x) => i % x === 0)) {
      potential.push(i);
    }
  }
  for (let i = 0; i < potential.length; i++) {
    if (b.every((x) => x % potential[i] === 0)) {
      final.push(potential[i]);
    }
  }
  return final.length;
}

console.log('🚀 ~ 1', betweenTwoSets([2, 6], [24, 36])); // 2
console.log('🚀 ~ 2', betweenTwoSets([2, 4], [16, 32, 96])); // 3
