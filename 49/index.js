/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    // result array
    let res = [];

    // map
    let map = {};

    // iterate thru strings
    strs.forEach(str => {
        // get anagram string from our helper func
        const a = anagram(str);

        // check if in map
        if (a in map) {
            // add this str to it
            map[a].push(str);
        } else {
            // add this str to it
            map[a] = [str];
        }
    });

    // now go through map
    for (let key of Object.keys(map)) {
        // push to res array
        res.push(map[key]);
    }

    return res;
};

/**
 * helper method to create anagram string
 * @param {string} str
 * @return {string}
 */
const anagram = (str) => {
    // create empty array (to represent character counts)
    const arr = Array(26).fill(0);

    // iterate thru chars in this string
    for (let i = 0; i < str.length; i++) {
        // increment count at index
        arr[str.charCodeAt(i) - 97]++;
    }

    // return stringified version of array
    return JSON.stringify(arr);
}