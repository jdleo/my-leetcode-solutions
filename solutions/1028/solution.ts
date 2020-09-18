function recoverFromPreorder(S: string): TreeNode | null {
    // current depth
    let depth = 0;
    // iterate thru preorder string
    for (let i = 0; i < S.length; i++) {
        // check if this is a depth marker
        if (S.charAt(i) === '-') {
            depth++;
        } else {
            // insert this number, at required depth
        }
    }
    return null;
}

/**
 * Helper method to recursively insert number into BST
 * @param val : value to insert
 * @param depth : depth this value must be at
 */
function insert(root: TreeNode | val, val: number, depth: number): TreeNode | null {
    // base case
    if (!root) return new TreeNode(val);

    // check if this the depth

    return null;
}
