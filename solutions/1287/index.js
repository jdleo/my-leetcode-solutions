function findSpecialInteger(arr) {
    // get 'window' size which is just 25% of array to int
    const w = Math.ceil(arr.length * 0.25);
    // just iterate thru array until window reaches end
    for (let i = 0; i + w < arr.length; i++) {
        // if number at beginning and end of window are same,
        // this is the special number
        if (arr[i] === arr[i + w])
            return arr[i];
    }
    // never found one
    return -1;
}
