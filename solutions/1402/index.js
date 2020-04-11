/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = (satisfaction) => {
  // first, sort satisfaction ascending
  satisfaction.sort((a, b) => a - b);

  // call recursive function
  return getMax(satisfaction, 0);
};

/**
 * recursive helper method
 * @param {number[]} satisfaction
 * @return {number} max satisfaction
 */
const getMax = (satisfaction) => {
  // base cases
  if (satisfaction.length == 0) return 0;
  if (satisfaction[0] >= 0) return getLikeTime(satisfaction);

  // slice current array (dropping lowest)
  const sliced = satisfaction.slice(1);
  return Math.max(getLikeTime(satisfaction), getMax(sliced));
};

/**
 * recursive helper method
 * @param {number[]} satisfaction
 * @return {number} total like time coefficient sum
 */
const getLikeTime = (satisfaction) => {
  // running sum
  let sum = 0;

  console.log(satisfaction);

  // iterate thru satisfaction
  satisfaction.forEach((n, i) => {
    sum += n * (i + 1);
  });

  return sum;
};
