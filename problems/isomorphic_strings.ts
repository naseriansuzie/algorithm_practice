/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 
Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */

function isIsomorphic(s: string, t: string): boolean {
  const isomorphicMap = new Map();
  let result = true;

  if (s.length === 1) {
    return true;
  }

  // 첫번째는 무조건 맵에 저장
  isomorphicMap.set(s[0], t[0]);

  for (let i = 1; i <= s.length - 1; i++) {
    // 두번째부터는 조건에 따라서 저장 하거나 result 변경
    // 이미 맵에 등록된 동형소가 있고, 그것이 비교문자와 다를 때 false를 리턴하고 멈춰야 한다
    // 이미 맵에 등록된 동형소가 있고, 그것이 비교문자와 같으면 별 작업이 없어야 한다
    // 맵에 동형소가 없는 상태라면, 맵에 등록할 문자가 다른 동형소로 등록되어 있는지 확인
    // 다른 동형소이면 false를 리턴하고 멈춰야 한다
    // 맵에는 없는 동형소이면 등록한다
    const mappedValue = isomorphicMap.get(s[i]);
    if (mappedValue && t[i] !== mappedValue) {
      result = false;
      break;
    } else if (!mappedValue) {
      isomorphicMap.forEach((val, key) => {
        if (val === t[i]) {
          result = false;
        }
      });
      if (!result) {
        return result;
      } else {
        isomorphicMap.set(s[i], t[i]);
      }
    }
  }
  return result;
}

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
