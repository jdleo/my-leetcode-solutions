function rangeBitwiseAnd(m: number, n: number): number {
    // number of shifts we had to make
    let i: number = 0;

    // go until m and n are equal
    while (m !== n) {
        // right shift both m and n
        m >>= 1;
        n >>= 1;

        // that's 1 more shift
        i++;
    }

    // pad 0's on right of m by right shifting by i
    return (m <<= i);
}
