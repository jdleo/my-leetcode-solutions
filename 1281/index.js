/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
    // running prod
    let prod = 1;

    // running sum
    let sum = 0;

    // go until n is 0
    while (n > 0) {
        // get current digit
        const current_digit = n % 10;

        // add to prod and sum
        prod *= current_digit;
        sum += current_digit;

        // move digits forward
        n = Math.floor(n / 10);
    }

    // return difference
    return prod - sum;
};
