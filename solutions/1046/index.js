/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  // base cases
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  // keep going until there is one stone left
  while (stones.length > 1) {
    // sort the stones descending
    stones.sort((a, b) => b - a);

    if (stones[0] === stones[1]) {
      // both get removed
      stones.splice(0, 2);
    } else {
      // absorb 2nd into 1st
      stones[0] -= stones[1];

      // destrot 2nd stone
      stones.splice(1, 1);
    }
  }

  // return last stone
  return stones[0] ? stones[0] : 0;
};
