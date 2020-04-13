/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = (S) => {
  // output array
  const res = [];

  // each index represents lowerchase character
  // and the index it was seen at last
  const last_seen = Array(26).fill(0);

  // string length
  const n = S.length;

  // iterate thru string
  for (let i = 0; i < n; i++) {
    // set index
    last_seen[S.charCodeAt(i) - 97] = i;
  }

  // left and right pointers
  let [lo, hi] = [0, 0];

  // iterate back thru array
  for (let i = 0; i < n; i++) {
    // set new hi, so that this partition has all of this char
    hi = Math.max(hi, last_seen[S.charCodeAt(i) - 97]);

    // check if i counter reached end
    if (i === hi) {
      // partition, push length
      res.push(hi - lo + 1);

      // set lo
      lo = hi + 1;
    }
  }

  return res;
};
