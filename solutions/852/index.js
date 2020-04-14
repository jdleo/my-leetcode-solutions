function peakIndexInMountainArray(A) {
    // lo and hi pointers for binary search
    let lo = 0;
    let hi = A.length - 1;
    // go until pointers meet
    while (lo < hi) {
        // get midpoint
        const mid = Math.floor((hi + lo) / 2);
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
