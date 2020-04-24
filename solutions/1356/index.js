// memo object to hold {number : number of 1 bits}
const memo = {};
function sortByBits(arr) {
    // sort arr based on custom comparator
    arr.sort((a, b) => {
        // set memo
        if (!(a in memo))
            memo[a] = bits(a);
        if (!(b in memo))
            memo[b] = bits(b);
        // check if they have same amount of bits
        if (memo[a] === memo[b]) {
            // sort normal ascending
            return a - b;
        }
        else {
            // sort ascending based on 1-bit count
            return memo[a] - memo[b];
        }
    });
    return arr;
}
// helper method to count number of 1 bits given n
function bits(n) {
    // number of bits
    let x = 0;
    // go until n is 0
    while (n > 0) {
        // n & 1 is only 1 if rightmost bit is 1
        x += n & 1;
        // right shift
        n >>= 1;
    }
    return x;
}
