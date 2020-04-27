function minFlips(a: number, b: number, c: number): number {
    // number of flips
    let flips: number = 0;

    // keep going until they're all zero
    while (a != 0 || b != 0 || c != 0) {
        // if (a&1)|(b&1) and c&1 differ, it requires a flip
        flips += ((a & 1) | (b & 1)) ^ (c & 1);
        // if a and b are both 1, and c is 0, requires another flip
        flips += 1 & a & b & ~(c & 1);
        // right shift numbers to get next bits
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return flips;
}