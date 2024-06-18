// Increment Number by ONE

function increment(number) {
  let returnString = number;
  let carry = 0;
  let addition = 0;

  for (let i = returnString.length - 1; i >= 0; i--) {
    if (carry == 1) {
      addition = (+returnString[i] + 1) % 10;
      returnString =
        returnString.substring(0, i) +
        addition +
        returnString.substring(i + 1, returnString.length);
      if (addition > 0) {
        return returnString;
      } else {
        continue;
      }
    }

    if (returnString[i] == '9') {
      returnString =
        returnString.substring(0, i) + '0' + returnString.substring(i + 1, returnString.length);

      carry = 1;
    } else {
      let addition = +returnString[i] + 1;
      returnString = returnString.substring(0, i) + addition + returnString.substring(i + 1);
      return returnString;
    }
  }

  return carry + returnString;
}

console.log('🚀 ~ file: demo.js ~ line 24 ~ increment()', increment('1239999'));

function addZeroToString(str1, str2) {
  while (str1.length > str2.length) {
    str2 = '0' + str2;
  }
  return str2;
}

function addTwoBigNumbers(a, b) {
  if (a.length > b.length) {
    b = addZeroToString(a, b);
  } else {
    a = addZeroToString(b, a);
  }
  a1 = a.split('');
  b1 = b.split('');
  let sum = 0;
  let carry = 0;
  let array = [];
  for (var i = a1.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + parseInt(carry);
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    array.push(sum);
  }
  console.log(array.reverse().join(''));
  return array.join('');
}

console.log(
  "🚀 ~ file: bigNumber.js ~ line 72 ~ addTwoBugNumbers('12312312312312312312312312312312123', '1')",
  addTwoBigNumbers('12312312312312312312312312312312123', '1')
);
