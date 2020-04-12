/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = (root1, root2) => {
  // res array
  const res = [];

  // inorder traverse both trees
  inorder(root1, res);
  inorder(root2, res);

  // sort
  res.sort((a, b) => a - b);

  // result
  return res;
};

/**
 * recursive inorder traversal
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {void}
 */
const inorder = (root, arr) => {
  // base case
  if (!root) return;

  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
};
