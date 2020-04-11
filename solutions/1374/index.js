/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = (n) => {
  // odd
  if (n % 2 === 1) {
    // just fill a string with a's n times
    return 'a'.repeat(n);
  }
  // even
  else {
    // just fill a string with a's n-1 times with 1 b
    return 'a'.repeat(n - 1) + 'b';
  }
};
