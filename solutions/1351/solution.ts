function countNegatives(grid: number[][]): number {
    // number of negatives
    let negs: number = 0;

    // iter thru matrix
    for (let i = 0; i < grid.length; i++) {
        // for individual rows, iterate backwards (cuz sorted decreasing)
        for (let j = grid[i].length - 1; j >= 0; j--) {
            // check if still negative
            if (grid[i][j] < 0) {
                negs++;
            } else {
                // just break loop
                break;
            }
        }
    }

    return negs;
}
