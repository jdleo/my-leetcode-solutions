function canJump(nums) {
    // this is the biggest jump we can make
    let max = 0;
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // set new max jump to be current max or i + jump size
        max = Math.max(max, i + nums[i]);
        // if we hit a 0 jump and our max can't cross this, break
        if (nums[i] === 0 && max <= i)
            break;
    }
    // check if our max jump we have can reach the end
    return max >= nums.length - 1;
}
