function distributeCoins(root: TreeNode | null): number {
    // result (how many moves)
    let res = 0;

    // local reference to abs
    const abs = Math.abs;

    // helper dfs method to traverse tree
    function dfs(root: TreeNode | null): number {
        // base case
        if (!root) return 0;

        // get moves required in left and right subtrees
        const left = dfs(root.left);
        const right = dfs(root.right);

        // result is just moves required of both subtrees
        res += abs(left) + abs(right);

        // result is just moves required for this val, + left and right
        return root.val - 1 + left + right;
    }

    // start dfs
    dfs(root);

    return res;
}
