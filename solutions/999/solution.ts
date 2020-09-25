function numRookCaptures(board: string[][]): number {
    // number of pawn that can be captured
    let res = 0;
    // first, iterate thru board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // check if this is the rook
            if (board[i][j] === 'R') {
                // check up
                for (let k = i - 1; k >= 0; k--) {
                    if (board[k][j] === 'p') {
                        res++;
                        break;
                    } else if (board[k][j] === 'B') break;
                }
                // check down
                for (let k = i + 1; k < board.length; k++) {
                    if (board[k][j] === 'p') {
                        res++;
                        break;
                    } else if (board[k][j] === 'B') break;
                }
                // check left
                for (let k = j - 1; k >= 0; k--) {
                    if (board[i][k] === 'p') {
                        res++;
                        break;
                    } else if (board[i][k] === 'B') break;
                }
                // check right
                for (let k = j + 1; k < board[i].length; k++) {
                    if (board[i][k] === 'p') {
                        res++;
                        break;
                    } else if (board[i][k] === 'B') break;
                }
                break;
            }
        }
    }

    return res;
}
