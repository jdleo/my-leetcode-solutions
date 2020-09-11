function uniquePathsIII(grid: number[][]): number {
    // get grid size
    const [m, n] = [grid.length, grid[0].length];

    // number of unique paths
    let res: number = 0;

    // number of 0 squares
    let zeroes: number = 0;

    /**
     * dfs helper function
     * @param cur : current coordinates
     * @param seen : set of seen positions
     * @param count : count of squares walked over
     */
    function dfs(cur: number[], seen: Set<string>, count: number) {
        // base case (we've already seen this coordinate)
        if (seen.has(cur.toString())) return;

        // get i and j coordinates
        const [i, j] = cur;

        // base case (out of bounds)
        if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return;

        // base case (this is an obstacle)
        if (grid[i][j] === -1) return;

        // check if we hit an ending square
        if (grid[i][j] === 2) {
            // check if we walked over every square in this path
            if (count - 1 === zeroes) res++;
            return;
        }

        // add this coordinate to a shallow copy of seen
        const seen_copy = new Set(seen);
        seen_copy.add(cur.toString());

        // go up, down, left, right
        dfs([i - 1, j], seen_copy, count + 1);
        dfs([i + 1, j], seen_copy, count + 1);
        dfs([i, j - 1], seen_copy, count + 1);
        dfs([i, j + 1], seen_copy, count + 1);
    }

    // iterate thru grid and count 0s
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) zeroes++;
        }
    }

    // iterate thru grid to find starting square
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // we found starting square, start DFS
                dfs([i, j], new Set(), 0);
            }
        }
    }

    return res;
}
