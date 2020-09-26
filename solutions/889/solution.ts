function constructFromPrePost(pre: number[], post: number[]): TreeNode | null {
    // pointers for pre and post orders
    let preIdx = 0,
        postIdx = 0;

    // helper method to construct tree
    function helper(): TreeNode | null {
        // build current root, set val to number in preorder (also increment pre idx)
        const root: TreeNode = new TreeNode(pre[preIdx++]);
        // check if this value doesnt match the order we're on in postorder
        if (root.val !== post[postIdx]) {
            // build left subtree
            root.left = helper();
        }
        // check if this value doesnt match the order we're in again
        if (root.val !== post[postIdx]) {
            // build right subtree
            root.right = helper();
        }
        postIdx++;
        return root;
    }

    // start recursion
    return helper();
}
