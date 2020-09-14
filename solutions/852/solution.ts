function peakIndexInMountainArray(arr: number[]): number {
    // lo and hi pointer for binary search
    let lo = 0,
        hi = arr.length - 1;

    // go until pointers meet
    while (lo < hi) {
        // get mid point
        const mid: number = (hi + lo) >>> 1;
        console.log(mid);

        // check if decreasing
        if (arr[mid] > arr[mid + 1]) {
            // search left half
            hi = mid;
        } else {
            // search right half
            lo = mid + 1;
        }
    }

    // index is at lo pointer
    return lo;
}
