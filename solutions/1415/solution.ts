function getHappyString(n: number, k: number): string {
    // total number of strings we've generated
    let happy: number = 0;

    /**
     * helper dfs method to simulate generating combinations
     * @param l : length of current string generated
     * @param p : previous character taken
     */
    function dfs(l: number, p: number): string {
        // base case (we generated string of length k)
        if (l === n) {
            happy++;
        } else {
            // go through possible letters we can take
            for (let i = 0; i < 3; i++) {
                // make sure it's not equal to last char taken
                if (i !== p) {
                    const res = dfs(l + 1, i);
                    // check if this is k'th sequence
                    if (happy === k) return String.fromCharCode(i + 97) + res;
                }
            }
        }

        // this means a k'th combination doesn't exist
        return '';
    }

    // return result from our helper dfs function
    return dfs(0, -1);
}
