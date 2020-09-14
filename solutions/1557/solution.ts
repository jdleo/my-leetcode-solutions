function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    // really we just need to list all vertices of in-degree 0
    // since a solution is guaranteed, if we list all the in-degree 0 vertices,
    // then that means from those, we can get to all other ones
    // and we must at least list those since this is a DIRECTED graph

    // create a set of numbers representing all nodes in graph (0...n-1)
    const nodes: Set<number> = new Set([...Array(n)].map((_, i) => i));

    // iterate thru edges
    for (let edge of edges) {
        // for this graph relationship a -> b,
        // delete b from set, because that means it no longer has in-degree 0
        nodes.delete(edge[1]);
    }

    // the nodes left in set are the ones with in-degree 0
    return Array.from(nodes);
}
