function goodNodes(root: TreeNode | null, max = Number.MIN_SAFE_INTEGER): number {
    // base case
    if (!root) return 0;
    // set new max (for this path)
    max = Math.max(max, root.val);
    // add 1 to good nodes, if there was no value greater than cur, in path
    // and also the sum of good nodes in left and right subtrees
    return goodNodes(root.left, max) + goodNodes(root.right, max) + (max === root.val ? 1 : 0);
}
