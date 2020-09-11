function matrixBlockSum(mat: number[][], K: number): number[][] {
    // get m x n
    const [m, n] = [mat.length, mat[0].length];

    // create empty res array (same size as mat, filled w/ zeroes)
    const res = [...Array(m)].map((_) => Array(n).fill(0));

    // helper function to get range sum
    function rangeSum(x: number, y: number): number {
        // running sum
        let sum = 0;
        // we use min/max to prevent out of bounds, btw
        for (let i = Math.max(0, x - K); i <= Math.min(m - 1, x + K); i++) {
            for (let j = Math.max(0, y - K); j <= Math.min(n - 1, y + K); j++) {
                sum += mat[i][j];
            }
        }

        return sum;
    }

    // iterate thru matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // calculate range sum using our helper method
            res[i][j] = rangeSum(i, j);
        }
    }

    return res;
}
