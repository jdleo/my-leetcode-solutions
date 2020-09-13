function sortedSquares(A: number[]): number[] {
    // two pointers
    let lo = 0;
    let hi = A.length - 1;

    // result
    const res: number[] = Array(A.length);

    // iterate backwards thru array
    for (let i = A.length - 1; i >= 0; i--) {
        // check the bigger absolute value
        if (Math.abs(A[lo]) > Math.abs(A[hi])) {
            // push the number at lo, squared, and move lo pointer up
            res[i] = A[lo] * A[lo++];
        } else {
            // push the number at hi, squared, and move hi pointer down
            res[i] = A[hi] * A[hi--];
        }
    }

    return res;
}
