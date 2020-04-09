/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
    // res
    let steps = 0;
    
    // keep going until 0
    while (num > 0) {
        
        // do math based on even odd
        (num % 2 === 0) ? num /= 2 : num -= 1;
        
        // increment steps
        steps++;
    }
    
    return steps;
};