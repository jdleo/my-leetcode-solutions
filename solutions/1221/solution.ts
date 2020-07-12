function balancedStringSplit(s: string): number {
    // left and right pointers
    let [lo, hi]: number[] = [0, 1];

    // max number of balanced strings
    let res: number = 0;

    // variable to keep track of 'balance'
    let bal: number = 0;

    // account for first char
    bal += s.charAt(lo) === 'L' ? -1 : 1;

    // go until reach end
    while (hi < s.length) {
        // add/subtract bal accordingly
        bal += s.charAt(hi) === 'L' ? -1 : 1;

        // check if were balanced
        if (bal === 0) {
            // add to res
            res++;

            // move lo to hi + 1 and hi to lo + 1
            lo = hi + 1;
            hi = lo + 1;

            // add in lo again (starting fresh)
            bal += s.charAt(lo) === 'L' ? -1 : 1;
        } else {
            // just move hi forward
            hi++;
        }
    }

    return res;
}
