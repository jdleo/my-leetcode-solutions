function countGoodTriplets(
    arr: number[],
    a: number,
    b: number,
    c: number
): number {
    // num of good triplets
    let n = 0;

    // iterate thru array n^3
    for (let k = 0; k < arr.length; k++) {
        for (let j = 0; j < k; j++) {
            for (let i = 0; i < j; i++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) {
                    n++;
                }
            }
        }
    }

    return n;
}
