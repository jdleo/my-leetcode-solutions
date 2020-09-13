/**
 * @param {Node} root
 * @return {number[]}
 */
function postorder(root) {
    // post order traversel
    let res = [];

    // our helper function to do the resursive traversal
    function helper(root) {
        // base case
        if (!root) return;

        // iterate thru children
        for (let child of root.children) {
            // traverse this child's subtree
            helper(child);
        }

        // post order, so push val to res AFTER recursive step
        res.push(root.val);
    }

    // fill up res using helper
    helper(root);

    return res;
}
