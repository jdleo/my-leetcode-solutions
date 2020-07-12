function maxIncreaseKeepingSkyline(grid: number[][]): number {
    // row maxes, and col maxes
    const rowMax: number[] = [...Array(grid.length).fill(0)];
    const colMax: number[] = [...Array(grid[0].length).fill(0)];

    // iterate thru every building
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // set max for this row and col
            rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            colMax[j] = Math.max(colMax[j], grid[i][j]);
        }
    }

    // total we can increase
    let res: number = 0;

    // iterate thru every building
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // we can increase this building up to the min of the maxes
            res += Math.min(rowMax[i], colMax[j]) - grid[i][j];
        }
    }

    return res;
}
