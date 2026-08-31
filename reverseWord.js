function reverseWords() {
    let word = '';
    const reverseWordArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && word == '') {
            continue;
        } else if (s[i] === ' ' && word != '') {
            reverseWordArray.push(word.trim());
            word = '';
        } else {
            word += s[i];
        }

    }
    if (word.trim() !== '') {
        reverseWordArray.push(word.trim());
    }
    console.log(reverseWordArray)
    return reverseWordArray.reverse().join(' ');
}

let s = "a good   example";
console.log(reverseWords(s))