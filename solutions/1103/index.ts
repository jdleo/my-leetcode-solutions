function distributeCandies(
    candies: number,
    num_people: number
): number[] {
    // empty array of size num_people
    const res: number[] = Array(num_people).fill(0);

    // candies to give (starts at 1)
    let n: number = 1;

    // pointer for loop
    let i: number = 0;

    // keep going until candies is 0
    while (candies > 0) {
        // give n candies to i'th person (circular indexing)
        res[i % num_people] += n;

        // subtract from candies (we gave them)
        candies -= n;

        // increase candies n + 1
        n++;
        i++;
    }

    // add rest of candies to last person we gave candies to
    // (this takes care of case that candies are negative at end)
    res[(i - 1) % num_people] += candies;

    return res;
}
