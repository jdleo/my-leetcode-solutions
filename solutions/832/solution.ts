function flipAndInvertImage(A: number[][]): number[][] {
    // get rows and cols in A
    const [m, n]: number[] = [A.length, A[0].length];

    // iterate thru A
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n / 2; j++) {
            // flip number at j with number at n - 1 - j
            const temp: number = A[i][j];
            A[i][j] = A[i][n - 1 - j];
            A[i][n - 1 - j] = temp;

            // flip both bits
            A[i][n - 1 - j] ^= 1;
            if (j != n - 1 - j) A[i][j] ^= 1;
        }
    }

    // result should be in A now
    return A;
}
