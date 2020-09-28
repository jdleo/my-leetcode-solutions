function islandPerimeter(grid: number[][]): number {
    // total perimeter
    let res = 0;
    // iterate thru grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // check if this is land
            if (grid[i][j] === 1) {
                // add 4 (best case) (no neighbors)
                res += 4;

                // subtract 2 for left neighbor
                if (grid[i][j - 1] === 1) res -= 2;
                // subtract 2 for upper neighbor
                if (i > 0 && grid[i - 1][j] === 1) res -= 2;
            }
        }
    }
    return res;
}
