function intervalIntersection(A: number[][], B: number[][]): number[][] {
    // base case
    if (A.length === 0 || B.length === 0) return [];
    // result
    const res: number[][] = [];
    // pointers for list A and B
    let a = 0,
        b = 0;

    // go while there are still intervals to compare
    while (a < A.length && b < B.length) {
        // get maximum of start times, minimum of end times
        const startMax = Math.max(A[a][0], B[b][0]);
        const endMin = Math.min(A[a][1], B[b][1]);

        // check if they intersected
        if (startMax <= endMin) {
            // create a new interval which is the intersection
            res.push([startMax, endMin]);
        }

        // increase the pointer which had the lowest end time
        if (endMin === A[a][1]) {
            a++;
        } else {
            b++;
        }
    }

    return res;
}
