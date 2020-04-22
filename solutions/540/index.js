function singleNonDuplicate(nums) {
    // iterate thru nums by 2
    for (let i = 0; i < nums.length; i += 2) {
        // if this pair isn't equal, return the left
        if (nums[i] !== nums[i + 1])
            return nums[i];
    }
    // none found
    return -1;
}
