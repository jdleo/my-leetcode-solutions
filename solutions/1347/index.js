/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s, t) => {
  // get character counts for both strings
  const s_count = count(s);
  const t_count = count(t);

  // sum of differences
  let sum = 0;

  // loop through t
  for (let i = 0; i < t_count.length; i++) {
    // if count of t's char is greater than count of s's char
    if (t_count[i] > s_count[i]) {
      // this represents the amount of changes we need to make these equal
      sum += t_count[i] - s_count[i];
    }
  }

  return sum;
};

/**
 * helper function to make char counts object
 * @param {string} s
 * @return {number[]} counts array
 */
const count = (s) => {
  // array of 0s representing lowercase character counts
  const res = Array(26).fill(0);

  // length of s
  const n = s.length;

  // iterate thru chars in s
  for (let i = 0; i < n; i++) {
    // increment this character's count
    res[s.charCodeAt(i) - 97]++;
  }

  return res;
};
