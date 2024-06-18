// Get all pyhtogorean inside given number i.e a2 + b2 = c2

function pythogoreanTriplet(num) {
    const square = {};
    const keyPair = {};

    for(let i=1; i<=num; i++) {
        square[i] = i*i;
        keyPair[i*i] = i;
    }

    const ans=[];

    for(let j=1; j<=num; j++) {
        for(let k=1; k<=num; k++) {
            if(keyPair[square[j] + square[k]] && j < k) {
                ans.push(`${j} ${k} ${keyPair[square[j] + square[k]]}`);
            }
        }
    }
    return ans;
}

console.log(pythogoreanTriplet(10));