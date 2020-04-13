/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  // xor both numbers and store in x
  x = x ^ y;

  // store count in y
  y = 0;

  // keep going until x is 0
  while (x > 0) {
    // add last bit to y
    y += x & 1;

    // right shift
    x >>= 1;
  }

  return y;
};
