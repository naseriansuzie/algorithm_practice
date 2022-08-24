/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4x.
 *
 * Constraints:-2**31 <= n <= 2**31 - 1
 */

function isPowerOfFour(n: number): boolean {
  let number = n;
  while (number > 3) {
    if (number % 4 === 0) {
      number = number / 4;
    } else {
      return false;
    }
  }
  if (number === 1) {
    return true;
  }
  return false;
}

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
