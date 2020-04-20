function findComplement(N) {
    // base case
    if (N === 0)
        return 1;
    // get number of bits required for N
    const n = Math.floor(Math.log2(N) + 1);
    // create bitmask of 1s of length of digits
    const mask = 2 ** n - 1;
    console.log(n, mask);
    // xor these two nums for the result
    return N ^ mask;
}
