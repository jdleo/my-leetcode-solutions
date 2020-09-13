function maxLevelSum(root: TreeNode | null): number {
    // array representing level sums where levels[i] = sum at level i
    const levels: number[] = [];

    function dfs(root: TreeNode | null, level: number): void {
        // base case
        if (!root) return;

        // add this value to this level's sum (if it doesnt exist, make the level)
        if (level === levels.length) levels.push(0);
        levels[level] += root.val;

        // go down left and right subtrees
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    // start dfs at first node, first level
    dfs(root, 1);

    // max level
    let max: number = levels.length - 1;

    // iterate backwards thru levels
    // (so we will get the lowest level max)
    for (let i = levels.length - 2; i >= 0; i--) {
        // set max level
        if (levels[i] >= levels[max]) max = i;
    }

    return max;
}
