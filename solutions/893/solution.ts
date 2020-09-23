function numSpecialEquivGroups(A: string[]): number {
    // set to keep track of unique special equivalents
    const set: Set<string> = new Set();
    // iterate thru A
    for (let i = 0; i < A.length; i++) {
        // even and odd char counts
        const counts = [new Uint8Array(26), new Uint8Array(26)];
        // iterate thru this string, and fill counts
        for (let j = 0; j < A[i].length; j++) {
            // fill count on whether even or odd (0 index is even 1 is odd)
            counts[j % 2][A[i].charCodeAt(j) - 97]++;
        }
        // add to set as concatenation of both counts arrays
        set.add(counts[0].join('') + counts[1].join(''));
    }

    // result is just size of set (number of unique special equivalents)
    return set.size;
}
