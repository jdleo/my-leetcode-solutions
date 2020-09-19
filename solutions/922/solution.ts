function sortArrayByParityII(A: number[]): number[] {
    // length of array, and pointers for evens and odds
    const n = A.length;
    let [i, j] = [0, 1];

    // go until a pointer reaches end of array
    while (i < n && j < n) {
        // keep advancing odd and even pointers until they're out-of-place
        // (by out-of-place, I mean, that they don't match the index parity)
        while (i < n && A[i] % 2 === 0) i += 2;
        while (j < n && A[j] % 2 === 1) j += 2;

        // swap these numbers (because they're both out-of-place)
        // but only if not out of bounds
        if (i < n && j < n) [A[i], A[j]] = [A[j], A[i]];
    }

    // result is in A
    return A;
}
