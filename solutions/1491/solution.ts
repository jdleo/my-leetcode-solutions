function average(salary: number[]): number {
    // min and max
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    // running sum
    let sum = 0;

    // iterate thru salaries
    for (let s of salary) {
        // set min and max
        min = Math.min(min, s);
        max = Math.max(max, s);

        // add to running sum
        sum += s;
    }

    // return (total sum - min and max) / (amount of salaries - 2)
    return (sum - (min + max)) / (salary.length - 2);
}
