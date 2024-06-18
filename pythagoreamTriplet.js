// Get all pyhtogorean inside given number i.e a2 + b2 = c2

function pyhtogoreanTriplet(num) {
    const square = {};
    const keyPair = {};

    for(let i=1; i<=num; i++) {
        square[i] = i*i;
    }

    for(let i=1; i<=num; i++) {
        keyPair[i*i] = i;
    }

    const ans=[];

    for(let j=1; j<=num; j++) {
        for(let k=0; k<=num; k++) {
            if(keyPair[square[j] + square[k]] && j < k) {
                ans.push(`${j} ${k} ${keyPair[square[j] + square[k]]}`);
            }
        }
    }

    return ans;
}

console.log(pyhtogoreanTriplet(10));