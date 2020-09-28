function allCellsDistOrder(R: number, C: number, r0: number, c0: number): number[][] {
    // path of nodes visited
    const res: number[][] = [];

    // queue for BFS (initially has starting node)
    let queue: number[][] = [[r0, c0]];

    // set for seen
    const seen: Set<string> = new Set([[r0, c0].toString()]);

    // go while queue still has nodes to visit
    while (queue.length > 0) {
        // add everything in queue to res (visited)
        res.push(...queue);

        // new queue (next nodes to visit)
        const next: number[][] = [];

        // go through coordinate in queue
        queue.forEach(([i, j]) => {
            // up down left right
            [
                [i - 1, j],
                [i + 1, j],
                [i, j - 1],
                [i, j + 1],
            ].forEach(([i, j]) => {
                // bounds check, and also make sure not seen
                if (i >= 0 && i < R && j >= 0 && j < C && !seen.has([i, j].toString())) {
                    next.push([i, j]);
                    seen.add([i, j].toString());
                }
            });
        });

        // set new queue
        queue = next;
    }

    return res;
}
