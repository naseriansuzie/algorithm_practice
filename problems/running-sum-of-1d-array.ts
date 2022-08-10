/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

- Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

- Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

- Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

Constraints:
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
 */

function runningSum(nums: number[]): number[] {
  return nums.reduce(
    (acc: number[], curNum: number, curIdx: number) => {
      if (curIdx === 0) {
        return acc;
      }
      return [...acc, acc[acc.length - 1] + curNum];
    },
    [nums[0]],
  );
}

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
