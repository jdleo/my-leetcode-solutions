function longestCommonSubsequence(text1, text2) {
    // create dp array of size text1+1 x text2+1 filled w/ zeros
    const dp = [
        ...Array(text1.length + 1),
    ].map((e) => Array(text2.length + 1));
    // iterate i by j
    for (let i = 0; i <= text1.length; i++) {
        for (let j = 0; j <= text2.length; j++) {
            // if this is first row, make it a 0 (impossible to have substring here)
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            }
            else if (text1.charCodeAt(i - 1) ===
                text2.charCodeAt(j - 1)) {
                // last characters match in both strings,
                // so this is a value substring, take length from last (if any)
                // and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                // take max of top or left (longer substring)
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // result is in bottom right cell
    return dp[text1.length][text2.length];
}
