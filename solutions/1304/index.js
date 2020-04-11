/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = (n) => {
  // result (start with single 0)
  let res = [0];

  // negative and positive pointer
  let neg = -1;
  let pos = 1;

  // iterate n - 1 times
  for (let i = 0, j = 0; i < n - 1; i++) {
    // i is even, use neg, i is odd, use pos
    if (i % 2 === 0) {
      // push neg to array, and decrement neg
      res.push(neg--);
    } else {
      // push pos to array, and increment pos
      res.push(pos++);
    }
  }

  // if n was even, we need to subtract the last number to the second to last
  if (n % 2 === 0) res[n - 2] -= res[n - 1];

  return res;
};
