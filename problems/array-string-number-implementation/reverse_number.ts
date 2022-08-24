/**
 * 문자열 형태의 정수를 입력 받아 뒤집어진 형태의 숫자를 리턴
 */

function reverseNumber(str: string): number {
  // 음의 정수 대응
  if (str.startsWith('-')) {
    return Number(str.slice(1).split('').reverse().join('')) * -1;
  }

  return Number(str.split('').reverse().join(''));
}

console.log(reverseNumber('1234')); // 4321
console.log(reverseNumber('-1023')); // -3201
console.log(reverseNumber('0122')); // 2210
