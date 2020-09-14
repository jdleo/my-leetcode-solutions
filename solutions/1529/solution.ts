function minFlips(target: string): number {
    // number of flips
    let flips = 0;
    // did we flip last? (0 for false 1 for true)
    let flipped = 0;
    // iterate thru target
    for (let i = 0; i < target.length; i++) {
        // check if we have to flip a bulb to get to this character
        if (target.charCodeAt(i) - 48 !== flipped) {
            // flip, and also add to flips
            flipped ^= 1;
            flips++;
        }
    }

    return flips;
}
