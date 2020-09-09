function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    // base cases
    if (!t1) return t2;
    if (!t2) return t1;

    // neither are null, so we need to combine the nodes (sum)
    // we will just use t1 for the merge
    t1.val += t2.val;

    // set left and right subtrees
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    // result is in t1
    return t1;
}
