function uncommonFromSentences(A, B) {
    // res
    const res = [];
    // split A and B
    const aa = A.split(' ');
    const bb = B.split(' ');
    // word count object
    const c = {};
    // loop thru A
    for (let i = 0; i < aa.length; i++) {
        // increment
        c[aa[i]] = c[aa[i]] ? c[aa[i]] + 1 : 1;
    }
    // loop through B
    for (let i = 0; i < bb.length; i++) {
        // increment
        c[bb[i]] = c[bb[i]] ? c[bb[i]] + 1 : 1;
    }
    // now go through keys
    for (let i = 0; i < Object.keys(c).length; i++) {
        // if count is 1, its uncommon word
        if (c[Object.keys(c)[i]] === 1)
            res.push(Object.keys(c)[i]);
    }
    return res;
}
