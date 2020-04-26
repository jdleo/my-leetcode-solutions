function countServers(grid) {
    // arrays representing rows and columns machine counts
    const rows = Array(grid.length).fill(0);
    const cols = Array(grid[0].length).fill(0);
    // iterate thru grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // check if machine
            if (grid[i][j] === 1) {
                // increment rows and cols counts
                rows[i]++;
                cols[j]++;
            }
        }
    }
    // connected machine count
    let m = 0;
    // iterate thru grid again
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // this is a connected machine only if:
            // 1. this is a machine
            // 2. row or col has at least 2 machines in it
            grid[i][j] === 1 && (rows[i] > 1 || cols[j] > 1)
                ? m++
                : false;
        }
    }
    return m;
}
