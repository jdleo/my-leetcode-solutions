function luckyNumbers(matrix: number[][]): number[] {
    // get array dimensions
    const [m, n] = [matrix.length, matrix[0].length];

    // list of lucky numbers
    const lucky: number[] = [];

    // arrays representing mins per each row, maxes per each column
    const rowMins = Array(m).fill(Number.MAX_SAFE_INTEGER);
    const colMaxes = Array(n).fill(Number.MIN_SAFE_INTEGER);

    // iterate thru array
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // set min for row, max for col
            rowMins[i] = Math.min(rowMins[i], matrix[i][j]);
            colMaxes[j] = Math.max(colMaxes[j], matrix[i][j]);
        }
    }

    // iterate back through array to check if lucky number
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // check if this is BOTH the row min AND the col max
            if (matrix[i][j] === rowMins[i] && matrix[i][j] === colMaxes[j]) {
                // it's a lucky number <3
                lucky.push(matrix[i][j]);
            }
        }
    }

    return lucky;
}
