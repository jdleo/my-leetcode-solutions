function minPathSum(grid) {
    // get m and n
    const m = grid.length;
    const n = grid[0].length;
    // dp array (filled with 0s initially)
    const dp = [...Array(m)].map((e) => Array(n).fill(0));
    // first value is just its own
    dp[0][0] = grid[0][0];
    // first row is just its own plus the left dp
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    // first colum is just its own plus top dp
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    // now go thru rest of dp array
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // take minimum path of left and top dp
            dp[i][j] =
                grid[i][j] +
                    Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    // result is in last sell
    return dp[m - 1][n - 1];
}
