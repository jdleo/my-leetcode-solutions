function smallerNumbersThanCurrent(nums: number[]): number[] {
    let res: number[] = [];

    // iterate n^2
    for (let i = 0; i < nums.length; i++) {
        // how many are smaller
        let n: number = 0;

        for (let j = 0; j < nums.length; j++) {
            // make sure not same num
            if (i !== j) {
                // only add if smaller
                n += nums[j] < nums[i] ? 1 : 0;
            }
        }

        // set for this i
        res.push(n);
    }

    return res;
}
