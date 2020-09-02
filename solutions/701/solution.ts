function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    // base case
    if (!root) return new TreeNode(val);

    // compare val to current root's val
    if (val > root.val) {
        // insert right subtree
        root.right = insertIntoBST(root.right, val);
    } else {
        // insert left subtree
        root.left = insertIntoBST(root.left, val);
    }

    return root;
}
