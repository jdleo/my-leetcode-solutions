function numJewelsInStones(J: string, S: string): number {
    // convert jewels to set of chars
    const set: Set<string> = new Set(J);

    // count
    let count: number = 0;

    // iterate thru S
    for (let i = 0; i < S.length; i++) {
        // check if this char is in set
        if (set.has(S.charAt(i))) {
            count++;
        }
    }

    return count;
}
