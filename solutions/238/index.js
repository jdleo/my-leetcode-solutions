function productExceptSelf(nums) {
    // left and right running products, and array length
    let left = 1, right = 1;
    // result array (fill with 1s)
    const res = Array(nums.length).fill(1);
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // multiply left product into i
        res[i] *= left;
        // multiply right product into n - 1 - i
        res[nums.length - 1 - i] *= right;
        // multiply into running products
        left *= nums[i];
        right *= nums[nums.length - 1 - i];
    }
    return res;
}
