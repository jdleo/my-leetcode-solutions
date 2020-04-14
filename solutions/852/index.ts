function peakIndexInMountainArray(A: number[]): number {
    // lo and hi pointers for binary search
    let lo: number = 0;
    let hi: number = A.length - 1;

    // go until pointers meet
    while (lo < hi) {
        // get midpoint
        const mid: number = Math.floor((hi + lo) / 2);

        // check if this is peak
        if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
            return mid;
        } else if (A[mid] > A[mid - 1]) {
            // search right half
            lo = mid;
        } else {
            // search left half
            hi = mid;
        }
    }

    // default
    return 0;
}
