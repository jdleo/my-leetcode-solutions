/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = (n) => {
  // odd
  if (n % 2 === 1) {
    // just fill an array with a's n times
    return Array(n).fill('a').join('');
  }
  // even
  else {
    // first, fill an array with a's n-1 times
    const res = Array(n - 1).fill('a');
    // push a single b
    res.push('b');

    return res.join('');
  }
};
