function hammingDistance(x: number, y: number): number {
    // total distance
    let res: number = 0;

    // go while there are still bits to compare
    while (x > 0 || y > 0) {
        // add to res the xor between the rightmost bits
        // since xor is only 1 if bits differ
        // to get rightmost bit, we just AND 1
        res += (x & 1) ^ (y & 1);

        // right shift
        x >>= 1;
        y >>= 1;
    }

    return res;
}
