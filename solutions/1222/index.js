/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
function queensAttacktheKing(queens, king) {
    // result of coordinates
    const res = [];
    // set of queens
    const queen_set = new Set();
    // fill queens
    for (const queen of queens) {
        queen_set.add(queen[0] * 8 + queen[1]);
    }
    up: for (let i = king[0], j = king[1]; i >= 0; i--) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break up;
        }
    }
    down: for (let i = king[0], j = king[1]; i < 8; i++) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break down;
        }
    }
    left: for (let i = king[0], j = king[1]; j >= 0; j--) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break left;
        }
    }
    right: for (let i = king[0], j = king[1]; j < 8; j++) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break right;
        }
    }
    upperleft: for (let i = king[0], j = king[1]; i >= 0 && j >= 0; i--, j--) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break upperleft;
        }
    }
    upperright: for (let i = king[0], j = king[1]; i >= 0 && j < 8; i--, j++) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break upperright;
        }
    }
    lowerleft: for (let i = king[0], j = king[1]; i < 8 && j >= 0; i++, j--) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break lowerleft;
        }
    }
    lowerright: for (let i = king[0], j = king[1]; i < 8 && j < 8; i++, j++) {
        // check if found queen
        if (queen_set.has(i * 8 + j)) {
            // push coordinate to res and break loop
            res.push([i, j]);
            break lowerright;
        }
    }
    return res;
}
