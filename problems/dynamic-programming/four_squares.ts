function getMinimumSumCount(n: number): number {
  // index가 숫자, 숫자별 최소로 제곱 수의 더한 횟수를 담아둔다
  const DP: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    let val = Number.MAX_SAFE_INTEGER,
      j = 1;

    // 1에서부터 제곱 수가 i보다 작을 때까지 반복해서 확인
    while (Math.pow(j, 2) <= i) {
      // i에서 j의 제곱을 뺀 숫자가 되기 위해서 최소로 제곱 수를 더한 횟수를 가져 온다
      // why min? j로 제곱수를 만들고 나머지 값을 체크하는 조합이 여러개이므로 이 때 최소 더한 횟수를 구해야 함
      val = Math.min(val, DP[i - Math.pow(j, 2)]);
      j++;
    }
    DP.push(val + 1);
  }

  return DP[n];
}

getMinimumSumCount(12); // 2**2 + 2**2 + 2**2 총 3회 제곱 수를 더함 -> 3
getMinimumSumCount(13); // 2**2 + 2**2 + 2**2 + 1**1 총 4회 제곱 수를 더함 -> 4
