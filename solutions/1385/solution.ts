function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    // result (number of elements in arr1 such that for
    // all |arr[i] - arr[j]|) there is no <= d
    let res = 0;

    // reference to abs
    const abs = Math.abs;

    // iterate thru arr1
    for (let i = 0; i < arr1.length; i++) {
        // increment res, if FOR ALL arr2, distance > d
        if (arr2.every((n) => abs(arr1[i] - n) > d)) res++;
    }
    return res;
}
