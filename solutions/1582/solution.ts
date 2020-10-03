function numSpecial(mat: number[][]): number {
    // arrays representing row and col counts of 1s
    const rows: Map<number, number> = new Map();
    const cols: Map<number, number> = new Map();

    // iterate thru mat
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // add number of 1s to rows and cols
            rows.set(i, (rows.get(i) || 0) + mat[i][j]);
            cols.set(j, (cols.get(j) || 0) + mat[i][j]);
        }
    }

    // total number of special numbers
    let res = 0;

    // iterate thru mat again
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // check if rows and cols strictly has 1 occurrence
            // if this is a 1
            if (mat[i][j] && rows.get(i)! === 1 && cols.get(j)! === 1) res++;
        }
    }

    return res;
}
