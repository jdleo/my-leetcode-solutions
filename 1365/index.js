/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = (nums) => {
  // result
  let res = [];

  // occurrence counts
  let counts = Array(101).fill(0);

  // iterate thru nums
  nums.forEach((num) => {
    // increment
    counts[num]++;
  });

  // iterate back thru
  nums.forEach((num) => {
    // count of numbers smaller than current
    let count = 0;

    // only iterate up to this number (all nums less than)
    for (let i = 0; i < num; i++) {
      // add occurrence to count
      count += counts[i];
    }

    // append count to res
    res.push(count);
  });

  // ret
  return res;
};
