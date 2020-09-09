function sortArrayByParity(A: number[]): number[] {
    // two pointers (low, and high)
    let lo: number = 0;
    let hi: number = A.length - 1;

    // go until pointers meet
    while (lo < hi) {
        // check if lo is odd
        if (A[lo] % 2 === 1) {
            // check if hi is even
            if (A[hi] % 2 === 0) {
                // they can be swapped
                [A[lo], A[hi]] = [A[hi], A[lo]];

                // increase  lo pointer
                lo++;
            }
            // decrease back pointer no matter what,
            // since we've taken care of it either way
            hi--;
        } else {
            // this is already taken care of, advance lo
            lo++;
        }
    }

    return A;
}
