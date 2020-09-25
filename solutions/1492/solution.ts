function kthFactor(n: number, k: number): number {
    // first, go from 1 to n/2 (all factors excluding n)
    for (let i = 1; i <= n / 2; i++) {
        // check i is a factor of n
        // then decrement k, if k is 0, we have k'th factor
        if (n % i === 0) if (--k === 0) return i;
    }

    // return n if we're one away from k (last value) or do -1 (none found)
    return k === 1 ? n : -1;
}
