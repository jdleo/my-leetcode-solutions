/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = (J, S) => {
    // res
    let res = 0;

    // jewels set
    let jewels = new Set();

    // iterate thru jewels
    J.split("").forEach(jewel => {
        // add to set
        jewels.add(jewel);
    });

    // iterate thru stones
    S.split("").forEach(stone => {
        // check if this stone in jewel set
        if (jewels.has(stone)) res++;
    });

    return res;
};
