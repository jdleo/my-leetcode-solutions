/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    // running max
    let max = -1;

    // iterate backwards through array
    for (let i = arr.length - 1; i >= 0; i--) {
        // get temp
        const temp = arr[i];

        // set the value at this index to the current max
        arr[i] = max;

        // set new max (if this is it)
        max = Math.max(max, temp);
    }
    // return array
    return arr;
};