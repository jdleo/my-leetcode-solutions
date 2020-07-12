/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumEvenGrandparent(root: TreeNode | null): number {
    // total sum
    let sum: number = 0;

    // recursive, dfs helper function
    function dfs(root: TreeNode | null): void {
        // if null, break
        if (!root) return;

        // check if this one is even
        if (root.val % 2 === 0) {
            // add its grandchildren (if non-null)
            if (root.left) {
                sum += root.left.left ? root.left.left.val : 0;
                sum += root.left.right ? root.left.right.val : 0;
            }

            if (root.right) {
                sum += root.right.left ? root.right.left.val : 0;
                sum += root.right.right ? root.right.right.val : 0;
            }
        }

        // recursion left and right
        dfs(root.left);
        dfs(root.right);
    }

    // start recursion
    dfs(root);

    return sum;
}
