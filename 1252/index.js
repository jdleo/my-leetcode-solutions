/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (n, m, indices) => {
  // create nxm matrix filled with 0s
  let matrix = [];
  [...Array(n)].forEach((_) => {
    matrix.push(Array(m).fill(0));
  });

  // iterate thru indices
  indices.forEach((index) => {
    // get row and col for clarity
    const [row, col] = [index[0], index[1]];

    // increment all in same row by 1
    for (let i = 0; i < m; i++) {
      matrix[row][i]++;
    }

    // increment all in same col by 1
    for (let i = 0; i < n; i++) {
      matrix[i][col]++;
    }
  });

  // number of odds
  let odds = 0;

  // iterate thru matrix one final time to count odds
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      odds += matrix[i][j] % 2;
    }
  }

  return odds;
};
