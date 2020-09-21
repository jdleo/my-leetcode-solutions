export {};

function kWeakestRows(mat: number[][], k: number): number[] {
    memo = {};
    // result of weakest rows
    const res: number[] = [];

    // tag each row with its' original index (so when we sort later, we have index)
    for (let i = 0; i < mat.length; i++) {
        mat[i].push(i);
    }

    // sort based on number of soldiers (ascending)
    mat.sort((a, b) => {
        let a_ = getSoldiers(a);
        let b_ = getSoldiers(b);

        if (a_ === b_) {
            return a[a.length - 1] - b[b.length - 1];
        }

        return a_ - b_;
    });

    // go k times, and push original index of row to res
    for (let i = 0; i < k; i++) {
        res.push(mat[i][mat[i].length - 1]);
    }

    // k weakest rows
    return res;
}

// helper method for calculating number of soldiers in row
let memo: { [key: number]: number } = {};
function getSoldiers(row: number[]): number {
    if (row[row.length - 1] in memo) {
        return memo[row[row.length - 1]];
    } else {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i] & 1;
        }
        memo[row[row.length - 1]] = sum;
        return sum;
    }
}
