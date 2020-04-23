function findLucky(arr) {
    // map to counts of each number
    const map = new Map();
    // iter thru arr
    for (let i = 0; i < arr.length; i++) {
        // check if not seen number before
        if (!map.has(arr[i]))
            map.set(arr[i], 0);
        // increment count
        map.set(arr[i], map.get(arr[i]) + 1);
    }
    // current max number
    let max = -1;
    for (const e of map.entries()) {
        // check if num equal to keys
        if (e[0] === e[1]) {
            // take max
            max = Math.max(max, e[0]);
        }
    }
    return max;
}
