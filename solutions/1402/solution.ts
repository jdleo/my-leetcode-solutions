function maxSatisfaction(satisfaction: number[]): number {
    // maximum satisfaction
    let max: number = 0;

    // helper method to get satisfaction of all dishes
    function getSatisfaction(satisfaction: number[]): number {
        // just return sum of numbers multiplied by their order
        return satisfaction.map((s, i) => s * (i + 1)).reduce((a, b) => a + b, 0);
    }

    // recursive helper method to get max
    function getMax(satisfaction: number[]): number {
        // base case : empty array
        if (satisfaction.length === 0) return 0;
        // base case : no negative numbers (this will be max)
        if (satisfaction[0] >= 0) return getSatisfaction(satisfaction);

        // return the max between continuing to remove lowest dish
        // or, keeping it the way it is
        const sliced = satisfaction.slice(1, satisfaction.length);
        return Math.max(getMax(sliced), getSatisfaction(satisfaction));
    }

    // sort dishes ascending
    satisfaction.sort((a, b) => a - b);

    return getMax(satisfaction);
}
