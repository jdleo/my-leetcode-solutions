function runningSum(nums: number[]): number[] {
    // for running sum
    let sum: number = nums[0];

    // iter thru nums
    for (let i = 1; i < nums.length; i++) {
        // set sum
        sum += nums[i];
        nums[i] = sum;
    }

    // result is in nums
    return nums;
}
