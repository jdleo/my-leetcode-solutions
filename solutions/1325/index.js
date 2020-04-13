/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = (root, target) => {
  // base case
  if (!root) return null;

  // keep traversing
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  // if leaf, and target (bubble down)
  if (!root.left && !root.right && root.val === target) return null;

  // return final tree with leaves deleted
  return root;
};
