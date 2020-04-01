/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
    // result
    let res = [];
    
    // loop by pairs
    for (let i = 0; i < nums.length; i += 2) {
        // create array of size nums[i, fill with nums[i+1]
        const cur = Array(nums[i]).fill(nums[i+1]);
        // spread it onto res
        res = [...res, ...cur];
    }
    
    return res;
};