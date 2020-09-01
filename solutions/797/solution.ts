function allPathsSourceTarget(graph: number[][]): number[][] {
    // paths
    const paths: number[][] = [];

    // recursive dfs helper function
    // note: this graph is acyclic so we don't need a "seen" set
    function dfs(currentPath: number[], currentIndex: number): void {
        // base case (we reached node N-1)
        if (currentIndex === graph.length - 1) {
            // push to paths, and return
            paths.push(currentPath);
            return;
        }

        // go thru all 'children' of this node
        graph[currentIndex].forEach((child) => {
            // call this function recursively, and pass this child to current path
            dfs([...currentPath, child], child);
        });
    }

    // start recursion
    dfs([0], 0);

    return paths;
}
