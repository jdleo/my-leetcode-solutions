function shuffle(nums: number[], n: number): number[] {
    // result array
    const res: number[] = [];
    // iterate thru nums
    for (let i = 0; i < n; i++) {
        // push i and n+i to res array
        res.push(nums[i]);
        res.push(nums[n + i]);
    }

    return res;
}
