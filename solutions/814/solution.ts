function pruneTree(root: TreeNode | null): TreeNode | null {
    // base case (root is null)
    if (!root) return null;

    // prune left and right subtrees
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    // check if this node is a leaf, AND has 0 val
    if (!root.left && !root.right && root.val === 0) {
        // this is a 0 leaf, and needs to be pruned
        // since a leaf of 0 IS a subtree not containing 1s
        return null;
    }

    return root;
}
