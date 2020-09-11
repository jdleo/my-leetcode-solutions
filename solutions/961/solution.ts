function repeatedNTimes(A: number[]): number {
    // hash set to keep track of numbers
    const set: Set<number> = new Set();

    // iterate thru array
    for (let i = 0; i < A.length; i++) {
        // check if set has seen this number
        if (set.has(A[i])) {
            // all numbers except one are unique, so if set has this, we found it
            return A[i];
        } else {
            // put in set
            set.add(A[i]);
        }
    }

    // default return to silence ts errors
    return 1;
}
