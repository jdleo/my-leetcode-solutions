function sumRootToLeaf(root: TreeNode | null): number {
    // total sum
    let sum: number = 0;

    /**
     * helper function to recursively traverse tree
     * @param root : current root
     * @param path : path as a binary number (110 = 6 = 1 -> 1 -> 0)
     */
    function dfs(root: TreeNode | null, path: number) {
        // base case : root is null
        if (!root) return;

        // add this number to path by left shifting and adding number
        path <<= 1;
        path += root.val;

        // base case : root is leaf
        if (!root.left && !root.right) {
            // return path, and break out of function
            sum += path;
            return;
        }

        // keep traversing
        dfs(root.left, path);
        dfs(root.right, path);
    }

    // traverse
    dfs(root, 0);

    return sum;
}
