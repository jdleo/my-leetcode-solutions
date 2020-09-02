function minOperations(n: number): number {
    // count of operations (our result)
    let out: number = 0;

    // get mid point (upper + lower) / 2
    const upper: number = 2 * (n - 1) + 1;
    const lower: number = 1;
    const mid: number = (upper + lower) / 2;

    // count from 0 to mid index
    for (let i = 0; i < n / 2; i++) {
        // number of ops is the difference between mid and current odd number
        out += mid - (2 * i + 1);
    }

    return out;
}
