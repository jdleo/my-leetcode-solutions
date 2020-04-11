/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  // get length of s
  const n = s.length;

  // result
  var res = '';

  // iterate thru s
  for (let i = 0; i < n; i++) {
    // first check if two characters from this is a #
    if (s.charAt(i + 2) === '#') {
      // get current char code
      const c = parseInt(s.charAt(i) + s.charAt(i + 1));
      // get string from char code and push to res
      res += String.fromCharCode(c + 96);
      // move i forward 2
      i += 2;
    } else {
      // get current char code
      const c = parseInt(s.charAt(i));
      // get string from char code and push to res
      res += String.fromCharCode(c + 96);
    }
  }

  return res;
};
