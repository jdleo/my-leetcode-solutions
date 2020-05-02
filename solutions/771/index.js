function numJewelsInStones(J, S) {
    // convert jewels to set of chars
    const set = new Set(J);
    // count
    let count = 0;
    // iterate thru S
    for (let i = 0; i < S.length; i++) {
        // check if this char is in set
        if (set.has(S.charAt(i))) {
            count++;
        }
    }
    return count;
}
