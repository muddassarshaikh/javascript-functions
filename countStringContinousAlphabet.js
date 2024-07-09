// Write a well structured program to take below input and give the given output. make sure you cover all the edge cases.
// Input: sssmmmnnnAAAmmmmmaaaaAAAAA
// Output: s3 m3 n3 A3 m5 a4 A5

function countString(str) {
    if(!str) {
        return;
    }
    const strArr = str.split('');

    let count = 1;

    const ans = [];

    for(let i=0; i<strArr.length; i++) {
        if(strArr[i] == strArr[i+1]) {
            count++;
            continue;
        } else {
            ans.push(`${strArr[i]}${count}`);
            count = 1;
        }
    }
    return ans;
}

console.log(countString('sssmmmnnnAAAmmmmmaaaaAAAAA'));
console.log(countString('s'));
console.log(countString(null));