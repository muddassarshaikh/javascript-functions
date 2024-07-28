/* https://www.youtube.com/watch?v=5P84A0YCo_Y&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=10
 * Kth Symbol in Grammar
 */

function kthTerm(n, k) {
  if (n === 1 && k === 1) {
    return 0;
  }

  let mid = parseInt(2 ** (n - 1) / 2);
  if (k <= mid) {
    return kthTerm(n - 1, k);
  } else {
    return !kthTerm(n - 1, k - mid);
  }
}

console.log(kthTerm(4, 5));
