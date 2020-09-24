function mctFromLeafValues(arr: number[]): number {
    // dp array
    const dp: number[][] = [];

    // dfs helper method
    function dfs(i: number, j: number): number {
        // initialize dp if it doesnt exist for this val
        if (!dp[i]) dp[i] = [];
        // check if only one element left
        if (j <= i) return 0;
        // check if dp exists for this bound
        if (dp[i][j]) return dp[i][j];
        // minimum cost
        let minCost = Number.MAX_SAFE_INTEGER;
        // go from the right of i, to j
        for (let k = i + 1; k <= j; k++) {
            minCost = Math.min(
                dfs(i, k - 1) + dfs(k, j) + Math.max(...arr.slice(i, k)) * Math.max(...arr.slice(k, j + 1)),
                minCost
            );
        }
        dp[i][j] = minCost;
        return dp[i][j];
    }

    // start dfs with first leaf, and last leaf as bounds
    return dfs(0, arr.length - 1);
}
