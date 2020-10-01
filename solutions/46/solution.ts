function permute(nums: number[]): number[][] {
    // result list of permutations
    const res: number[][] = [];

    /**
     * helper, dfs method to generate permutations
     * @param cur : the current path, for the permutation
     * @param choices : the candidates of numbers we can draw from
     */
    function generate(cur: number[], choices: Set<number>): void {
        // base case : we finally reached a permutation
        if (cur.length === nums.length) {
            // this is a valid permutation
            res.push(cur);
        } else {
            // go through all possible candidates
            const choicesArray = [...choices];
            for (let i = 0; i < choicesArray.length; i++) {
                // make a copy of set (since we have to remove this choice)
                const newChoices = new Set(choices);
                newChoices.delete(choicesArray[i]);
                // add our choice to path, and keep generating
                generate([...cur, choicesArray[i]], newChoices);
            }
        }
    }

    // start dfs generator
    generate([], new Set(nums));

    return res;
}
