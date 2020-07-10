function xorOperation(n: number, start: number): number {
    // total xor
    let xor: number = start;
    // loop n times
    for (let i = 1; i < n; i++) {
        // xor with current number
        xor ^= start + i * 2;
    }

    return xor;
}
