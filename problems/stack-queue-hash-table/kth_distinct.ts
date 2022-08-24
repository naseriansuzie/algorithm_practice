/**
 * A distinct string is a string that is present only once in an array.
 * Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
 * Note that the strings are considered in the order in which they appear in the array.
 */

function kthDistinct(arr: string[], k: number): string {
  const uniqueArr: string[] = [];
  const map: Map<string, number> = new Map();

  arr.forEach((el) => {
    if (map.has(el)) {
      map.set(el, map.get(el)! + 1);
    } else {
      map.set(el, 1);
    }
  });
  map.forEach((val, key) => {
    if (val === 1) {
      uniqueArr.push(key);
    }
  });
  if (uniqueArr.length < k) {
    return '';
  }
  return uniqueArr[k - 1];
}

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)); // "a"
console.log(kthDistinct(['aaa', 'aa', 'a'], 1)); // "aaa"
console.log(kthDistinct(['a', 'b', 'a'], 3)); // ""
