function balanceBST(root: TreeNode | null): TreeNode | null {
    // inorder array of nodes
    const arr: TreeNode[] = [];

    // helper function for inorder traversal
    function inorder(root: TreeNode | null): void {
        // base case
        if (!root) return;

        // traverse left subtree
        inorder(root.left);
        // push to output array
        arr.push(root);
        // traverse right subtree
        inorder(root.right);
    }

    // helper function to construct balanced tree
    // note, we are inorder, so each tree's root should be the middle
    // to ensure full balance
    function construct(lo: number, hi: number): TreeNode | null {
        // base case
        if (lo > hi) return null;

        // get the middle between lo and hi pointers
        const mid: number = (lo + hi) >>> 1;

        // get middle node (new root)
        const new_root: TreeNode = arr[mid];

        // construct left and right subtrees
        new_root.left = construct(lo, mid - 1);
        new_root.right = construct(mid + 1, hi);

        // return new root with its modified subtrees
        return new_root;
    }

    // call inorder to populate array
    inorder(root);

    // construct with inorder array
    return construct(0, arr.length - 1);
}
