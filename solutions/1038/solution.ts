// ts interface
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

// running sum
let sum: number = 0;

function bstToGst(root: TreeNode | null): TreeNode | null {
    // base case
    if (!root) return null;

    // go right
    if (root.right) bstToGst(root.right);

    sum = root.val = sum + root.val;

    // go left
    if (root.left) bstToGst(root.left);

    return root;
}
