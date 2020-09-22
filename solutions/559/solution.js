/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    // base case : return 0, since this node has no depth
    if (!root) return 0;
    // max depth of all children
    let max = 0;
    // iterate thru children
    for (let child of root.children) {
        // set max if max
        max = Math.max(max, maxDepth(child));
    }
    // return 1 + max depth of all children (1 is because this node has depth)
    return 1 + max;
};
