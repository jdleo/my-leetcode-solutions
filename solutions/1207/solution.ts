function uniqueOccurrences(arr: number[]): boolean {
    // hash map for storing number occurrence
    const count: Map<number, number> = new Map();

    // iterate thru arr and fill occurrence
    for (let num of arr) {
        // increment count
        count.set(num, count.get(num) ? count.get(num)! + 1 : 1);
    }

    // get occurrences
    const occ = Array.from(count.values());

    // make sure they're unique (set size same as length)
    return occ.length === new Set(occ).size;
}
