/**
 * @param {string} s
 * @return {string}
 */
const sortString = (s) => {
  // fill occurrence array with 0s
  let occ = new Array(26).fill(0);

  // res
  let res = [];

  // fill array w/ occurrences
  for (let i = 0; i < s.length; i++) {
    occ[s.charCodeAt(i) - 97]++;
  }

  // flag to break
  let flag = true;

  // keep going while there are still chars to pick
  while (res.length < s.length) {
    // iterate thru occ array
    for (let i = 0; i < occ.length; i++) {
      // get position
      let pos = i;
      if (!flag) {
        // set position
        pos = 25 - i;
      }

      // if its it has been seen
      if (occ[pos] !== 0) {
        // push the character
        res.push(String.fromCharCode(pos + 97));

        // decrease occurrence
        occ[pos] -= 1;
      }
    }

    // invert flag
    flag = !flag;
  }

  // join res
  res = res.join('');

  return res;
};
