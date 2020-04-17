function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
    // base case
    if (!root) return null;

    // boundary check
    if (root.val < L || root.val > R) {
        // need to trim
        const right_trimmed = trimBST(root.right, L, R);
        // check if after trimming, this is valid tree
        if (right_trimmed) {
            root = right_trimmed;
        } else {
            const left_trimmed = trimBST(root.left, L, R);

            // check left
            if (left_trimmed) {
                root = left_trimmed;
            } else {
                // just set null
                root = null;
            }
        }
    } else {
        // set left and right subtrees as normal
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
    }

    // after the trimming, return root
    return root;
};
