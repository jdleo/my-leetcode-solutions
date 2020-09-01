function oddCells(n: number, m: number, indices: number[][]): number {
    // res
    let odds = 0;

    // create matrix filled with 0s
    const mat: number[][] = Array(n)
        .fill(0)
        .map(() => Array(m).fill(0));

    // iterate through indices
    for (let n = 0; n < indices.length; n++) {
        // get i, j
        const [i, j] = indices[n];

        // increment every value in same row by 1
        for (let k = 0; k < m; k++) {
            mat[i][k]++;
        }

        // increment every value in same col by 1
        for (let k = 0; k < n; k++) {
            mat[k][j]++;
        }

        console.log(mat);
    }

    // loop back thru matrix, counting odds
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            odds += mat[i][j] % 2;
        }
    }

    return odds;
}
