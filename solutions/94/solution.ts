function inorderTraversal(root: TreeNode | null): number[] {
    // output array (inorder traversal path)
    const res: number[] = [];

    // helper method to perform recursive inorder
    function inorder(root: TreeNode | null): void {
        // base case
        if (!root) return;

        // traverse left
        inorder(root.left);
        // push to res
        res.push(root.val);
        // traverse right
        inorder(root.right);
    }

    // start recursion starting at root
    inorder(root);

    return res;
}
