function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    // hash map to store indices in which we encounted elements in arr2
    const order: { [num: number]: number } = {};
    // iterate thru arr2, and fill our order
    for (let i = 0; i < arr2.length; i++) order[arr2[i]] = i;
    // sort arr1 based on custom comparator
    arr1.sort((a, b) => {
        // check if value a and b are in order map, take index as order key
        // if not, add 1001 to them, (so that they're after everyone else)
        a = a in order ? order[a] : a + 1001;
        b = b in order ? order[b] : b + 1001;
        // sort ascending
        return a - b;
    });
    // arr1 is sorted now, we can return it
    return arr1;
}
