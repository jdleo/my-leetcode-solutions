/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    // max profit
    let max = 0;

    // current min
    let curMin = Infinity;

    // iterate thru prices
    prices.forEach(price => {
        // check if this price is lower than min
        if (price > curMin) {
            // check if we were to sell today
            max = Math.max(max, price - curMin);
        }

        // set new min
        curMin = Math.min(curMin, price);
    });

    // ret
    return max;
};