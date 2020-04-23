/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    // running sum
    let sum = 0;
    // amount of subarrays that add to K (res)
    let count = 0;
    // obj to store sums (and how many times they been seen)
    let map = { 0: 1 };
    // iterate thru arr
    for (let i = 0; i < nums.length; i++) {
        // add to running sum
        sum += nums[i];
        // check if sum - k is in map
        if (map[sum - k]) {
            // add the occurrence of that subarray to count
            count += map[sum - k];
        }
        // store sum in map
        if (!map[sum])
            map[sum] = 0;
        map[sum]++;
    }
    return count;
}
