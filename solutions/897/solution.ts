function increasingBST(root: TreeNode | null, tail: TreeNode | null = null): TreeNode | null {
    // check if we're at the end
    if (!root) return tail;

    // result node
    const res: TreeNode | null = increasingBST(root.left, root);

    // set left to null (our 'visit' inorder)
    root.left = null;

    // build right subtree
    root.right = increasingBST(root.right, tail);

    return res;
}
