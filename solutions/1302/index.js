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
const deepestLeavesSum = (root) => {
  // result sum (its a treenode so it can pass-by-reference)
  let sum = new TreeNode(0);

  // start recursion (at level 0)
  dfs(root, sum, maxDepth(root, 0), 0);

  return sum.val;
};

// helper function to find max depth
const maxDepth = (root, height) => {
  // null check
  if (!root) return height - 1;

  // recursively find max depth
  return Math.max(maxDepth(root.left, height + 1), maxDepth(root.right, height + 1));
};

// dfs helper function
const dfs = (root, sum, deepest, height) => {
  // check if DEEPEST leaf
  if (root.left === null && root.right === null && height === deepest) {
    // add to running sum
    sum.val += root.val;
  } else {
    // traverse down left subtree
    if (root.left) dfs(root.left, sum, deepest, height + 1);
    // traverse down right subtree
    if (root.right) dfs(root.right, sum, deepest, height + 1);
  }
};
