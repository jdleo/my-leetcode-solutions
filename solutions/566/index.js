function matrixReshape(nums, r, c) {
    // get mxn of current matrix
    const m = nums.length;
    const n = nums[0].length;
    // to check legality, check if these multiplied together are equal
    if (m * n != r * c)
        return nums;
    // it's legal here, so create empty output array
    const res = [];
    // iterate r x c and increment a k variable
    for (let i = 0, k = 0; i < r; i++) {
        // push empty array
        res.push([]);
        for (let j = 0; j < c; j++, k++) {
            res[i].push(nums[Math.floor(k / n)][k % n]);
        }
    }
    return res;
}
