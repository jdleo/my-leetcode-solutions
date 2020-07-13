// ts interface
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
    // total sum
    let sum: number = 0;

    // dfs helper method
    function dfs(root: TreeNode | null): void {
        // base case
        if (!root) return;

        // check if val in range
        if (L <= root.val && root.val <= R) {
            // add to sum
            sum += root.val;
        }

        // go left and right
        dfs(root.left);
        dfs(root.right);
    }

    // start recursion
    dfs(root);

    return sum;
}
