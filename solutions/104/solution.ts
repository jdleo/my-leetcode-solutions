function maxDepth(root: TreeNode | null): number {
    // base case
    if (!root) return 0;
    // return 1 + max of left and right subtree
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
