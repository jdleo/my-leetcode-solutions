/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  // max profit
  let profit = 0;

  // current min
  let curMin = Infinity;

  // iterate thru prices
  prices.forEach((price) => {
    // check if this price is lower than min
    if (price > curMin) {
      // we can take profit today
      profit += price - curMin;

      // reset curMin
      curMin = price;
    } else {
      // set new min
      curMin = Math.min(curMin, price);
    }
  });

  // ret
  return profit;
};
