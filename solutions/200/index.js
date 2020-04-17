function numIslands(grid) {
    // number of islands
    let isl = 0;
    // iterate thru grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // check if this is an island
            if (grid[i][j] === '1') {
                // increment islands and pass to dfs
                isl++;
                dfs(grid, i, j);
            }
        }
    }
    return isl;
}
// helper dfs method
function dfs(grid, i, j) {
    // break if were not on island anymore
    if (grid[i][j] === '0')
        return;
    // 'sink' this island piece
    grid[i][j] = '0';
    // bounds checks and traverse up, down, left, right
    if (i > 0)
        dfs(grid, i - 1, j);
    if (i < grid.length - 1)
        dfs(grid, i + 1, j);
    if (j > 0)
        dfs(grid, i, j - 1);
    if (j < grid[i].length - 1)
        dfs(grid, i, j + 1);
}
