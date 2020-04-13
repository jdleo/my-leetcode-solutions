/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  // object to hold counts
  // {c: i} count : index count was seen at
  const counts = { 0: -1 };

  // max length
  let max = 0;

  // current balance
  let balance = 0;

  // length of array
  const n = nums.length;

  // iterare thru nums
  for (let i = 0; i < n; i++) {
    // if 0, balance-- : if 1, balance++
    nums[i] === 0 ? balance-- : balance++;

    // check if we've seen this count before
    if (balance in counts) {
      // this means between this index, and that index, it's valid subarray
      // so, take max subarray length
      max = Math.max(max, i - counts[balance]);
    } else {
      // just write balance:index to counts
      counts[balance] = i;
    }
  }

  return max;
};
