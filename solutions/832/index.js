/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
  // get rows and cols in A
  const [m, n] = [A.length, A[0].length];

  // iterate through each row
  for (let i = 0; i < m; i++) {
    // iterate through each col
    for (let j = 0; j < n / 2; j++) {
      // perform swap for reverse
      const temp = A[i][n - 1 - j];
      A[i][n - 1 - j] = A[i][j];
      A[i][j] = temp;

      //  xor each with 1 for inverse
      A[i][n - 1 - j] ^= 1;
      if (j != n - 1 - j) A[i][j] ^= 1;
    }
  }

  return A;
};
