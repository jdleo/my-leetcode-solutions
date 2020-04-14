const preorder = (root) => {
    // to hold path
    const path = [];
    // call dfs
    dfs(root, path);
    return path;
};
// dfs helper function
const dfs = (root, path) => {
    // base case
    if (!root)
        return;
    // log to path, here (preorder)
    path.push(root.val);
    // go through children in node
    for (const child of root.children) {
        // call dfs
        dfs(child, path);
    }
};
