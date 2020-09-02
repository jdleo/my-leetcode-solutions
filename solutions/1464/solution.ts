function maxProduct(nums: number[]): number {
    // first, sort nums (descending)
    nums.sort((a, b) => b - a);

    // return product of two largest nums -1
    return (nums[0] - 1) * (nums[1] - 1);
}
