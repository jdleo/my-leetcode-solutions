function sortString(s: string): string {
    // result string arr
    let res: string[] = [];

    // occurrences for each character in s (all lowercase, so 0-25 represent a-z)
    const occ: number[] = Array(26).fill(0);

    // number of characters left to pick from
    let charsLeft: number = s.length;

    // fill occ
    for (let i = 0; i < s.length; i++) {
        // incrementing corresponding char
        occ[s.charCodeAt(i) - 97]++;
    }

    // flag for whether we are doing steps 1-3, or steps 4-6 in our algorithm
    let smallest: boolean = true;

    // go until we still have characters to pick from
    while (charsLeft > 0) {
        // check flag
        if (smallest) {
            // go through occurrences from left to right (smallest to largest)
            for (let i = 0; i < occ.length; i++) {
                // check if we still have a character left for this index
                if (occ[i] > 0) {
                    // append corresponding char to res
                    res.push(String.fromCharCode(i + 97));

                    // decrease chars left and occurrence number
                    charsLeft--;
                    occ[i]--;
                }
            }
        } else {
            // go through occurrences from right to left (largest to smallest)
            for (let i = occ.length - 1; i >= 0; i--) {
                // check if we still have a character left for this index
                if (occ[i] > 0) {
                    // append corresponding char to res
                    res.push(String.fromCharCode(i + 97));

                    // decrease chars left and occurrence number
                    charsLeft--;
                    occ[i]--;
                }
            }
        }

        // flip flag
        smallest = !smallest;
    }

    return res.join('');
}
