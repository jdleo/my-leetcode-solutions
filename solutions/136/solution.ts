function singleNumber(nums: number[]): number {
    // result
    let res = 0;
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) res ^= nums[i];
    return res;
}
