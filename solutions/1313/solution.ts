function decompressRLElist(nums: number[]): number[] {
    // result
    const res: number[] = [];

    // iterate thru pairs in nums
    for (let i = 0; i < nums.length; i += 2) {
        // get freq, val
        const [freq, val]: number[] = [nums[i], nums[i + 1]];

        // iterate freq times
        for (let j = 0; j < freq; j++) {
            // push val
            res.push(val);
        }
    }

    return res;
}
