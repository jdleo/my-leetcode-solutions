function stringMatching(words: string[]): string[] {
    // result
    const res: string[] = [];

    // iterate thru words n^2
    outer: for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            // dont compare same index
            if (i != j) {
                // check if this word is a substring
                if (words[j].indexOf(words[i]) > -1) {
                    // push to output array and break inner loop
                    res.push(words[i]);
                    continue outer;
                }
            }
        }
    }

    return res;
}
