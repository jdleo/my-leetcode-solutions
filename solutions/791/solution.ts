function customSortString(S: string, T: string): string {
    // index occurrence for all 26 lowercase chars
    const occ = new Uint8Array(26);
    // fill occurrences with indices at which chars appear
    for (let i = 0; i < S.length; i++) occ[S.charCodeAt(i) - 97] = i;
    // result string arr (to sort)
    const res: string[] = T.split('');
    // sort based on index occurrence in S (if it never was in there, itll just be a 0)
    // which doesn't matter because chars not in S can be in any order
    res.sort((a, b) => occ[a.charCodeAt(0) - 97] - occ[b.charCodeAt(0) - 97]);
    // join back res
    return res.join('');
}
