function minSubsequence(nums: number[]): number[] {
    // result array
    const res: number[] = [];

    // first, sort nums decreasing
    nums.sort((a: number, b: number) => b - a);

    // get sum of elements
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    // get current sum
    let current_sum: number = 0;

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