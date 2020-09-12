function countSquares(matrix: number[][]): number {
    // result (how many square submatrices have all ones)
    let res: number = 0;

    // iterate thru matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // check if this cell is a 1 and not out of bounds
            if (matrix[i][j] > 0 && i > 0 && j > 0) {
                // use matrix as a dp cell, with the following conditions
                // 1. this is a 1, so technically it's a square
                // 2. if either left, top, or top left is a 0, this is not a further square
                matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;
            }

            // also add what's in this dp cell to res
            res += matrix[i][j];
        }
    }

    return res;
}
