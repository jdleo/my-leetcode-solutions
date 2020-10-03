function rangeSum(nums: number[], n: number, left: number, right: number): number {
    // 2d array of all contiguous subarray sums
    // each index represents either keeping a subarray sum going, or
    const subArraySums: number[][] = [[nums[0]]];

    // sort nums ascending so that contiguous sums will also be ascending
    nums.sort((a, b) => a - b);

    // total sum
    let sum = 0;

    // as per their requirements, return sum modulo 10**9 + 7
    return sum % (10 ** 9 + 7);
}
