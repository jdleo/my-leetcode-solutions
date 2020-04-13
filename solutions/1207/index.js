/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  // object of counts {number: count}
  const counts = {};

  // set of occurrences
  const occ = new Set();

  // first fill counts
  for (let i = 0; i < arr.length; i++) {
    // increment if exists or create
    counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
  }

  // is unique flag
  let unique = true;

  // now go through occurrences
  Object.keys(counts).forEach((key) => {
    const count = counts[key];
    // check if seen before (not unique)
    if (occ.has(count)) {
      unique = false;
      return;
    } else {
      // put it
      occ.add(count);
    }
  });

  return unique;
};
