const postorder = (root) => {
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
    // go through children in node
    for (const child of root.children) {
        // call dfs
        dfs(child, path);
    }
    // log to path, here (postorder)
    path.push(root.val);
};
