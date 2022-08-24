/**
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
  - s는 길이가 1 이상, 100이하인 스트링입니다.
 */

function findMiddleLetter(s: string): string {
  if (s.length % 2 !== 0) {
    const idx = Math.floor(s.length / 2);
    return s[idx];
  } else {
    const idx = s.length / 2 - 1;
    return s[idx] + s[idx + 1];
  }
}

console.log(findMiddleLetter('abcde')); // 'c
console.log(findMiddleLetter('qwer')); // 'we
