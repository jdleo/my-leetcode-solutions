/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
    // get sizes
    const m = grid.length;
    const n = grid[0].length;

    // total number of negative numbers
    let res = 0;

    // iterate through rows
    for (let i = 0; i < m; i++) {
        // iterate backwards through cols
        // (until we see positive number, since sorted descending)
        for (let j = n - 1; j >= 0; j--) {
            // check if negative
            if (grid[i][j] < 0) {
                res++;
            } else {
                // don't go any further, since this row is sorted
                break;
            }
        }
    }

    return res;
};
