/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  // diameter
  let diameter = 0;

  /**
   * recursive helper function
   * @param {TreeNode} node
   */
  const dfs = (node) => {
    if (!node) return 0;

    // get left diameter
    const l = dfs(node.left);
    const r = dfs(node.right);

    // new diameter is either current, or left + right
    diameter = Math.max(diameter, l + r);

    // update largest path
    return 1 + Math.max(l, r);
  };

  // perform dfs
  dfs(root);

  return diameter;
};
