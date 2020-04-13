/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = (tiles) => {
  // set to hold posssibilites
  const set = new Set();

  // call recursive function
  getPossibilities(tiles, set, 0, tiles.length, '');

  // -1 because we can't have '' string
  return set.size - 1;
};

/**
 * recursive helper method to get possibilities
 * @param {string} tiles
 * @param {Set<number>} set
 * @param {number} c number of choices weve made so far
 * @param {number} m max number of choices
 * @param {string} seq the sequence string built so far
 */
const getPossibilities = (tiles, set, c, m, seq) => {
  // check if we made all choices we can make
  if (c === m) {
    // add to set
    set.add(seq);
    // break recursion
    return;
  }

  // go through remaining tiles
  for (let i = 0; i < tiles.length; i++) {
    // simulate 'taking' this tile at index i
    getPossibilities(
      tiles.substr(0, i) + tiles.substr(i + 1, tiles.length),
      set,
      c + 1, // increment choices weve made
      m,
      seq + tiles.charAt(i) // add this tile chosen to sequence
    );
  }

  // also simulate choosing 'nothing'
  getPossibilities(tiles, set, c + 1, m, seq);
};
