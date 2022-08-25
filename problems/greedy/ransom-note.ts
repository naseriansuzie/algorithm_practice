/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Constraints:
 *   - 1 <= ransomNote.length, magazine.length <= 10**5
 *   - ransomNote and magazine consist of lowercase English letters.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  let _magazine = magazine.slice();
  for (let i = 0; i < ransomNote.length; i++) {
    if (_magazine.includes(ransomNote[i])) {
      _magazine = _magazine.replace(ransomNote[i], '');
    } else {
      return false;
    }
  }
  return true;
}

function canConstruct2(ransomNote: string, magazine: string): boolean {
  const map: Map<string, number> = new Map();
  for (let el of magazine) {
    if (map.has(el)) {
      map.set(el, map.get(el)! + 1);
    } else {
      map.set(el, 1);
    }
  }

  for (let letter of ransomNote) {
    if (!map.has(letter)) {
      return false;
    } else {
      if (map.get(letter)! - 1 === 0) {
        map.delete(letter);
      } else {
        map.set(letter, map.get(letter)! - 1);
      }
    }
  }
  return true;
}

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
console.log(canConstruct('z', 'z')); // true
