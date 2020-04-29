// interface for TreeNode
interface TreeNode {
    val: number;
    left: TreeNode | undefined;
    right: TreeNode | undefined;
}

function maxPathSum(root: TreeNode): number {
    // current max path sum
    let max: number = -(2 ** 64);

    dfs(root);

    return max;

    /**
     * helper method for dfs traversal
     * @param root
     * @return
     */
    function dfs(root: TreeNode): number {
        // base case
        if (!root) return 0;

        // get max of left and right
        let l: number = dfs(root.left);
        let r: number = dfs(root.right);

        // cap both at 0
        if (l < 0) l = 0;
        if (r < 0) r = 0;

        // check if continuing path is better
        if (l + r + root.val > max) max = l + r + root.val;

        // take greater of left and right subtrees
        return (root.val += Math.max(l, r));
    }
}
