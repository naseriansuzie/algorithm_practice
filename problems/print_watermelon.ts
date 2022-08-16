/**
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
 - n은 길이 10,000이하인 자연수입니다.
 */

function printWatermelon(n: number): string {
  let answer = '';
  for (let cnt = Math.trunc(n / 2); cnt > 0; cnt--) {
    answer += '수박';
  }
  if (n % 2 !== 0) {
    answer = answer + '수';
  }
  return answer;
}

console.log(printWatermelon(3)); // "수박수"
console.log(printWatermelon(4)); // "수박수박"
