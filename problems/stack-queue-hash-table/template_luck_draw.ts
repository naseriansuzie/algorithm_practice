/**
 * 행사 참석자들은 고유 번호(숫자)를 가지고 행운권 추첨에 응모할 수 있다.
 * 다만 저녁 시간까지 행사에 참여한 사람에 한해 행운권 추첨을 해야 한다.
 * 이를 알게 된 참석자들 중 일부가 저녁까지 시간을 보내지 않은 채 저녁까지 남아있는 참석자의 회원번호를 이용해 행운권만 응모하고 행사장을 떠났다.
 * 행사 추최측은 응모된 행운권에서 2개 이상 같은 회원번호가 나오면 해당 회원번호는 응모 대상에서 제외하려고 한다.
 * 현재까지 응모된 추첨권을 전달하여 중복된 회원번호를 제외하고 남아있는 회원번호를 오름차순 정렬하여 빈칸 사이에 넣어서 하나의 문자열로 리턴하라.
 */

function getUniqueList(coupons: number[]): string {
  const map: Map<number, number> = new Map();

  // 회원번호 기준으로 몇개의 응모권이 있는지 카운트하는 map에 set
  coupons.forEach((coupon) => {
    if (map.has(coupon)) {
      map.set(coupon, map.get(coupon)! + 1);
    } else {
      map.set(coupon, 1);
    }
  });

  // map을 돌면서 하나뿐인 회원번호인 경우 리스트에 다시 담음
  const list: number[] = [];
  map.forEach((val, key) => {
    if (val === 1) {
      list.push(key);
    }
  });

  return list.sort((a, b) => a - b).join(' ');
}

console.log(getUniqueList([1, 2, 3, 3, 4, 5])); // '1 2 4 5'
console.log(getUniqueList([10, 2, 12, 5, 2, 3, 5, 4])); // '3 4 10 12'
