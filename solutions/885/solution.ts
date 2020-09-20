function spiralMatrixIII(R: number, C: number, r0: number, c0: number): number[][] {
    // direction x, direction y, stride length
    let [dx, dy, n] = [0, 1, 0];
    // result path
    const res: number[][] = [];
    // keep going until we've visited all possible tiles
    while (res.length < R * C) {
        // make our stride
        for (let i = 0; i < ~~(n / 2) + 1; i++) {
            // bounds check
            if (0 <= r0 && r0 < R && 0 <= c0 && c0 < C) {
                // push current coordinate to res
                res.push([r0, c0]);
            }
            // stride
            [r0, c0] = [r0 + dx, c0 + dy];
        }

        // change directions (spiral around), also increase stride
        [dx, dy, n] = [dy, -dx, n + 1];
    }
    return res;
}
