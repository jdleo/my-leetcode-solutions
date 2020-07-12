function createTargetArray(nums: number[], index: number[]): number[] {
    // target array
    let res: number[] = [];

    // go thru nums/indices
    for (let i = 0; i < nums.length; i++) {
        // get num and index
        const [num, idx]: number[] = [nums[i], index[i]];

        // check if index is equal to length (just a push)
        if (idx === res.length) {
            res.push(num);
        } else {
            // insert num at position i
            res.splice(idx, 0, num);
        }
    }

    return res;
}
