/**
 * You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:
 *  - The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
 *  - The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
 * Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.
 */

function canChange(start: string, target: string): boolean {
  let l = 0,
    r = 0;

  while (l < start.length || r < target.length) {
    while (l < start.length && start[l] === '_') {
      l++;
    }

    while (r < target.length && target[r] === '_') {
      r++;
    }

    if (start[l] !== target[r] || (start[l] === 'L' && l < r) || (start[l] === 'R' && r < l)) {
      return false;
    }

    l++;
    r++;
  }

  return true;
}

console.log(canChange('_L__R__R_', 'L______RR')); // true
console.log(canChange('__L__R__R__', 'L________RR')); // true
console.log(canChange('R_L_', '__LR')); // false
console.log(canChange('_R', 'R_')); // false
