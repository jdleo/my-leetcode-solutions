function arrayPairSum(nums: number[]): number {
    // sort nums ascending
    nums.sort((a, b) => a - b);

    // total sum
    let sum: number = 0;

    // since it's sorted ascending, the min will always be first in pair
    // so just iterate thru nums by 2, and add the number to sum
    for (let i = 0; i < nums.length; i += 2) sum += nums[i];

    return sum;
}
