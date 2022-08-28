/**
 * 다음과 같이  "EEESEEEEEENNNN" 방향이 주어집니다. ( E: 동 N: 북, S: 남, W: 서 )
 * 방향 하나당 100M이며 1의 시간이 걸립니다.
 * 5번 이상 같은 방향으로 움직여야 된다고 판단될 시 100M씩은 내비게이션은 지시를 하지 않아도 됩니다.
 * 내비게이션이 알려줘야 할 메세지를 담은 배열을 리턴하시오.
 */

// N(0) 기준에서 left: W(3), right: E(1)
// E(1) 기준에서 left: N(0), right: S(2)
// S(2) 기준에서 left: E(1), right: W(3)
// W(3) 기준에서 left: S(2), right: N(0)

function getDirectionMessage(prevPoint: string, point: string, count: number, time: number) {
  const CARDINAL_POINTS = ['N', 'E', 'S', 'W'];
  const distance = count > 5 ? 5 : count;
  const prevIndex = CARDINAL_POINTS.indexOf(prevPoint);
  const changingIndex = CARDINAL_POINTS.indexOf(point);
  if ((prevIndex + 1) % 4 === changingIndex) {
    return `Time ${time}: Go straight ${distance * 100}m and turn right`;
  } else {
    return `Time ${time}: Go straight ${distance * 100}m and turn left`;
  }
}

function printNavigateDirectionMessages(directions: string): string[] {
  const answer: string[] = [],
    times = [0];
  let time = 1,
    cnt = 1,
    direction = directions[1];
  for (let i = 1; i < directions.length; i++) {
    if (direction === directions[i]) {
      cnt++;
      if (cnt > 5) {
        times.push(times.pop()! + 1);
      }
      time++;
    } else {
      times.push(time);
      answer.push(getDirectionMessage(direction, directions[i], cnt, times[times.length - 2]));
      direction = directions[i];
      cnt = 1;
      time++;
    }
  }
  return answer;
}

console.log(printNavigateDirectionMessages('EEESEEEEEENNNN')); // [ 'Time 0: Go straight 300m and turn right', 'Time 3: Go straight 100m and turn left', 'Time 5: Go straight 500m and turn left' ]
console.log(printNavigateDirectionMessages('SSSSSSWWWNNNNNN')); // [ 'Time 1: Go straight 500m and turn right', 'Time 6: Go straight 300m and turn right' ]
