/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  // queue to hold odds
  const queue = [];

  // get size of A
  const size = A.length;

  // iterate thru nums
  for (let i = 0; i < size; i++) {
    // check even/odd
    if (A[i] % 2 === 0) {
      // check if queue is not empty
      if (queue.length > 0) {
        // this swap with first odd in queue
        const f = queue.shift();
        A[f.index] = A[i];
        A[i] = f.val;

        // push the odd to the back of queue
        queue.push({ index: i, val: A[i] });
      }
    } else {
      // add index and value to queue
      queue.push({ index: i, val: A[i] });
    }
  }

  // in-place
  return A;
};
