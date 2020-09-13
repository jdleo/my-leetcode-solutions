function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    // check if root is null, OR this is target node
    if (!root || root.val === val) {
        return root;
    } else {
        // check val and search for it based on rules of BST
        // 1. if val is < root.val, search left subtree
        // 2. val is > root.val, so search right subtree
        return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
    }
}
