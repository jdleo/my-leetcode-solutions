function replaceElements(arr: number[]): number[] {
    // current max number we've seen
    let max: number = -1;
    // go through the array from the right,
    // put in the number representing the max number at that point in arr
    for (let i = arr.length - 1; i >= 0; i--) {
        // store temp
        let temp: number = arr[i];
        // change current value to current max
        arr[i] = max;
        // set new max
        max = Math.max(max, temp);
    }

    return arr;
}
