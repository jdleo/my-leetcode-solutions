function commonChars(A: string[]): string[] {
    // counts for A[0] (to use as base reference)
    let counts = new Uint8Array(26);
    // fill counts
    for (let i = 0; i < A[0].length; i++) counts[A[0].charCodeAt(i) - 97]++;

    // iterate thru rest of strings
    for (let i = 1; i < A.length; i++) {
        // counts for THIS string
        let cur = new Uint8Array(26);
        // fill counts
        for (let j = 0; j < A[i].length; j++) cur[A[i].charCodeAt(j) - 97]++;
        // go thru cur and set counts to be min of those characters
        for (let j = 0; j < 26; j++) counts[j] = Math.min(counts[j], cur[j]);
    }

    // result
    const res: string[] = [];

    // iterate thru counts, and add n letters for each count
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < counts[i]; j++) {
            res.push(String.fromCharCode(i + 97));
        }
    }
    return res;
}
