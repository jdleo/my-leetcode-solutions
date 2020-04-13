/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = (A) => {
  // history of numbers seen
  const history = new Set();

  // length of array
  const n = A.length;

  // iterate thru nums
  for (let i = 0; i < n; i++) {
    // if this number has been seen, its the one we want
    if (history.has(A[i])) {
      return A[i];
    } else {
      // just push it
      history.add(A[i]);
    }
  }

  // nothing found
  return 0;
};
