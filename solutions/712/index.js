function minimumDeleteSum(s1, s2) {
    // empty dp array size of s1+1 x s2+1
    const dp = [
        ...Array(s1.length + 1),
    ].map((_) => Array(s2.length + 1));
    // base case (means, taking no characters out would be 0 cost)
    dp[0][0] = 0;
    // fill top row with just left dp + char code at j-1
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
    // fill first column with just top dp + char code at i-1
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    // now iterate thru other cells we haven't filled
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            // check if characters at these positions are equal
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                // this means, strings are equal at this point,
                // no deletions necessary, take top left
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                // take the min of s1's current substring, with cost of s1's char deleted
                // or s2's current substring, with cost of s2's char deleted
                dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
            }
        }
    }
    // result is in bottom right cell
    return dp[s1.length][s2.length];
}
