/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = (original, cloned, target) => {
    // start recursion
    return dfs(original, cloned, target);
};

// dfs helper function
const dfs = (original, cloned, target) => {
    if (original === target) {
        // this is the one we want
        return cloned;
    } else if (!original) {
        // shouldn't have gotten here
        return null;
    }
    
    // go left
    let left = dfs(original.left, cloned.left, target);
    if (left) {
        return left;
    }
    
    // go right
    let right = dfs(original.right, cloned.right, target);
    if (right) {
        return right;
    }
}