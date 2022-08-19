/**
 * 문제 설명
길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다.
이때 필요한 작업의 최소 횟수를 구하고자 합니다. 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주합니다.

큐는 먼저 집어넣은 원소가 먼저 나오는 구조입니다.
이 문제에서는 큐를 배열로 표현하며, 원소가 배열 앞쪽에 있을수록 먼저 집어넣은 원소임을 의미합니다.
즉, pop을 하면 배열의 첫 번째 원소가 추출되며, insert를 하면 배열의 끝에 원소가 추가됩니다.
예를 들어 큐 [1, 2, 3, 4]가 주어졌을 때, pop을 하면 맨 앞에 있는 원소 1이 추출되어 [2, 3, 4]가 되며, 이어서 5를 insert하면 [2, 3, 4, 5]가 됩니다.

다음은 두 큐를 나타내는 예시입니다.
queue1 = [3, 2, 7, 2]
queue2 = [4, 6, 5, 1]
두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 예를 들어, 다음과 같이 2가지 방법이 있습니다.

queue2의 4, 6, 5를 순서대로 추출하여 queue1에 추가한 뒤, queue1의 3, 2, 7, 2를 순서대로 추출하여 queue2에 추가합니다.
그 결과 queue1은 [4, 6, 5], queue2는 [1, 3, 2, 7, 2]가 되며, 각 큐의 원소 합은 15로 같습니다.
이 방법은 작업을 7번 수행합니다.
queue1에서 3을 추출하여 queue2에 추가합니다.
그리고 queue2에서 4를 추출하여 queue1에 추가합니다.
그 결과 queue1은 [2, 7, 2, 4], queue2는 [6, 5, 1, 3]가 되며, 각 큐의 원소 합은 15로 같습니다.
이 방법은 작업을 2번만 수행하며, 이보다 적은 횟수로 목표를 달성할 수 없습니다.
따라서 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수는 2입니다.

길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다.
각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요.
단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.

* 제한사항
  - 1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000
  - 1 ≤ queue1의 원소, queue2의 원소 ≤ 109
  - 주의: 언어에 따라 합 계산 과정 중 산술 오버플로우 발생 가능성이 있으므로 long type 고려가 필요합니다.
 */

function makeAverageSum(queue1: number[], queue2: number[]): number {
  // queue1와 queue2의 합을 구한다
  let count = 0,
    _queue1 = queue1.slice(),
    _queue2 = queue2.slice(),
    queue1Sum = _queue1.reduce((acc, cur) => acc + cur, 0),
    queue2Sum = _queue2.reduce((acc, cur) => acc + cur, 0);

  const targetSum = (queue1Sum + queue2Sum) / 2;

  // 어느 한쪽 큐가 빈 칸이 되면 반복을 멈추게 하고
  // queue1합과 queue2합이 같으면 카운트 바로 리턴
  // queue1합이 > queue2합인 경우는 queue1.shift를 queue2.push 하고 카운트 올림
  // queue1합이 < queue2합인 경우는 queue2.shift를 queue1.push 하고 카운트 올림
  // 다 끝났는데 아직도 합이 안 맞으면 -1 리턴

  while (_queue1.length > 0 && _queue2.length > 0) {
    if (queue1Sum === targetSum) {
      return count;
    } else if (queue1Sum > targetSum) {
      const movingNum = _queue1.shift();
      _queue2.push(movingNum!);
      count++;
      queue1Sum -= movingNum!;
      queue2Sum += movingNum!;
    } else if (queue1Sum < targetSum) {
      const movingNum = _queue2.shift();
      _queue1.push(movingNum!);
      count++;
      queue1Sum += movingNum!;
      queue2Sum -= movingNum!;
    }
  }
  return -1;
}

console.log(makeAverageSum([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(makeAverageSum([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(makeAverageSum([1, 1], [1, 5])); // -1
