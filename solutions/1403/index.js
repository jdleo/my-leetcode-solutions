function minSubsequence(nums) {
    // result array
    const res = [];
    // first, sort nums decreasing
    nums.sort((a, b) => b - a);
    // get sum of elements
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // get current sum
    let current_sum = 0;
    // keep picking elements until it's greater than non included elements
    for (let i = 0; i < nums.length; i++) {
        // add to current sum and add number to res
        current_sum += nums[i];
        res.push(nums[i]);
        // if current sum is greater than non included elements, return res
        if (current_sum > sum - current_sum) {
            // break loop, we found our subsequence we need
            break;
        }
    }
    return res;
}
