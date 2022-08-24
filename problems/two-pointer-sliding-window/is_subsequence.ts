/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 */

function isSubsequence(s: string, t: String): boolean {
  if (s.toLowerCase() !== s || t.toLowerCase() !== t) {
    throw new Error('check your paramters are string types');
  }

  if (s.length === 0) {
    return true;
  }

  let compareLetter = t;
  let result = false;

  for (let index = 0; index < s.length; index++) {
    const sameLetterIndex = compareLetter.indexOf(s[index]);
    if (sameLetterIndex >= 0) {
      compareLetter = compareLetter.slice(sameLetterIndex + 1);
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
