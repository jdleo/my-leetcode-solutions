function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // for max value
    let max: number = 0;

    // iterate thru candies and find greatest
    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i]);
    }

    // return a map of candies, true if adding extra candies makes it greater than max
    return candies.map((c) => c + extraCandies >= max);
}
