// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

function isAnagram(s, t) {
    if (s.length != t.length) {
        return false
    }

    const sHashMap = {}
    const tHashMap = {}

    for (let i = 0; i < s.length; i++) {
        if (sHashMap[s[i]]) {
            sHashMap[s[i]] += 1
        } else {
            sHashMap[s[i]] = 1
        }

         if (tHashMap[t[i]]) {
            tHashMap[t[i]] += 1
        } else {
            tHashMap[t[i]] = 1
        }
    }

    for (let k = 0; k < s.length; k++) {
        if (tHashMap[t[k]] !== sHashMap[t[k]]) {
            return false;
         }
    }
    return true;
};