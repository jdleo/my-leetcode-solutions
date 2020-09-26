function maxAncestorDiff(root: TreeNode | null, max = 0, min = 10 ** 6): number {
    // base case, root is null, juse return current distance
    if (!root) return max - min;
    // set new min and max values seen in this path
    max = Math.max(max, root.val);
    min = Math.min(min, root.val);

    // return max of left and right subtrees
    return Math.max(
        maxAncestorDiff(root.left, max, min),
        maxAncestorDiff(root.right, max, min)
    );
}
