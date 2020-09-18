function countTriplets(arr: number[]): number {
    // number of triplets
    let res = 0;
    // maps for prefix counts and totals
    const count: Map<number, number> = new Map();
    const total: Map<number, number> = new Map();
    // prefix for xors
    let prefix = 0;
    // originally, prefix 0 has 1
    count.set(0, 1);
    // iterate thru array
    for (let i = 0; i < arr.length; i++) {
        // compute prefix
        prefix ^= arr[i];
        // getOrDefault count and totals for current prefix
        const c = count.has(prefix) ? count.get(prefix)! : 0;
        const t = total.has(prefix) ? total.get(prefix)! : 0;
        // increment res by number of possible candidates
        res += c * i - t;
        count.set(prefix, c + 1);
        total.set(prefix, t + i + 1);
    }
    return res;
}
