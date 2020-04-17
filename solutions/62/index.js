function uniquePaths(m, n) {
    // fill nxm dp array with 0s
    const dp = [...Array(n)].map((a) => Array(m).fill(0));
    // fill top row with 1s (only one way to get here)
    for (let i = 0; i < m; i++) {
        dp[0][i] = 1;
    }
    // fill first column with 1s (only one way to get here)
    for (let j = 0; j < n; j++) {
        dp[j][0] = 1;
    }
    // iterate through 2d array
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            // number of ways to get to this point
            // is number of ways of top and left
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    // result is in last cell
    return dp[n - 1][m - 1];
}
