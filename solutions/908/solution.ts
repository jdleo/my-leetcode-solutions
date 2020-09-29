function smallestRangeI(A: number[], K: number): number {
    // min, max of A
    let min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;
    // get min and max in A
    for (let i = 0; i < A.length; i++) {
        min = Math.min(min, A[i]);
        max = Math.max(max, A[i]);
    }
    // heck if we can make these equal using Kc
    if (max - K - (min + K) <= 0) return 0;
    // just return the min difference
    return max - K - (min + K);
}
