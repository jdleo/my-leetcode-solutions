function findPairs(nums: number[], k: number): number {
    // counts map for number occurrences in nums
    const counts: { [key: string]: number } = {};
    // fill counts
    for (let i = 0; i < nums.length; i++)
        counts[nums[i]] = nums[i] in counts ? counts[nums[i]] + 1 : 1;

    // number of k-diff pairs
    let res = 0;

    // get keys in counts (numbers seen in nums)
    const keys = Object.keys(counts);
    // iterate thru keys in counts
    for (let i = 0; i < keys.length; i++) {
        // two cases:
        // 1. k > 0, so we need to check if this key - k is in counts
        // 2. k = 0, so we need to check if this key has two values (since theyll subtract to 0)
        if ((k > 0 && +keys[i] - k in counts) || (k == 0 && counts[keys[i]] >= 2)) res++;
    }

    return res;
}
