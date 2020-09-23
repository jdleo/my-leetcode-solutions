function checkIfCanBreak(s1: string, s2: string): boolean {
    // char counts of s1, and s2
    const c1 = new Uint16Array(26);
    const c2 = new Uint16Array(26);
    // fill counts
    for (let i = 0; i < s1.length; i++) c1[s1.charCodeAt(i) - 97]++;
    for (let i = 0; i < s2.length; i++) c2[s2.charCodeAt(i) - 97]++;
    // counts for all letters
    let total1 = 0,
        total2 = 0;
    // flags to see which string is breaking into the other (the greater total letters alphabetically)
    let s1_breaking = false,
        s2_breaking = false;
    // iterate thru all letters
    for (let i = 0; i < 26; i++) {
        // increment count totals
        total1 += c1[i];
        total2 += c2[i];

        // check if total 1 is bigger than total 2
        if (total1 > total2) {
            // this must be s1 breaking
            s1_breaking = true;
            // check if we already had s2 breaking (INVALID)
            if (s2_breaking) return false;
        } else if (total2 > total1) {
            // this must be s2 breaking
            s2_breaking = true;
            // check if we already had s1 breaking (INVALID)
            if (s1_breaking) return false;
        }
    }

    // no problems detected
    return true;
}
