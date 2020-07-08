function runningSum(nums: number[]): number[] {
    // variable for running sum
    let sum: number = 0;

    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // add to running sum and make i'th position running sum
        sum += nums[i];
        nums[i] = sum;
    }

    return nums;
}
