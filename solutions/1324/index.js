function printVertically(s) {
    // get words space seperated
    const S = s.split(' ');
    // to hold longest string length
    let maxLength = 0;
    // iterate 1st pass thru array and find longest string length
    for (let i = 0; i < S.length; i++) {
        maxLength = Math.max(maxLength, S[i].length);
    }
    // result array (max length empty strings)
    const res = Array(maxLength).fill('');
    // iterate 2nd pass thru array
    for (let i = 0; i < S.length; i++) {
        // go from 0 to maxLength - 1
        for (let j = 0; j < maxLength; j++) {
            // append character at this index to j'th string
            // but just do a space if words length >= j
            res[j] +=
                S[i].length > j ? S[i].charAt(j) : ' ';
        }
    }
    // 3rd pass to trim whitespace
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].trimRight();
    }
    return res;
}
