/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
    // pre order traversel
    let res = [];

    // our helper function to do the resursive traversal
    function helper(root) {
        // base case
        if (!root) return;

        // pre order, so push val to res BEFORE recursive step
        res.push(root.val);

        // iterate thru children
        for (let child of root.children) {
            // traverse this child's subtree
            helper(child);
        }
    }

    // fill up res using helper
    helper(root);

    return res;
}
