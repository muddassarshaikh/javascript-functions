// Minimum Window Substring

// Question: Given two strings s1 and s2, find the minimum window in s1 which will contain all characters of s2.

// Example:

// Input: s1 = "ADOBECODEBANC", s2 = "ABC"
// Output: "BANC"
// Explanation: The minimum window in s1 that contains all characters of s2 is "BANC".

function minWindow(s1, s2) {
  if (!s2 || !s1 || s2.length > s1.length) {
    return "";
  }

  // Target character count map
  const targetMap = new Map();
  for (const char of s2) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(targetMap).length;
  let formed = 0;
  const windowCounts = new Map();
  
  let minLength = Infinity;
  let resultStart = 0;

  while (right < s1.length) {
    const rightChar = s1[right];
    
    // Add the character at 'right' to the window
    if (targetMap.has(rightChar)) {
      windowCounts.set(rightChar, (windowCounts.get(rightChar) || 0) + 1);
      if (windowCounts.get(rightChar) === targetMap.get(rightChar)) {
        formed++;
      }
    }

    // Try to contract the window from the left
    while (left <= right && formed === required) {
      // Update minimum window size found so far
      const currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        resultStart = left;
      }

      const leftChar = s1[left];
      
      // Remove the character at 'left'
      if (targetMap.has(leftChar)) {
        windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
        if (windowCounts.get(leftChar) < targetMap.get(leftChar)) {
          formed--;
        }
      }
      
      left++;
    }

    right++;
  }

  return minLength === Infinity ? "" : s1.substring(resultStart, resultStart + minLength);
}

const s1 = "ADOBECODEBANC";
const s2 = "ABC";
console.log(minWindow(s1, s2)); // Output: "BANC" 