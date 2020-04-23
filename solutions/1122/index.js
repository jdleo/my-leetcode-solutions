var relativeSortArray = function (arr1, arr2) {
    // create object to store {num : index seen}
    const obj = {};
    // iterate thru arr2
    for (let i = 0; i < arr2.length; i++) {
        // put num and its index
        obj[arr2[i]] = i;
    }
    // sort arr1 based on appearance in arr2 (obj)
    arr1.sort((a, b) => {
        // if either a or b not in obj, make it its number cubed + 1000
        let val1 = a in obj ? obj[a] : a ** 3 + 1000;
        let val2 = b in obj ? obj[b] : b ** 3 + 1000;
        // compare appearance a to b (only if both in arr2)
        return val1 - val2;
    });
    // return arr1 (sorted)
    return arr1;
};
