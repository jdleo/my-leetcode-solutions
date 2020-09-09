// solution
function selfDividingNumbers(left: number, right: number): number[] {
    // helper method to determine if self dividing
    function isSelfDividing(n: number): boolean {
        // create a reference to n (since we will be dividing n to get digits)
        const num = n;

        // while there are no more digits in n
        while (n > 0) {
            // check if num isnt divisible by rightmost digit
            if (num % (n % 10) !== 0) return false;

            // integer-divide by 10 to get next digit
            n = Math.floor(n / 10);
        }

        // no problems, must be true
        return true;
    }

    // to hold self dividing numbers
    let res: number[] = [];

    // go from left to right (inclusive)
    for (let i = left; i <= right; i++) {
        // if self dividing, add to res
        if (isSelfDividing(i)) res.push(i);
    }

    return res;
}
