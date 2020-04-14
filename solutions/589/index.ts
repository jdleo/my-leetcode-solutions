export {};

// typed interface for Node
interface Node {
    val: number;
    children: Node[];
}

const preorder: (root: Node) => number[] = (root) => {
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

    // log to path, here (preorder)
    path.push(root.val);

    // go through children in node
    for (const child of root.children) {
        // call dfs
        dfs(child, path);
    }
};
