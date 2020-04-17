function nextGreaterElement(nums1, nums2) {
    // return nums1 modified
    return nums1.map((x) => {
        // iterate get index of x in nums2, and the next
        for (let i = nums2.indexOf(x) + 1; i < nums2.length; i++) {
            // if this one is greater return this one
            if (nums2[i] > x)
                return nums2[i];
        }
        // no greater
        return -1;
    });
}
