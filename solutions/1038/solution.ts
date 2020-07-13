// ts interface
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function bstToGst(root: TreeNode | null): TreeNode | null {
    // running sum
    let sum: number = 0;

    // recursive helper function
    function inorder(root: TreeNode | null): TreeNode | null {
        // base case
        if (!root) return null;

        // go right
        if (root.right) bstToGst(root.right);

        sum = root.val = sum + root.val;

        // go left
        if (root.left) bstToGst(root.left);

        return root;
    }

    return inorder(root);
}
