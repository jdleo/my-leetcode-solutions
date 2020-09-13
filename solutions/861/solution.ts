function matrixScore(A: number[][]): number {
    // get m x n
    const m = A.length,
        n = A[0].length;

    // our result (the value of all values in first column flipped, initially)
    // (1 left shifting by number of columns, times number of rows)
    let res: number = (1 << (n - 1)) * m;

    // iterate thru columns
    for (let j = 1; j < n; j++) {
        // number of bits that are same bit as first in column
        let count = 0;
        // iterate thru rows, and increment only if this value is equal to first in column
        for (let i = 0; i < m; i++) {
            if (A[i][j] === A[i][0]) count++;
        }
        // whether first in column is 0 or 1, we know the other bit count will be M - count
        // so we take whatever flip will yield us more points
        res += Math.max(count, m - count) * (1 << (n - j - 1));
    }

    return res;
}
