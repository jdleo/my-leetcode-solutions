function majorityElement(nums) {
    // object to hold number counts
    const map = {};
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // increment this num's count
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        // check if count is more than n/2
        if (map[nums[i]] > nums.length / 2)
            return nums[i];
    }
    return -1;
}
