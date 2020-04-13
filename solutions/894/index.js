/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (N) {
  // array to hold trees
  const trees = [];

  // call recursive method
  generateTrees(N, 0, null, trees);

  return trees;
};

/**
 * recursive helper function to generate trees
 * @param {number} N
 * @param {number} count count of nodes generated thus far
 * @param {TreeNode} cur current tree generated thus far
 * @param {TreeNode[]} trees all trees
 * @return {void}
 */
const generateTrees = (N, count, cur, trees) => {
  // check if count is N or N-1 (cant generate anything further)
  if (count === N || count === N - 1) trees.push(cur);

  // make new tree node
  cur = new TreeNode(0);

  //
};
