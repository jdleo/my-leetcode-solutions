function singleNonDuplicate(nums: number[]): number {
    // pointers for binary search
    let lo: number = 0;
    let hi: number = nums.length - 1;

    // go until pointers meet
    while (lo <= hi) {
        // get midpoint
        const mid: number = Math.floor((lo + hi) / 2);

        // if reach first, or last, or left number not equal to right number
        if (
            nums[mid - 1] !== nums[mid] &&
            nums[mid] != nums[mid + 1]
        )
            return nums[mid];

        // check if mid is equal to the left of mid
        if (nums[mid] === nums[mid - 1]) {
            if ((mid - 1) % 2 === 1) {
                // amount of nums on left is odd, search left
                hi = mid - 2;
            } else {
                // search right
                lo = mid + 1;
            }
        } else {
            if ((nums.length - 2 - mid) % 2 === 1) {
                // amount of nums on right is odd, search right
                lo = mid + 1;
            } else {
                // search left
                hi = mid - 1;
            }
        }
    }
    // none found, i suppose
    return -1;
}
