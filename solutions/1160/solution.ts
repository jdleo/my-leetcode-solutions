function countCharacters(words: string[], chars: string): number {
    // result (number of words that can be formed from chars)
    let res = 0;
    // counts for char set
    const counts = new Uint8Array(26);
    // fill counts
    for (let i = 0; i < chars.length; i++) counts[chars.charCodeAt(i) - 97]++;
    // iterate thru words
    for (let i = 0; i < words.length; i++) {
        // make copy of counts
        const temp = Uint8Array.from(counts);
        // flag for if valid so far
        let isValid = true;
        // iterate thru this word, and check if there's letters for each
        for (let j = 0; j < words[i].length; j++) {
            // check if we have insufficient chars for this letter
            if (temp[words[i].charCodeAt(j) - 97]-- === 0) {
                isValid = false;
                break;
            }
        }
        // increment res by length of this word if valid
        if (isValid) res += words[i].length;
    }
    return res;
}
