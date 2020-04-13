/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  // xor both numbers and turn to binary string
  const xor = (x ^ y).toString(2);

  // count
  let count = 0;

  // iterate thru xor string
  for (let i = 0; i < xor.length; i++) {
    // xor yields a 1 bit when bits differ
    // so add to count if char is 1
    if (xor.charAt(i) === '1') count++;
  }

  return count;
};
