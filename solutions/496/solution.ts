function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // result array
    const res: number[] = [];

    // iterate thru nums1
    for (let i = 0; i < nums1.length; i++) {
        // iterate thru nums2, starting after index of the number at i
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            // check if this number is greater than nums1[i]
            if (nums2[j] > nums1[i]) {
                // push and break
                res.push(nums2[j]);
                break;
            }
        }

        // if we never found a greater, return - 1
        if (res.length === i) res.push(-1);
    }

    return res;
}
