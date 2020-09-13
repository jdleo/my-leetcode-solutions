function judgeCircle(moves: string): boolean {
    // x and y starting coordinates
    let x = 0,
        y = 0;

    // iterate thru chars
    for (let move of moves) {
        // switch char
        switch (move) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }
    }

    // check if back at origin
    return x === 0 && y === 0;
}
