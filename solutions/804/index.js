/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  // set to hold morse encoded strings
  const m = new Set();

  // iterate thru strings
  words.forEach((word) => {
    // current morse code
    let cur = '';

    // get length
    n = word.length;

    // iterate thru chars in word
    for (let i = 0; i < n; i++) {
      // add this encoded character to cur
      cur += morseCodes()[word.charCodeAt(i) - 97];
    }

    // add morse encoded string to set
    m.add(cur);
  });

  // size of set is how many uniques we have
  return m.size;
};

/**
 * morse encoding thats provided to us
 * @return {string[]} morse map
 */
const morseCodes = () => {
  return [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
};
