function minimumAbsDifference(arr: number[]): number[][] {
    // result array of all pairs
    let res: number[][] = [];
    // sort numbers ascending
    arr.sort((a, b) => a - b);
    // local ref to math.abs
    const abs = Math.abs;
    // current minimum difference
    let minDiff = Number.MAX_SAFE_INTEGER;
    // iterate thru array
    for (let i = 0; i < arr.length - 1; i++) {
        // current pair difference
        const diff = abs(arr[i + 1] - arr[i]);
        // check if this diff is less than min diff
        if (diff < minDiff) {
            // set new min diff, reset res, and also add this pair to it
            minDiff = diff;
            res = [[arr[i], arr[i + 1]]];
        }
        // also, check if this diff is same as min diff
        else if (diff === minDiff) {
            // push this pair to res
            res.push([arr[i], arr[i + 1]]);
        }
    }

    return res;
}
