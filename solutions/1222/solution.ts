function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    // starting at king, get closest queen in any direction, and thats a queen that can reach
    const res: number[][] = [];
    // set of queens (for o(1) lookups)
    const seen: Set<string> = new Set(queens.map((queen) => queen.toString()));

    // check all 9 directions
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            // go 8 steps (since max board size is 8)
            for (let k = 1; k < 8; k++) {
                // generate current x,y coordinate
                const [x, y] = [king[0] + i * k, king[1] + j * k];
                // check if this is in queens (and break, because we want closest)
                if (seen.has([x, y].toString())) {
                    res.push([x, y]);
                    break;
                }
            }
        }
    }
    return res;
}
