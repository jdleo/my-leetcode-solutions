// typed interface for Node
interface Node {
    val: number;
    children: Node[];
}

const postorder: (root: Node) => number[] = (root) => {
    // to hold path
    const path: number[] = [];

    // call dfs
    dfs(root, path);

    return path;
};

// dfs helper function
const dfs: (root: Node, path: number[]) => void = (root, path) => {
    // base case
    if (!root) return;

    // go through children in node
    for (const child of root.children) {
        // call dfs
        dfs(child, path);
    }

    // log to path, here (postorder)
    path.push(root.val);
};
