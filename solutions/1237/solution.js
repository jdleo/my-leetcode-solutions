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
        // last calculated output (z)
        let last = Number.MIN_SAFE_INTEGER;
        // go until 1000, or until we met z (it will just keep increasing, so stop here)
        while (j < 1001 && last < z) {
            // calculate new 'z'
            last = customfunction.f(i, j);
            // check if matches target
            if (last === z) sol.push([i, j]);
            j++;
        }
        i++;
    }

    return sol;
};
