/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const n of Object.keys(count)) {
    freq[count[n]].push(parseInt(n));
  }
  let result = [];
  console.log(freq);
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      result.push(n);
    }
    if (result.length === k) {
      return result;
    }
  }
};
