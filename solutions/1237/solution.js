/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    // list of solutions
    const sol = [];

    // pointer for first variable of function
    let i = 1;
    // the function arguments can only be in range 1 <= i,j <= 1000
    while (i < 1001) {
        // pointer for second variable
        let j = 1;
        // left and right pointers for binary search
        let lo = 1,
            hi = 1000;

        // go until pointers meet
        while (lo < hi) {
            // get mid point
            const mid = (lo + hi) >> 1;
            // calculate function
            const cur = customfunction.f(i, mid);
            // check if function of mid point is less than z
            if (cur < z) {
                // we need to search right half
                lo = mid + 1;
            } else if (cur > z) {
                // we need to search left half
                hi = mid;
            } else {
                // we found a solution for z
                sol.push([i, mid]);
                break;
            }
        }
        i++;
    }

    return sol;
};
