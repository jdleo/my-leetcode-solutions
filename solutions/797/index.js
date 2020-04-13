/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = (graph) => {
  // paths
  const paths = [];

  // call dfs
  dfs(graph, 0, [0], paths, graph.length - 1);

  return paths;
};

/**
 * dfs helper function
 * @param {number[][]} graph
 * @param {number} ptr pointer for node we are on
 * @param {number[]} path current path
 * @param {number[]} paths all paths
 * @param {number} target
 */
const dfs = (graph, ptr, path, paths, target) => {
  // check if we found the target
  if (graph[ptr].includes(target)) {
    // push current path to paths
    paths.push([...path, target]);
  }

  // go through all children of this node
  graph[ptr].forEach((child) => {
    // call dfs and use child as pointer
    dfs(graph, child, [...path, child], paths, target);
  });
};
