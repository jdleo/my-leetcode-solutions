// class to solve this
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ? val : 0;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

function bstFromPreorder(preorder: number[]): TreeNode | null {
    // result node
    let res: TreeNode | null = null;

    // iterate thru preorder
    for (let i = 0; i < preorder.length; i++) {
        // insert
        res = insert(res, preorder[i]);
    }

    return res;
}

// recursive helper function to insert new node into binary tree
function insert(root: TreeNode | null, val: number): TreeNode | null {
    // base case
    if (!root) return new TreeNode(val);

    // check if val is greater than root's val
    if (val > root.val) {
        // insert right
        root.right = insert(root.right, val);
    } else {
        // insert left
        root.left = insert(root.left, val);
    }

    return root;
}
