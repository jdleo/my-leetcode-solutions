function frequencySort(s: string): string {
    // make char array of s
    const S: string[] = s.split('');

    // counts object {character: count}
    const counts: { [c: number]: number } = {};

    // iterate thru S array
    for (let i = 0; i < S.length; i++) {
        // increment char count
        if (!(S[i] in counts)) counts[S[i]] = 1;
        counts[S[i]]++;
    }

    // sort S array with custom comparator
    S.sort((a: string, b: string) => {
        // if counts are not equal, sort ascending
        if (counts[a] != counts[b]) {
            return counts[b] - counts[a];
        } else {
            // do this to ensure characters are clumped together
            return b.charCodeAt(0) - a.charCodeAt(0);
        }
    });

    // return S array joined
    return S.join('');
}
