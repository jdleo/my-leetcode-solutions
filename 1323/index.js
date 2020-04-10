/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
    // result str
    let res = "";

    // flag for if we found the first six
    let found = false;

    // iterate thru chars of number
    [...num.toString()].forEach((digit) => {
        // check if 6 and we haven't found one yet
        if (!found && digit === '6') {
            // change this to 9
            res += '9';
            // set flag
            found = true;
        } else {
            // just add this digit to res
            res += digit;
        }
    });

    // return res as integer
    return parseInt(res);
};
