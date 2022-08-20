/**
 * 자연수를 받아 연속적인 숫자의 합이 자연수에 해당하는 경우의 수를 모두 계산하여 리턴하시오.
 * ex) 15
 * 1+2+3+4+5 조합
 * 4+5+6 조합
 * 7+8 조합
 * 15 조합
 * 총 4개의 경우의 수가 존재
 */

function getContinuousSumCount(n: number): number {
  if (n < 2) {
    return n;
  }

  let answer = 0,
    left = 0,
    sum = 1;

  const arr = Array.from({ length: n }, (v, i) => i + 1);

  for (let right = 1; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= n) {
      if (sum === n) {
        answer++;
      }
      sum -= arr[left];
      left++;
    }
  }

  return answer;
}

function getContinuousSumCount2(n: number): number {
  if (n < 2) {
    return n;
  }

  let answer = 1,
    left = 1,
    sum = 1;

  for (let right = 2; right < n; right++) {
    sum += right;
    while (sum >= n) {
      if (sum === n) {
        console.log('!!', left, right);
        answer++;
      }
      sum -= left;
      left++;
    }
  }

  return answer;
}

console.log(getContinuousSumCount(15)); // 1+2+3+4+5, 4+5+6, 7+8, 15 -> 4
console.log(getContinuousSumCount(5)); // 2+3, 5 -> 2
console.log(getContinuousSumCount(30)); // 4+5+6+7+8, 6+7+8+9, 9+10+11, 30 -> 4
console.log(getContinuousSumCount(55)); // 1+2+3+4+5+6+7+8+9+10, 9+10+11+12+13, 27+28, 55 -> 4
