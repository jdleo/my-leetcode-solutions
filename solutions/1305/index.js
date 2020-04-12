/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = (root1, root2) => {
  // res array
  const res = [];

  // call recursive helper function
  inorder(root1, root2, res);

  // result
  return res;
};

/**
 * recursive inorder traversal
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number[]} arr
 * @return {void}
 */
const inorder = (root1, root2, arr) => {
  // base cases
  if (!root1 && !root2) return;

  // if either is null, make the value something very large
  const val1 = root1 != null ? root1.val : Infinity;
  const val2 = root2 != null ? root2.val : Infinity;

  console.log(val1, val2);

  // compare
  if (val1 < val2) {
    // do regular inorder, but traverse root1
    inorder(root1.left, root2, arr);
    arr.push(val1);
    inorder(root1.right, root2, arr);
  } else {
    // do regular inorder, but traverse root2
    inorder(root1, root2.left, arr);
    arr.push(val2);
    inorder(root2, root2.right, arr);
  }
};
