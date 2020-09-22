function findDuplicates(nums: number[]): number[] {
    // local ref to abs() function
    const abs = Math.abs;
    // result
    const res: number[] = [];
    // iter thru numbers
    for (let i = 0; i < nums.length; i++) {
        // take current number, use as an index (since 1 <= nums[i] <= n)
        // use abs because we will be flipping signs later
        const idx: number = abs(nums[i]) - 1;
        // check if we've already seen this number (flipped sign)
        if (nums[idx] < 0) res.push(idx + 1);
        // flip sign (to mark this number)
        nums[idx] = -nums[idx];
    }
    return res;
}
