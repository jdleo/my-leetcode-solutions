var relativeSortArray = function (
    arr1: number[],
    arr2: number[]
): number[] {
    // create object to store {num : index seen}
    const obj: { [n: number]: number } = {};

    // iterate thru arr2
    for (let i = 0; i < arr2.length; i++) {
        // put num and its index
        obj[arr2[i]] = i;
    }

    // sort arr1 based on appearance in arr2 (obj)
    arr1.sort((a: number, b: number) => {
        // if either a or b not in obj, make it its number cubed + 1000
        let val1: number =
            a in obj ? obj[a] : a ** 3 + 1000;
        let val2: number =
            b in obj ? obj[b] : b ** 3 + 1000;

        // compare appearance a to b (only if both in arr2)
        return val1 - val2;
    });

    // return arr1 (sorted)
    return arr1;
};