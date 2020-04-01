/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
    // result
    let res = '';
    
    // iterate thru chars
    address.split('').forEach(char => {
       
        // check if dot
        if (char === '.') {
            res += '[.]';
        } else {
            // just append this char
            res += char;
        }
    });
    
    return res;
};