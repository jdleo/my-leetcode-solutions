/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  // result array
  const res = [];
  // iterate from left to right (inclusive)
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) res.push(i);
  }

  return res;
};

/**
 * helper method to determine if self dividing
 * @param {number} n
 * @return {boolean} is it self dividing?
 */
const isSelfDividing = function (n) {
  // flag
  let flag = true;
  // iterate thru digits of this number
  getDigits(n).forEach((digit) => {
    // check if divisible by this digit
    if (n % digit !== 0) {
      flag = false;
      return;
    }
  });

  // result in flag
  return flag;
};

/**
 * helper method to get digits of a number
 * @param {number} n
 * @return {number[]} list of digits in this number
 */
const getDigits = (n) => {
  // arr of digits
  const res = [];
  // until n is 0
  while (n > 0) {
    // push current digit to res
    res.push(n % 10);
    // div by 10 to get next digit
    n = Math.floor(n / 10);
  }

  return res;
};
