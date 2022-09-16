/** =
 * There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
 * You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
 * Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
 * Return the time taken for the person at position k (0-indexed) to finish buying tickets.
 *
 * Constraints:
 *   - n == tickets.length
 *   - 1 <= n <= 100
 *   - 1 <= tickets[i] <= 100
 *   - 0 <= k < n
 */

function timeRequiredToBuy(tickets: number[], k: number): number {
  const _tickets = [...tickets];
  let cnt = 0;

  while (_tickets[k] > 0) {
    for (let i = 0; i < _tickets.length; i++) {
      if (_tickets[k] === 0) {
        return cnt;
      }
      if (_tickets[i] > 0) {
        _tickets[i] = _tickets[i] - 1;
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
