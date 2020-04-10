/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function (rating) {
    // count
    let count = 0;

    // iterate n^3 (BAD! i know)
    for (let i = 0; i < rating.length; i++) {
        for (let j = i; j < rating.length; j++) {
            for (let k = j; k < rating.length; k++) {
                // make sure different indices
                if (i != j && j != k && k != i) {
                    if (
                        (rating[i] > rating[j] && rating[j] > rating[k]) ||
                        (rating[i] < rating[j] && rating[j] < rating[k])
                    ) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};