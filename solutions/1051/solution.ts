function heightChecker(heights: number[]): number {
    // frequencies of different heights
    const count: Int8Array = new Int8Array(101);

    // iterate thru heights and fill frequencies
    for (let height of heights) {
        // increment count for this height
        count[height]++;
    }

    // result, and pointer for current person
    let res = 0,
        person = 0;

    // iterate through each possible height
    for (let i = 0; i < count.length; i++) {
        // keep going until all people are accounted for on this height
        while (count[i]--) {
            // if current person's height is NOT the height we're on,
            // they are out of order
            if (heights[person++] !== i) res++;
        }
    }

    return res;
}
