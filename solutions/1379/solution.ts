/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
function getTargetCopy(original, cloned, target) {
    // node to return
    let res = null;

    // dfs helper function
    function dfs(o, c, t) {
        // null check
        if (!o || !c) return;

        // check if we found target already
        if (res) return;

        // check if current node is target
        if (o.val === t.val) res = c;

        // go left and right
        dfs(o.left, c.left, t);
        dfs(o.right, c.right, t);
    }

    // start recursion
    dfs(original, cloned, target);

    return res;
}
