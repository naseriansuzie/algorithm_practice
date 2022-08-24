/**
 * 총 경기 수와 누적 승리 수를 전달 받아 현재 승률에서 1%를 높이기 위해 몇 번의 승리를 더 거두어야 하는지 리턴하시오.
 * 1%를 높일 수 없는 경우에는 'X'를 리턴하시오.
 */

function getWinningCount(totalGames: number, winningGames: number) {
  const currentRate = (winningGames / totalGames) * 100;
  const targetRate = Math.floor(currentRate) + 1;

  let winningCount = 0;

  // 0 ~ 현재 경기 수 차만큼 범위로
  // 총 경기 수와 누적 승리수를 1씩 올려가면서 1%p 올라간 타겟 승률을 찾아낸다
  while (winningCount <= totalGames - winningGames) {
    if (
      targetRate === Math.floor(((winningGames + winningCount) / (totalGames + winningCount)) * 100)
    ) {
      break;
    } else {
      winningCount++;
    }
  }
  console.log(winningCount > totalGames - winningGames ? 'X' : winningCount);

  if (winningCount > totalGames - winningGames) {
    return 'X';
  }
  return winningCount;
}

console.log(getWinningCount(100, 80)); // 6
console.log(getWinningCount(888, 887)); // 'X'
