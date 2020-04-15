function twoSum(nums, target) {
    // object to hold {number: index}
    const o = {};
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // check if target - cur is in our object
        if (target - nums[i] in o) {
            // return current index, and index other num found at
            return [i, o[target - nums[i]]];
        }
        else {
            // just write {num: index} to o
            o[nums[i]] = i;
        }
    }
    // none found, if get here
    return [];
}
