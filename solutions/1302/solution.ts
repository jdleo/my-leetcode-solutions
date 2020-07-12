interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function deepestLeavesSum(root: TreeNode | null): number {
    // total sum
    let sum: number = 0;

    // helper function to find max depth
    function maxDepth(root: TreeNode | null): number {
        // base case
        if (!root) return 0;

        // return max of left and right subtrees
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }

    // get max depth of tree
    const depth: number = maxDepth(root);

    // dfs helper function
    function dfs(root: TreeNode | null, level: number): void {
        // base case
        if (!root) return;

        // check if we're at deepest level
        if (level === depth) sum += root.val;

        // go left, right
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    // start dfs
    dfs(root, 1);

    return sum;
}
