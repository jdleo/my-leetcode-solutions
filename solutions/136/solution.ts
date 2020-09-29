function singleNumber(nums: number[]): number {
    // result
    let res = 0;
    // iterate thru nums, and xor each num with res
    for (let i = 0; i < nums.length; i++) res ^= nums[i];
    return res;
}
