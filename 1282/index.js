/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
  // result
  let res = [];

  // map of sizes to members that belong to them
  let map = {};

  // size of array
  const n = groupSizes.length;

  // iterate 0 to n-1
  for (let i = 0; i < n; i++) {
    // get size
    const size = groupSizes[i];

    // check if group size in map
    if (size in map) {
      // add this group member to that entry
      map[size] = [...map[size], i];
    } else {
      // make this the first entry
      map[size] = [i];
    }

    // check if this current bucket is at max capacity
    if (map[size].length === size) {
      // push to res
      res.push(map[size]);

      // clear 'wait list'
      map[size] = [];
    }
  }

  return res;
};
