/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.

- Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

- Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

- Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

 */

function backspaceCompare(s: string, t: string): boolean {
  function filterBackSpace(words: string) {
    return words
      .split('')
      .reduce((acc: string[], cur: string) => {
        if (cur === '#') {
          acc.splice(acc.length - 1, 1);
          return acc;
        }
        return acc.concat(cur);
      }, [])
      .join('');
  }

  return filterBackSpace(s) === filterBackSpace(t);
}

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a#c', 'b')); // false
