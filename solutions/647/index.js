function countSubstrings(s) {
    // count of palindromic substrings
    let count = 0;
    // dp array (size of string) (filled with 0s initially)
    const dp = [...Array(s.length)].map((e) => Array(s.length).fill(0));
    // outer loop is to go through all substring lengths
    for (let l = 0; l < s.length; l++) {
        // inner loop is to get all substrings of those lengths
        for (let i = 0; i + l < s.length; i++) {
            // get j, which is left pointer plus length
            const j = i + l;
            if (l === 0) {
                // this means we're on the diagonal, everything is palindrome
                dp[i][j] = 1;
                count++;
            }
            else if (l === 1) {
                // only check if characters at end are same
                if (s.charAt(i) === s.charAt(j)) {
                    dp[i][j] = 1;
                    count++;
                }
            }
            else {
                // check if characters at ends are equal
                // AND check if substring in between them is palindrome
                if (s.charAt(i) === s.charAt(j) &&
                    dp[i + 1][j - 1] === 1) {
                    dp[i][j] = 1;
                    count++;
                }
            }
        }
    }
    return count;
}
