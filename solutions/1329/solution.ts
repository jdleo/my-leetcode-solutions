function diagonalSort(mat: number[][]): number[][] {
    // to keep track of diagonals
    const map: Map<number, number[]> = new Map();

    // iterate thru matrix 1st time
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // if diagonal isnt in our map, add it, then push this number
            if (!map.has(j - i)) map.set(j - i, []);
            map.set(j - i, [...map.get(j - i)!, mat[i][j]]);
        }
    }

    // sort all numbers in each diagonal
    const arr = Array.from(map.keys());
    for (let i = 0; i < arr.length; i++) {
        // get current diagonal
        const d = map.get(arr[i])!;
        console.log(d);
        d.sort();
        map.set(arr[i], d);
    }

    // iterate thru matrix 2nd time
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // set this number to the corresponding diagonal (sorted now)
            mat[i][j] = map.get(j - i)![0];

            // get rid of the first number
            map.set(j - i, map.get(j - i)!.slice(1));
        }
    }

    return mat;
}
