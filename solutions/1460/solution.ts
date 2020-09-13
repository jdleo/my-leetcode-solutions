function canBeEqual(target: number[], arr: number[]): boolean {
    // really, the reversing stuff is nonsense, since we can just reverse pairs
    // until they're equal. so really we just wanna check if the arrays
    // have the same elements (disregarding order)

    // map to keep track of number counts in arr
    const counts: Map<number, number> = new Map();

    // iterate thru arr to fill counts
    for (let i = 0; i < arr.length; i++) {
        // increment count in map for this num
        counts.set(arr[i], counts.has(arr[i]) ? counts.get(arr[i])! + 1 : 1);
    }

    // now iterate thru target
    for (let i = 0; i < target.length; i++) {
        // first, check if counts doesnt have this number
        if (!counts.has(target[i])) {
            // they'll never be equal
            return false;
        } else {
            // check if decrementing count would be < 0 (uneven counts)
            const new_count: number = counts.get(target[i])! - 1;
            if (new_count < 0) {
                return false;
            } else {
                // decrement
                counts.set(target[i], new_count);
            }
        }
    }

    // no violations
    return true;
}
