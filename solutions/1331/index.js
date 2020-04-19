function arrayRankTransform(arr) {
    // use set to get distincts and sort ascending
    const arr2 = Array.from(new Set(arr)).sort((a, b) => a - b);
    // object to hold ranks format {number: rank}
    const ranks = {};
    // iterate thru our sorted, distinct array
    for (var i = 0; i < arr2.length; i++) {
        // number at i is rank i + 1 (since ascending)
        ranks[arr2[i]] = i + 1;
    }
    // iterate thru original array
    for (let i = 0; i < arr.length; i++) {
        // the rank for this number can be found in ranks obj
        arr[i] = ranks[arr[i]];
    }
    return arr;
}
