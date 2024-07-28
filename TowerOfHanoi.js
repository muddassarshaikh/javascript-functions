// https://www.youtube.com/watch?v=l45md3RYX7c&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=12
// Tower Of Hanoi

function towerOfHanoi(source, dest, helper, n, count) {
  count++;
  if (n == 1) {
    console.log(`Move disk ${n} from ${source} to ${dest}`);
    return;
  }
  towerOfHanoi(source, helper, dest, n - 1, count);
  console.log(`Move disk ${n} from ${source} to ${dest}`);
  towerOfHanoi(helper, dest, source, n - 1, count);
  return count;
}

console.log('Total step required', towerOfHanoi('A', 'C', 'B', 3, 0));
