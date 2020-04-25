function canConstruct(s, k) {
    // base case (s is less than k in length)
    if (s.length < k)
        return false;
    // our number to representing all 26 lowercase characters (each bit)
    let x = 0;
    // iterate thru string
    for (let i = 0; i < s.length; i++) {
        // flip bit corresponding to this lowercase char
        x ^= 1 << (s.charCodeAt(i) - 97);
    }
    // count set bits
    let c = 0;
    while (x > 0) {
        // inc c if rightmost bit is 1
        c += x & 1;
        // right shift
        x >>= 1;
    }
    // check if number of odds is less or equal to k
    return c <= k;
}
