// Remove All Adjacent Duplicates in String

// Question: Given a string s, remove all adjacent duplicates in it.

// Example:
// Input: s = "abbaca"
// Output: "ca"
// Explanation: Remove all adjacent duplicates to get "ca".

function removeAdjacentDuplicates(s) {
    const stack =[];
    stack.push(s[0]);

    for(let i=1; i<s.length; i++) {
        if(s[i] === stack[stack.length-1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
} 
const s = "abbaca";
const result = removeAdjacentDuplicates(s);
console.log(result); // Output: "ca"