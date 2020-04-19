function search(nums, target) {
    // pointers for binary search
    let lo = 0;
    let hi = nums.length - 1;
    // go until pointers meet
    while (lo <= hi) {
        // get midpoint
        const mid = Math.floor((hi + lo) / 2);
        // check if target
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[lo] <= nums[mid]) {
            // if true, this means left half IS sorted
            // check if target is in between lo and mid
            if (nums[lo] <= target && target <= nums[mid]) {
                // search left half
                hi = mid - 1;
            }
            else {
                // search right half
                lo = mid + 1;
            }
        }
        else {
            // left half NOT sorted
            // check if target is in between mid and hi
            if (nums[mid] <= target && target <= nums[hi]) {
                // search right half
                lo = mid + 1;
            }
            else {
                // search left half
                hi = mid - 1;
            }
        }
    }
    // not found
    return -1;
}
