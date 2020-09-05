function sumZero(n: number): number[] {
    // result
    let res: number[] = [0];

    // logic: we can create array of numbers [0, -1, 1, -2, 2...] etc, and it will always add to 0
    // if n is odd, we just need to have [0,-1,1] etc
    // if n is even, we will have [0,-1,1,2] which will be 2 (wrong), so we need to subtract the first value by the last,
    // which would make it [-2,-1,1,2] which would be chill

    // loop from according to logic above
    for (let i = 2; i < n + 1; i++) {
        res.push(i % 2 === 0 ? Math.floor(i / 2) : -Math.floor(i / 2));
    }

    // check if even, if so, subtract first index by last
    if (n % 2 === 0) res[0] -= res[res.length - 1];

    return res;
}
