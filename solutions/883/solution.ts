function projectionArea(grid: number[][]): number {
    // total area
    let res = 0;

    // iterate thru grid
    for (let i = 0; i < grid.length; i++) {
        // max height of row, and col
        let [x, y] = [0, 0];
        for (let j = 0; j < grid.length; j++) {
            // set maxes for x and y
            x = Math.max(x, grid[i][j]);
            y = Math.max(y, grid[j][i]);
            // if the height of this cell is > 0, we add 1
            // since top down projection doesnt care about height
            if (grid[i][j]) res++;
        }
        // add to area the maxes of row and col
        res += x + y;
    }

    return res;
}
