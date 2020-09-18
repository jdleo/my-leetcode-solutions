function countBattleships(board: string[][]): number {
    // helper method to 'sink' the current ship
    // this just turns all 'X'it finds using DFS into '.'
    function sink(i: number, j: number): void {
        // base case : out of bounds
        if (i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1) return;
        // base case : not a ship
        if (board[i][j] === '.') return;
        // sink it
        board[i][j] = '.';
        // go up, down, left, right
        sink(i - 1, j);
        sink(i + 1, j);
        sink(i, j - 1);
        sink(i, j + 1);
    }

    // number of ships
    let ships = 0;

    // iterate thru board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // check if we encounter a ship
            if (board[i][j] === 'X') {
                ships++;
                sink(i, j);
            }
        }
    }

    return ships;
}
