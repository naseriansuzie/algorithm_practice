/**
 * 어떤 위인전의 두 쪽수를 곱한 값 n을 받아 펼쳐진 두 쪽의 각각의 수를 배열로 리턴하시오.
 * 펼쳐진 두 쪽이 불가능한 경우 빈 배열을 리턴하시오.
 * 제한사항: 두 쪽수를 곱한 값 n은 항상 양의 정수로 존재
 */

function findPairingPages(n: number): number[] {
  // x * (x+1) = n
  // x * x <= n

  const leftPage = Math.floor(Math.sqrt(n));

  if (leftPage * (leftPage + 1) === n) {
    return [leftPage, leftPage + 1];
  }
  return [];

  // 근의 공식
  //   const leftPage = (-1 + Math.sqrt(Math.pow(1, 2) - (4 * 1 * (n * -1)))) / 2;
  //   if (Math.floor(leftPage) === leftPage) {
  //     return [leftPage, leftPage + 1];
  //   }
  //   return [];
}

console.log(findPairingPages(1056)); // [32, 33]
console.log(findPairingPages(420)); // [20, 21]
console.log(findPairingPages(1441200)); // [1200, 1201]
