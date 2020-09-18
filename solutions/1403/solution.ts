function minSubsequence(nums: number[]): number[] {
    // res
    const res: number[] = [];
    // total sum
    let sum = 0;
    // each individual number count (constraint: 1 <= nums[i] <= 100)
    const counts = new Uint8Array(101);
    // fill counts and sum
    for (let num of nums) {
        counts[num]++;
        sum += num;
    }
    // minimum sub sequence sum, and it needs to be at least
    // sum/2 + 1 to be greater than rest of numbers
    const minSubSum = ~~(sum / 2) + 1;
    // current sum
    let cur = 0;
    // iterate thru counts backwards
    for (let i = 100; i >= 0; i--) {
        while (counts[i]-- > 0) {
            // increment cur, push to sequence, and check if we reached
            // greater than minimum subsequence sum
            cur += i;
            res.push(i);
            if (cur >= minSubSum) return res;
        }
    }

    return res;
}
