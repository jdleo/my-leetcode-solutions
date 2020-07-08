class SubrectangleQueries {
    // to store our rectangle
    private rectangle: number[][];

    constructor(rectangle: number[][]) {
        this.rectangle = rectangle;
    }

    updateSubrectangle(
        row1: number,
        col1: number,
        row2: number,
        col2: number,
        newValue: number
    ): void {
        // iterate from row to row, col to col
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                // update value
                this.rectangle[i][j] = newValue;
            }
        }
    }

    getValue(row: number, col: number): number {
        return this.rectangle[row][col];
    }
}
