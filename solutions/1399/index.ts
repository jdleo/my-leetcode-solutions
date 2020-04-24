export {};

// memo object to hold {number : sum of its digits}
const memo: { [n: number]: number } = {};

function countLargestGroup(n: number): number {
    // object to hold { count : number of times it's been seen}
    const counts: { [count: number]: number } = {};

    // go from 1 to n
    for (let i = 1; i <= n; i++) {
        // set memo if not in memo
        if (!(i in memo)) memo[i] = getSum(i);

        // increment count of this sum of digits
        if (!(memo[i] in counts)) counts[memo[i]] = 0;
        counts[memo[i]]++;
    }

    // max size of sum of digits
    let max: number = 0;

    // current size of sums that have this max size
    let size: number = 0;

    // go thru values of counts object
    for (const count of Object.values(counts)) {
        // check if this count is bigger than max
        if (count > max) {
            // set new max and set new size
            max = count;
            size = 1;
        } else if (count === max) {
            // inc size
            size++;
        }
    }

    // result is size of set
    return size;
}

// helper func to get sum of digits of a number
function getSum(n: number) {
    // running sum
    let sum: number = 0;

    // go until n is 0
    while (n > 0) {
        // add rightmost digit to sum
        sum += n % 10;

        // get next digit
        n = Math.floor(n / 10);
    }

    return sum;
}
