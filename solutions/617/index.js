/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  // base case
  if (!t1 && !t2) return null;

  // get values (if null, make them zero)
  const val1 = t1 != null ? t1.val : 0;
  const val2 = t2 != null ? t2.val : 0;

  // create new node with values added together (merged)
  const res = new TreeNode(val1 + val2);

  // recursively set left and right subtrees
  // (do ternary operation to pass null if null)
  res.left = mergeTrees(t1 != null ? t1.left : null, t2 != null ? t2.left : null);
  res.right = mergeTrees(t1 != null ? t1.right : null, t2 != null ? t2.right : null);

  // return result tree
  return res;
};
