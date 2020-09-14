function canMakeArithmeticProgression(arr: number[]): boolean {
    // min and max
    let min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;

    // iterate thru array
    for (let num of arr) {
        // set min max
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    // check if there's no valid step
    if ((max - min) % (arr.length - 1) !== 0) return false;
    // find the step size
    const step = (max - min) / (arr.length - 1);
    // all numbers are same
    if (step === 0) return true;
    // set to store numbers seen
    const set: Set<number> = new Set();
    // iterate thru nums again
    for (let num of arr) {
        if ((num - min) % step !== 0) return false;
        if (set.has((num - min) / step)) return false;
        set.add((num - min) / step);
    }

    // no issues
    return true;
}
