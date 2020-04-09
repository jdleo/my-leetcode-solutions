/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = (nums) => {
    // res
    let res = 0;
    
    // iter thru nums
    nums.forEach(num => {
        res += isEven(num); 
    });
    
    return res;
};

const isEven = (digit) => {
    let count = 0;
    
    while (digit > 0) {
        count++;
        digit = Math.floor(digit / 10);
    }
    
    return ((count+1) % 2);
}