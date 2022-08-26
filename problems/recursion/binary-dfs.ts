function printBinaryDigit(n: number): string {
  let answer = '';

  function DFS(n: number) {
    if (n === 0) {
      return;
    } else {
      DFS(Math.floor(n / 2));
      answer += String(n % 2);
    }
  }

  DFS(n);
  return answer;
}

console.log(printBinaryDigit(9)); // 1001
