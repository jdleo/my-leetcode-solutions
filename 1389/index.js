/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    // create empty target array
    const target = [];

    // iterate thru nnums and index
    for (let i = 0; i < nums.length; i++) {
        // insert num at index
        target.splice(index[i], 0, nums[i]);
    }

    return target;
};