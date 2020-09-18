function getKth(lo: number, hi: number, k: number): number {
    // generate range of numbers [lo,hi]
    const res: number[] = [];
    for (let i = lo; i < hi + 1; i++) res.push(i);

    // sort based on custom comparator
    res.sort(sortByPower);

    // return k'th value in res
    return res[k - 1];
}

/**
 * custom comparator function to compare two numbers based on power value
 * if same power, compare a - b (ascending)
 * @param a
 * @param b
 */
function sortByPower(a: number, b: number): number {
    // get power values
    const a_pow = power(a);
    const b_pow = power(b);

    if (a_pow === b_pow) {
        return a - b;
    } else {
        return a_pow - b_pow;
    }
}

/**
 * helper method to get power value of a number
 * @param a : number to get power value of
 * @returns : power value
 */
function power(a: number): number {
    // steps
    let steps = 0;
    // go until it's 1
    while (a > 1) {
        // if even (x/2) if odd (3*x+1)
        a = a % 2 === 0 ? a / 2 : 3 * a + 1;
        steps++;
    }
    return steps;
}
