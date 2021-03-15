function fibo(limit) {
  let num1 = 0;
  let num2 = 1;
  let ans = 0;
  while (num1 + num2 < limit) {
    ans = num1 + num2;
    console.log(ans);
    num1 = num2;
    num2 = ans;
  }
}
fibo(1000);
// 100
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
