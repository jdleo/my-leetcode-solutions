function findRelativeRanks(nums) {
    // res
    const res = Array(nums.length).fill('');
    // array of objects {num, index}[]
    const positions = [];
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // push this num, and the index its found at
        positions.push({
            num: nums[i],
            index: i,
        });
    }
    // sort positions desc based on scores (nums)
    positions.sort((a, b) => b.num - a.num);
    // iterate thru positions
    for (let i = 0; i < positions.length; i++) {
        // check medals
        if (i === 0) {
            // gold
            res[positions[i].index] = 'Gold Medal';
        }
        else if (i === 1) {
            // silver
            res[positions[i].index] = 'Silver Medal';
        }
        else if (i === 2) {
            // bronze
            res[positions[i].index] = 'Bronze Medal';
        }
        else {
            // just index as rank
            res[positions[i].index] = (i + 1).toString();
        }
    }
    return res;
}
