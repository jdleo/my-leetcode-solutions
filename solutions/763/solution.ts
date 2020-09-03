function partitionLabels(S: string): number[] {
    // result
    let res: number[] = [];

    // array representing 0-25 (26 lowercase letters of alphabet)
    // and the last position they are seen at in S
    let lastSeen: number[] = Array(26).fill(0);

    for (let i = 0; i < S.length; i++) {
        // log this character seen at i
        lastSeen[S.charCodeAt(i) - 97] = i;
    }

    // start and end of current partition
    let start: number = 0;
    let end: number = 0;

    // iterate thru S again
    for (let i = 0; i < S.length; i++) {
        // update new end of this partition
        end = Math.max(end, lastSeen[S.charCodeAt(i) - 97]);

        // check if the loop pointer reached the end of a partition
        if (i === end) {
            // push current partition to res
            res.push(end - start + 1);

            // update new starting index (one after current)
            start = i + 1;
        }
    }
    return res;
}
